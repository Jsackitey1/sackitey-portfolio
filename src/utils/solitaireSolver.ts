import { Card, GameState, SUITS, getCardValue } from '../types/solitaire';

// Helper to clone state deeply
const cloneState = (state: GameState): GameState => ({
    stock: [...state.stock],
    waste: [...state.waste],
    foundations: {
        hearts: [...state.foundations.hearts],
        diamonds: [...state.foundations.diamonds],
        clubs: [...state.foundations.clubs],
        spades: [...state.foundations.spades]
    },
    tableau: state.tableau.map(col => col.map(c => ({ ...c }))), // Deep clone cards? No, card objects are immutable enough, but array structure matters.
    // Actually card objects have `faceUp` which changes. So yes, clone cards.
    score: state.score,
    moves: state.moves,
    status: state.status
});

const hashState = (state: GameState): string => {
    // Create a minimal string representation for visited set
    // Order: Foundations lengths, Stock length, Waste top, Tableau(faceUps info)
    const f = SUITS.map(s => state.foundations[s].length).join(',');
    const s = state.stock.length;
    const w = state.waste.length > 0 ? state.waste[state.waste.length - 1].id : 'x';
    const t = state.tableau.map(col => {
        if (col.length === 0) return 'e';
        // ID of top card + index of first faceup card
        const top = col[col.length - 1];
        const firstFaceUp = col.findIndex(c => c.faceUp);
        return `${top.id}:${firstFaceUp}`;
    }).join('|');
    return `${f}|${s}|${w}|${t}`;
};

