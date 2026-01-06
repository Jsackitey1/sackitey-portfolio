export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Color = 'red' | 'black';
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface Card {
    id: string;
    suit: Suit;
    rank: Rank;
    color: Color;
    faceUp: boolean;
}

export interface GameState {
    stock: Card[];
    waste: Card[];
    foundations: { [key in Suit]: Card[] };
    tableau: Card[][];
    score: number;
    moves: number;
    status: 'playing' | 'won';
}

export const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
export const RANKS: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const getCardValue = (rank: Rank): number => {
    return RANKS.indexOf(rank) + 1;
};

export const getSuitColor = (suit: Suit): Color => {
    return suit === 'hearts' || suit === 'diamonds' ? 'red' : 'black';
};
