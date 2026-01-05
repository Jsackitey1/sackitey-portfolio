import React, { useState, Suspense, lazy } from 'react';
import './GamesLauncher.css';

// Lazy load game components
const Minesweeper = lazy(() => import('./Minesweeper'));
const Pong = lazy(() => import('./Pong'));
const Snake = lazy(() => import('./Snake'));
const Solitaire = lazy(() => import('./Solitaire'));

interface Game {
  id: string;
  name: string;
  icon: string;
  description: string;
  component: React.ComponentType;
}

const GamesLauncher: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games: Game[] = [
    {
      id: 'minesweeper',
      name: 'Minesweeper',
      icon: '💣',
      description: 'Classic puzzle game. Find all mines without hitting them!',
      component: Minesweeper
    },
    {
      id: 'pong',
      name: 'Pong',
      icon: '🏓',
      description: 'Classic arcade game. Beat the computer in this paddle battle!',
      component: Pong
    },
    {
      id: 'snake',
      name: 'Snake',
      icon: '🐍',
      description: 'Guide the snake to eat food and grow as long as possible!',
      component: Snake
    },
    {
      id: 'solitaire',
      name: 'Solitaire',
      icon: '🃏',
      description: 'Classic card game. Sort cards by suit and rank!',
      component: Solitaire
    }
  ];

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
  };

  const handleBackToMenu = () => {
    setSelectedGame(null);
  };

  if (selectedGame) {
    const game = games.find(g => g.id === selectedGame);
    if (!game) return null;

    const GameComponent = game.component;

    return (
      <div className="games-launcher">
        <div className="games-header">
          <button className="back-button" onClick={handleBackToMenu}>
            ← Back to Games
          </button>
          <h3>{game.icon} {game.name}</h3>
        </div>
        <div className="game-content">
          <Suspense fallback={<div className="loading">Loading {game.name}...</div>}>
            <GameComponent />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="games-launcher">
      <div className="games-header">
        <h2>🎮 Games Collection</h2>
        <p>Choose a game to play!</p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleGameSelect(game.id)}
          >
            <div className="game-icon">
              <span className="game-emoji">{game.icon}</span>
            </div>
            <div className="game-info">
              <h3 className="game-name">{game.name}</h3>
              <p className="game-description">{game.description}</p>
            </div>
            <div className="game-play-button">
              ▶ Play
            </div>
          </div>
        ))}
      </div>

      <div className="games-footer">
        <p>🎯 All games feature classic Windows 95 styling and authentic gameplay!</p>
      </div>
    </div>
  );
};

export default GamesLauncher;