// Simplified simulator for checking solvability
// Returns true if solvable within N steps
export const isSolvable = (deck: Card[]): boolean => {
    // 1. Setup Initial State
    const tableau: Card[][] = Array(7).fill([]).map(() => []);
    let deckIndex = 0;
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j <= i; j++) {
            const card = { ...deck[deckIndex], faceUp: j === i }; // Only last one face up
            tableau[i].push(card);
            deckIndex++;
        }
    }
    const stock = deck.slice(deckIndex).map(c => ({ ...c, faceUp: false }));

    const initialState: GameState = {
        stock,
        waste: [],
        foundations: { hearts: [], diamonds: [], clubs: [], spades: [] },
        tableau,
        score: 0,
        moves: 0,
        status: 'playing'
    };

    const queue: GameState[] = [initialState];
    const visited = new Set<string>();
    visited.add(hashState(initialState));

    let steps = 0;
    const MAX_STEPS = 5000; // Hard limit for responsiveness

    while (queue.length > 0 && steps < MAX_STEPS) {
        // DFS or BFS? BFS finds shortest, DFS is deeper.
        // For solvability, we just need ANY path.
        // Heuristic: Prefer moves that reveal cards or move to foundation.
        // Let's use a "Priority Queue" approach by sorting available moves? 
        // Or just simple greedy DFS with backtracking effectively (using stack).
        // Using simple stack (pop) = DFS.

        const currentState = queue.pop()!;
        steps++;

        // Check Win
        const foundationCount = SUITS.reduce((sum, s) => sum + currentState.foundations[s].length, 0);
        if (foundationCount === 52) return true; // Found a win!

        // Optimization: If foundation count is high (e.g. > 45), assume winnable? 
        // Risky, but speeds up. Let's stick to true win for now.

        const nextStates: GameState[] = [];

        // --- Generate Moves ---

        // 1. Move to Foundation (Auto-win check logic often moves these first)
        // From Tableau
        for (let isTableau = 0; isTableau <= 7; isTableau++) { // 0-6 are tableau cols, 7 is waste 
            // Simplified iteration
            let card: Card | undefined;
            let fromPileType = '';
            let fromIdx = -1;

            if (isTableau < 7) {
                const col = currentState.tableau[isTableau];
                if (col.length > 0) {
                    card = col[col.length - 1];
                    fromPileType = 'tableau';
                    fromIdx = isTableau;
                }
            } else {
                // Waste
                if (currentState.waste.length > 0) {
                    card = currentState.waste[currentState.waste.length - 1];
                    fromPileType = 'waste';
                }
            }

            if (card) {
                // Can move to foundation?
                const pile = currentState.foundations[card.suit];
                let canMove = false;
                if (pile.length === 0) {
                    if (card.rank === 'A') canMove = true;
                } else {
                    const top = pile[pile.length - 1];
                    if (getCardValue(card.rank) === getCardValue(top.rank) + 1) canMove = true;
                }

                if (canMove) {
                    const newState = cloneState(currentState);
                    // Apply Move
                    let movedCard: Card;
                    if (fromPileType === 'tableau') {
                        movedCard = newState.tableau[fromIdx].pop()!;
                        if (newState.tableau[fromIdx].length > 0) {
                            newState.tableau[fromIdx][newState.tableau[fromIdx].length - 1].faceUp = true;
                        }
                    } else {
                        movedCard = newState.waste.pop()!;
                    }
                    newState.foundations[card.suit].push(movedCard);

                    const h = hashState(newState);
                    if (!visited.has(h)) {
                        visited.add(h);
                        nextStates.push(newState); // High priority
                    }
                }
            }
        }

        // 2. Tableau to Tableau
        // Try moving from any tableau stack (face up part) or waste to another tableau column
        // We only care about moving the *base* of a stack to a target.
        // Moving substacks is equivalent to moving the base card.

        // Sources: Waste, Tableau (face up cards)
        const sources: { type: 'waste' | 'tableau', colIdx?: number, card: Card, substack?: Card[] }[] = [];

        if (currentState.waste.length > 0) {
            sources.push({ type: 'waste', card: currentState.waste[currentState.waste.length - 1] });
        }

        currentState.tableau.forEach((col, idx) => {
            if (col.length > 0) {
                // We can move any face-up card and the cards above it
                // Optimally, we usually only want to move the valid substack that helps?
                // Let's just consider moving the specific meaningful chunks.
                // Simple solver: Iterate all face up cards.
                col.forEach((c, cIdx) => {
                    if (c.faceUp) {
                        sources.push({ type: 'tableau', colIdx: idx, card: c, substack: col.slice(cIdx) });
                    }
                });
            }
        });

        // Targets: Tableau columns
        currentState.tableau.forEach((targetCol, targetIdx) => {
            sources.forEach(source => {
                // Cannot move to self
                if (source.type === 'tableau' && source.colIdx === targetIdx) return;

                // Helper check
                let valid = false;
                if (targetCol.length === 0) {
                    if (source.card.rank === 'K') valid = true;
                } else {
                    const top = targetCol[targetCol.length - 1];
                    if (top.color !== source.card.color && getCardValue(top.rank) === getCardValue(source.card.rank) + 1) {
                        valid = true;
                    }
                }

                if (valid) {
                    const newState = cloneState(currentState);

                    // Execute move
                    let cardsToMove: Card[] = [];
                    if (source.type === 'waste') {
                        cardsToMove = [newState.waste.pop()!];
                    } else {
                        // Tableau
                        const sCol = newState.tableau[source.colIdx!];
                        const cutIdx = sCol.findIndex(c => c.id === source.card.id); // Find index relative to new cloned state
                        cardsToMove = sCol.splice(cutIdx);
                        // Reveal next
                        if (sCol.length > 0) sCol[sCol.length - 1].faceUp = true;
                    }

                    newState.tableau[targetIdx].push(...cardsToMove);

                    const h = hashState(newState);
                    if (!visited.has(h)) {
                        visited.add(h);
                        queue.push(newState); // Normal priority
                    }
                }
            });
        });

        // 3. Stock to Waste
        if (currentState.stock.length > 0 || currentState.waste.length > 0) {
            // If stock empty, recycle waste
            const newState = cloneState(currentState);
            if (newState.stock.length === 0) {
                newState.stock = newState.waste.reverse().map(c => ({ ...c, faceUp: false }));
                newState.waste = [];
            } else {
                const c = newState.stock.shift()!;
                c.faceUp = true;
                newState.waste.push(c);
            }

            const h = hashState(newState);
            if (!visited.has(h)) {
                visited.add(h);
                queue.push(newState); // Low priority
                // Note: Logic allows recycle, but check hash to prevent infinite loops of just flipping stock/waste
            }
        }

        // Add priority states (Foundation moves) to queue
        // Since using push/pop (Stack), pushing Foundation moves LAST makes them processed FIRST (DFS).
        nextStates.forEach(s => queue.push(s));
    }

    // Timeout / limit reached
    return false;
};
