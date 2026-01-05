import React, { useState, useEffect, useCallback } from 'react';
import './Solitaire.css';

// Types
type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
type Color = 'red' | 'black';
type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

interface Card {
  id: string;
  suit: Suit;
  rank: Rank;
  color: Color;
  faceUp: boolean;
}

interface GameState {
  stock: Card[];
  waste: Card[];
  foundations: { [key in Suit]: Card[] };
  tableau: Card[][];
  score: number;
  moves: number;
  status: 'playing' | 'won';
}

const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
const RANKS: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const getCardValue = (rank: Rank): number => {
  return RANKS.indexOf(rank) + 1;
};

const getSuitColor = (suit: Suit): Color => {
  return suit === 'hearts' || suit === 'diamonds' ? 'red' : 'black';
};

const getSuitSymbol = (suit: Suit): string => {
  switch (suit) {
    case 'hearts': return '♥';
    case 'diamonds': return '♦';
    case 'clubs': return '♣';
    case 'spades': return '♠';
  }
};

const Solitaire: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    stock: [],
    waste: [],
    foundations: {
      hearts: [],
      diamonds: [],
      clubs: [],
      spades: []
    },
    tableau: [],
    score: 0,
    moves: 0,
    status: 'playing'
  });

  const [selectedCard, setSelectedCard] = useState<{ pile: string, index: number, card: Card } | null>(null);

  // Initialize Game
  const initializeGame = useCallback(() => {
    // Create Deck
    const newDeck: Card[] = [];
    SUITS.forEach(suit => {
      RANKS.forEach(rank => {
        newDeck.push({
          id: `${rank}-${suit}`,
          suit,
          rank,
          color: getSuitColor(suit),
          faceUp: false
        });
      });
    });

    // Shuffle
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    // Deal to Tableau
    const newTableau: Card[][] = Array(7).fill([]).map(() => []);
    let deckIndex = 0;

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j <= i; j++) {
        const card = { ...newDeck[deckIndex], faceUp: j === i };
        newTableau[i].push(card);
        deckIndex++;
      }
    }

    const newStock = newDeck.slice(deckIndex).map(card => ({ ...card, faceUp: false }));

    setGameState({
      stock: newStock,
      waste: [],
      foundations: {
        hearts: [],
        diamonds: [],
        clubs: [],
        spades: []
      },
      tableau: newTableau,
      score: 0,
      moves: 0,
      status: 'playing'
    });
    setSelectedCard(null);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Card Movement Logic
  const canMoveToFoundation = (card: Card, suit: Suit): boolean => {
    const pile = gameState.foundations[suit];
    if (card.suit !== suit) return false;

    if (pile.length === 0) {
      return card.rank === 'A';
    }

    const topCard = pile[pile.length - 1];
    return getCardValue(card.rank) === getCardValue(topCard.rank) + 1;
  };

  const canMoveToTableau = (card: Card, columnIndex: number): boolean => {
    const column = gameState.tableau[columnIndex];

    if (column.length === 0) {
      return card.rank === 'K';
    }

    const topCard = column[column.length - 1];
    return topCard.faceUp &&
      topCard.color !== card.color &&
      getCardValue(topCard.rank) === getCardValue(card.rank) + 1;
  };

  // Actions
  const handleStockClick = () => {
    if (gameState.stock.length === 0) {
      // Recycle waste to stock
      if (gameState.waste.length === 0) return;

      const newStock = [...gameState.waste].reverse().map(c => ({ ...c, faceUp: false }));
      setGameState(prev => ({
        ...prev,
        stock: newStock,
        waste: [],
        moves: prev.moves + 1
      }));
    } else {
      // Draw card
      const card = { ...gameState.stock[0], faceUp: true };
      setGameState(prev => ({
        ...prev,
        stock: prev.stock.slice(1),
        waste: [...prev.waste, card],
        moves: prev.moves + 1
      }));
    }
    setSelectedCard(null);
  };

  const handleCardClick = (card: Card, sources: { pile: string, index: number }) => {
    if (!card.faceUp) {
      // If it's a closed tableau card and it's the top one (exposed), flip it? No, logic handles flipping automatically when top card is removed.
      // Actually, we need to handle flipping if it's the last card in a tableau column and face down? 
      // Wait, standard solitaire rules: only the top card if exposed (no cards on top) is flipped. 
      // In our data structure, if we move a card, we should check if the new top card needs flipping.
      return;
    }

    if (selectedCard) {
      // Attempt to move selected card to this target
      // If same card, deselect
      if (selectedCard.card.id === card.id) {
        setSelectedCard(null);
        return;
      }

      // Check if target is a valid tableau move
      if (sources.pile.startsWith('tableau')) {
        const targetColIndex = parseInt(sources.pile.split('-')[1]);

        // We are trying to move 'selectedCard' (could be a stack) onto 'card' (which is at 'targetColIndex')
        // 'card' must be the top card of that column for this to be a valid click target usually?
        // Actually, 'card' is just the card clicked. In tableau, can only move to the last card.

        const targetColumn = gameState.tableau[targetColIndex];
        const targetTopCard = targetColumn[targetColumn.length - 1];

        if (targetTopCard.id === card.id) {
          handleMoveAttempt(targetColIndex);
        } else {
          // Clicked on a card that isn't the top of the pile, so switch selection
          setSelectedCard({ ...sources, card });
        }
      } else {
        // Clicked on foundation/waste?? switch selection
        setSelectedCard({ ...sources, card });
      }
    } else {
      // Select logic
      // Can select from waste (top only)
      // Can select from tableau (any face up card)
      // Can select from foundation (top only) - usually allows moving back

      if (sources.pile === 'waste') {
        // Only last card selectable
        if (sources.index === gameState.waste.length - 1) {
          setSelectedCard({ ...sources, card });
        }
      } else if (sources.pile.startsWith('tableau')) {
        setSelectedCard({ ...sources, card });
      } else if (sources.pile.startsWith('foundation')) {
        setSelectedCard({ ...sources, card });
      }
    }
  };

  const handleDoubleClick = (card: Card, source: { pile: string, index: number }) => {
    // Try to move to foundation
    for (const suit of SUITS) {
      if (canMoveToFoundation(card, suit)) {
        setSelectedCard({ card, ...source });
        // Use setTimeout to allow state update of selection (though we could refactor executeMove to take args directly)
        // Better: Refactor executeMove to take explicit source/card args or just handle it here directly.
        // But executeMove relies on selectedCard state.
        // Let's modify executeMove to optionally take a 'moveOp' object, or just set selection and trigger next render? No, that's racy.

        // To be safe and clean, let's just manually trigger the move logic here tailored for double click
        // But reuse logic is better.
        // Let's change executeMove to read from args if provided.

        // Actually, we can just call a direct move helper that doesn't rely on `selectedCard` state for this specific action.
        directMove(source, suit);
        return;
      }
    }
  };

  const directMove = (source: { pile: string, index: number }, targetSuit: Suit) => {
    setGameState(prev => {
      const newGameState = {
        ...prev,
        tableau: prev.tableau.map(col => [...col]),
        foundations: { ...prev.foundations, [targetSuit]: [...prev.foundations[targetSuit]] },
        waste: [...prev.waste],
        stock: [...prev.stock]
      };

      let movedCards: Card[] = [];

      // Remove
      if (source.pile === 'waste') {
        movedCards = [newGameState.waste.pop()!];
      } else if (source.pile.startsWith('tableau')) {
        const colIdx = parseInt(source.pile.split('-')[1]);
        const col = newGameState.tableau[colIdx];
        movedCards = col.splice(source.index);

        if (col.length > 0 && !col[col.length - 1].faceUp) {
          col[col.length - 1].faceUp = true;
          newGameState.score += 5;
        }
      }

      // Add
      newGameState.foundations[targetSuit].push(movedCards[0]);
      newGameState.score += 10;
      newGameState.moves += 1;

      // Win check
      const foundationCount = Object.values(newGameState.foundations).reduce((acc, pile) => acc + pile.length, 0);
      if (foundationCount === 52) {
        newGameState.status = 'won';
      }

      return newGameState;
    });
    setSelectedCard(null); // Clear any selection
  };

  const handleEmptyTableauClick = (colIndex: number) => {
    if (selectedCard) {
      handleMoveAttempt(colIndex);
    }
  };

  const handleFoundationClick = (suit: Suit) => {
    if (selectedCard) {
      // Move from selectedCard to foundation
      const pile = selectedCard.pile;
      let cardsToMove: Card[] = [];

      if (pile === 'waste') {
        cardsToMove = [selectedCard.card];
      } else if (pile.startsWith('tableau')) {
        const colIdx = parseInt(pile.split('-')[1]);
        const col = gameState.tableau[colIdx];
        // Can only move one card to foundation at a time
        if (selectedCard.index === col.length - 1) {
          cardsToMove = [selectedCard.card];
        }
      }

      if (cardsToMove.length === 1) {
        const card = cardsToMove[0];
        if (canMoveToFoundation(card, suit)) {
          executeMove(suit);
        }
      }
    }
  };

  const executeMove = (target: string | number) => {
    if (!selectedCard) return;

    setGameState(prev => {
      const newGameState = {
        ...prev,
        tableau: prev.tableau.map(col => [...col]),
        foundations: {
          hearts: [...prev.foundations.hearts],
          diamonds: [...prev.foundations.diamonds],
          clubs: [...prev.foundations.clubs],
          spades: [...prev.foundations.spades]
        },
        waste: [...prev.waste],
        stock: [...prev.stock]
      };

      let movedCards: Card[] = [];

      // Remove from source
      if (selectedCard.pile === 'waste') {
        movedCards = [newGameState.waste.pop()!];
      } else if (selectedCard.pile.startsWith('foundation')) {
        const suit = selectedCard.pile.split('-')[1] as Suit;
        movedCards = [newGameState.foundations[suit].pop()!];
      } else if (selectedCard.pile.startsWith('tableau')) {
        const colIdx = parseInt(selectedCard.pile.split('-')[1]);
        const col = newGameState.tableau[colIdx];
        movedCards = col.splice(selectedCard.index);

        // Flip new top card if needed
        if (col.length > 0 && !col[col.length - 1].faceUp) {
          col[col.length - 1].faceUp = true;
          newGameState.score += 5; // Points for flipping
        }
      }

      // Add to target
      if (typeof target === 'string') { // Foundation
        const suit = target as Suit;
        newGameState.foundations[suit].push(movedCards[0]);
        newGameState.score += 10;
      } else { // Tableau
        newGameState.tableau[target].push(...movedCards);
        newGameState.score += 5; // Points for Tableau move
      }

      newGameState.moves += 1;

      // Check win
      const foundationCount = Object.values(newGameState.foundations).reduce((acc, pile) => acc + pile.length, 0);
      if (foundationCount === 52) {
        newGameState.status = 'won';
      }

      return newGameState;
    });
    setSelectedCard(null);
  };

  const handleMoveAttempt = (targetColIndex: number) => {
    if (!selectedCard) return;

    const cardToMove = selectedCard.card;
    if (canMoveToTableau(cardToMove, targetColIndex)) {
      executeMove(targetColIndex);
    } else {
      setSelectedCard(null);
    }
  };

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, source: { pile: string, index: number }) => {
    e.dataTransfer.setData('source', JSON.stringify(source));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, target: string | number) => {
    e.preventDefault();
    const sourceData = e.dataTransfer.getData('source');
    if (!sourceData) return;

    const source = JSON.parse(sourceData) as { pile: string, index: number };

    // We need to validate the move
    // We need the card object from source. Since we only have pile/index, we need to look it up.
    let card: Card;
    if (source.pile === 'waste') {
      if (gameState.waste.length === 0) return;
      card = gameState.waste[gameState.waste.length - 1]; // Only top card of waste is draggable
    } else if (source.pile.startsWith('tableau')) {
      const colIdx = parseInt(source.pile.split('-')[1]);
      card = gameState.tableau[colIdx][source.index];
    } else if (source.pile.startsWith('foundation')) {
      const suit = source.pile.split('-')[1] as Suit;
      card = gameState.foundations[suit][gameState.foundations[suit].length - 1];
    } else {
      return;
    }

    if (typeof target === 'string') { // Foundation target
      const suit = target as Suit;
      // Can only drop single card on foundation
      if (source.pile.startsWith('tableau')) {
        const colIdx = parseInt(source.pile.split('-')[1]);
        // Must be last card
        if (source.index !== gameState.tableau[colIdx].length - 1) return;
      }

      if (canMoveToFoundation(card, suit)) {
        directMove(source, suit);
      }
    } else { // Tableau target
      // 'target' is colIndex
      if (canMoveToTableau(card, target)) {
        // We need a move function that takes 'target' as colIndex
        // directMove only handles foundation targets currently.
        // We need to reuse executeMove logic but without referencing 'selectedCard' state
        // Refactoring executeMove to accept optional args or making a new helper is best.
        executeDragMove(source, target);
      }
    }
  };

  const executeDragMove = (source: { pile: string, index: number }, targetColIndex: number) => {
    setGameState(prev => {
      const newGameState = {
        ...prev,
        tableau: prev.tableau.map(col => [...col]),
        foundations: { ...prev.foundations },
        waste: [...prev.waste],
        stock: [...prev.stock]
      };

      let movedCards: Card[] = [];

      // Remove from source
      if (source.pile === 'waste') {
        movedCards = [newGameState.waste.pop()!];
      } else if (source.pile.startsWith('foundation')) {
        const suit = source.pile.split('-')[1] as Suit;
        movedCards = [newGameState.foundations[suit].pop()!];
      } else if (source.pile.startsWith('tableau')) {
        const colIdx = parseInt(source.pile.split('-')[1]);
        const col = newGameState.tableau[colIdx];
        movedCards = col.splice(source.index);

        if (col.length > 0 && !col[col.length - 1].faceUp) {
          col[col.length - 1].faceUp = true;
          newGameState.score += 5;
        }
      }

      // Add to target
      newGameState.tableau[targetColIndex].push(...movedCards);
      newGameState.score += 5;
      newGameState.moves += 1;

      return newGameState;
    });
  };

  // Render Helpers
  const renderCard = (card: Card, source: string, index: number) => {
    const isSelected = selectedCard?.card.id === card.id;
    return (
      <div
        key={card.id}
        className={`card ${card.color} ${isSelected ? 'selected' : ''}`}
        style={source.startsWith('tableau') ? { top: `${index * 30}px` } : {}}
        draggable={true}
        onDragStart={(e) => handleDragStart(e, { pile: source, index })}
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick(card, { pile: source, index });
        }}
        onDoubleClick={(e) => {
          e.stopPropagation();
          handleDoubleClick(card, { pile: source, index });
        }}
      >
        <div className="card-top">
          <span className="card-value">{card.rank}</span>
          <span className="card-suit">{getSuitSymbol(card.suit)}</span>
        </div>
        <div className="card-center">
          {getSuitSymbol(card.suit)}
        </div>
      </div>
    );
  };

  return (
    <div className="solitaire-container">
      <div className="solitaire-header">
        <h1 className="solitaire-title">Classic Solitaire</h1>
        <div className="game-controls">
          <div className="game-info">
            <div className="info-item">
              <span className="info-label">Score:</span>
              <span className="info-value">{gameState.score}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Moves:</span>
              <span className="info-value">{gameState.moves}</span>
            </div>
          </div>
          <button className="new-game-btn" onClick={initializeGame}>New Game</button>
        </div>
      </div>

      <div className="solitaire-board">
        <div className="top-section">
          <div className="deck-area">
            <div className="card-pile" onClick={handleStockClick}>
              {gameState.stock.length > 0 ? (
                <div className="card card-back"></div>
              ) : (
                <div className="card-placeholder">↺</div>
              )}
            </div>
            <div className="card-pile">
              {gameState.waste.length > 0 &&
                renderCard(gameState.waste[gameState.waste.length - 1], 'waste', gameState.waste.length - 1)
              }
            </div>
          </div>

          <div className="foundation-area">
            {SUITS.map(suit => (
              <div
                key={suit}
                className="card-pile"
                onClick={() => handleFoundationClick(suit)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, suit)}
              >
                <div className="card-placeholder" style={{ color: getSuitColor(suit) === 'red' ? '#ffcccc' : '#e0e0e0' }}>
                  {getSuitSymbol(suit)}
                </div>
                {gameState.foundations[suit].map((card, idx) => (
                  <div key={card.id} className="card-stack-item">
                    {renderCard(card, `foundation-${suit}`, idx)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="tableau-area">
          {gameState.tableau.map((column, i) => (
            <div
              key={i}
              className="tableau-column"
              onClick={() => handleEmptyTableauClick(i)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, i)}
            >
              {column.map((card, idx) => (
                card.faceUp ?
                  renderCard(card, `tableau-${i}`, idx) :
                  <div
                    key={card.id}
                    className="card card-back"
                    style={{ top: `${idx * 15}px`, position: 'absolute' }}
                  ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {gameState.status === 'won' && (
        <div className="win-message">
          <h2>Congratulations!</h2>
          <p>You won!</p>
          <button className="new-game-btn" onClick={initializeGame}>Play Again</button>
        </div>
      )}

      <div className="solitaire-footer">
        Classic Solitaire implemented with React & CSS
      </div>
    </div>
  );
};

export default Solitaire;
