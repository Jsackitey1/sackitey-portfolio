import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Snake.css';

interface Position {
  x: number;
  y: number;
}

interface GameState {
  snake: Position[];
  food: Position;
  direction: 'up' | 'down' | 'left' | 'right';
  gameRunning: boolean;
  score: number;
  gameOver: boolean;
}

const Snake: React.FC = () => {
  const gameRef = useRef<NodeJS.Timeout | undefined>(undefined);
  
  const BOARD_WIDTH = 20;
  const BOARD_HEIGHT = 15;
  const INITIAL_SNAKE = [{ x: 10, y: 7 }, { x: 9, y: 7 }, { x: 8, y: 7 }];

  const [gameState, setGameState] = useState<GameState>({
    snake: INITIAL_SNAKE,
    food: { x: 15, y: 7 },
    direction: 'right',
    gameRunning: false,
    score: 0,
    gameOver: false
  });

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_WIDTH),
        y: Math.floor(Math.random() * BOARD_HEIGHT)
      };
    } while (gameState.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    
    return newFood;
  }, [gameState.snake]);

  const moveSnake = useCallback(() => {
    if (!gameState.gameRunning || gameState.gameOver) return;

    setGameState(prev => {
      const newSnake = [...prev.snake];
      const head = { ...newSnake[0] };

      // Move head based on direction
      switch (prev.direction) {
        case 'up':
          head.y -= 1;
          break;
        case 'down':
          head.y += 1;
          break;
        case 'left':
          head.x -= 1;
          break;
        case 'right':
          head.x += 1;
          break;
      }

      // Check wall collision
      if (head.x < 0 || head.x >= BOARD_WIDTH || head.y < 0 || head.y >= BOARD_HEIGHT) {
        return { ...prev, gameRunning: false, gameOver: true };
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        return { ...prev, gameRunning: false, gameOver: true };
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === prev.food.x && head.y === prev.food.y) {
        // Food eaten, don't remove tail
        const newFood = generateFood();
        return {
          ...prev,
          snake: newSnake,
          food: newFood,
          score: prev.score + 10
        };
      } else {
        // No food, remove tail
        newSnake.pop();
      }

      return { ...prev, snake: newSnake };
    });
  }, [gameState.gameRunning, gameState.gameOver, gameState.direction, generateFood]);

  // Game loop
  useEffect(() => {
    if (gameState.gameRunning && !gameState.gameOver) {
      const gameSpeed = Math.max(100, 200 - gameState.score * 2);
      gameRef.current = setTimeout(moveSnake, gameSpeed);
    }

    return () => {
      if (gameRef.current) {
        clearTimeout(gameRef.current);
      }
    };
  }, [gameState.gameRunning, gameState.gameOver, gameState.snake, gameState.score, moveSnake]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setGameState(prev => {
        const newState = { ...prev };

        switch (e.key.toLowerCase()) {
          case 'arrowup':
          case 'w':
            if (prev.direction !== 'down') {
              newState.direction = 'up';
              if (!prev.gameRunning && !prev.gameOver) {
                newState.gameRunning = true;
              }
            }
            break;
          case 'arrowdown':
          case 's':
            if (prev.direction !== 'up') {
              newState.direction = 'down';
              if (!prev.gameRunning && !prev.gameOver) {
                newState.gameRunning = true;
              }
            }
            break;
          case 'arrowleft':
          case 'a':
            if (prev.direction !== 'right') {
              newState.direction = 'left';
              if (!prev.gameRunning && !prev.gameOver) {
                newState.gameRunning = true;
              }
            }
            break;
          case 'arrowright':
          case 'd':
            if (prev.direction !== 'left') {
              newState.direction = 'right';
              if (!prev.gameRunning && !prev.gameOver) {
                newState.gameRunning = true;
              }
            }
            break;
          case ' ':
            if (prev.gameOver) {
              // Restart game
              return {
                snake: INITIAL_SNAKE,
                food: generateFood(),
                direction: 'right',
                gameRunning: true,
                score: 0,
                gameOver: false
              };
            } else {
              newState.gameRunning = !newState.gameRunning;
            }
            break;
        }

        return newState;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [generateFood]);

  const startNewGame = () => {
    setGameState({
      snake: INITIAL_SNAKE,
      food: generateFood(),
      direction: 'right',
      gameRunning: true,
      score: 0,
      gameOver: false
    });
  };

  const togglePause = () => {
    if (!gameState.gameOver) {
      setGameState(prev => ({
        ...prev,
        gameRunning: !prev.gameRunning
      }));
    }
  };

  return (
    <div className="snake-container">
      <div className="snake-header">
        <h3>Snake</h3>
        <div className="snake-controls">
          <div className="score">Score: {gameState.score}</div>
          <button onClick={startNewGame}>New Game</button>
          <button onClick={togglePause} disabled={gameState.gameOver}>
            {gameState.gameRunning ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>
      
      <div className="snake-game">
        <div className="snake-board">
          {Array.from({ length: BOARD_HEIGHT }, (_, y) => (
            <div key={y} className="snake-row">
              {Array.from({ length: BOARD_WIDTH }, (_, x) => {
                const isSnake = gameState.snake.some(segment => segment.x === x && segment.y === y);
                const isHead = gameState.snake[0]?.x === x && gameState.snake[0]?.y === y;
                const isFood = gameState.food.x === x && gameState.food.y === y;
                
                let cellClass = 'snake-cell';
                if (isHead) cellClass += ' snake-head';
                else if (isSnake) cellClass += ' snake-body';
                else if (isFood) cellClass += ' snake-food';
                
                return <div key={x} className={cellClass} />;
              })}
            </div>
          ))}
        </div>
        
        {!gameState.gameRunning && !gameState.gameOver && (
          <div className="snake-overlay">
            <div className="game-message">
              <p>Press any arrow key or WASD to start!</p>
            </div>
          </div>
        )}
        
        {gameState.gameOver && (
          <div className="snake-overlay">
            <div className="game-message game-over">
              <h4>Game Over!</h4>
              <p>Final Score: {gameState.score}</p>
              <p>Press SPACE to restart</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="snake-instructions">
        <p><strong>Controls:</strong></p>
        <p>• Arrow keys or WASD to move</p>
        <p>• SPACE to pause/resume</p>
        <p>• Eat red food to grow and score!</p>
      </div>
    </div>
  );
};

export default Snake;
