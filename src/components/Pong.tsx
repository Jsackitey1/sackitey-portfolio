import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Pong.css';

interface GameState {
  ballX: number;
  ballY: number;
  ballDX: number;
  ballDY: number;
  playerY: number;
  computerY: number;
  playerScore: number;
  computerScore: number;
  gameRunning: boolean;
  gameSpeed: number;
}

const Pong: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<number>();
  
  const [gameState, setGameState] = useState<GameState>({
    ballX: 400,
    ballY: 200,
    ballDX: 4,
    ballDY: 4,
    playerY: 150,
    computerY: 150,
    playerScore: 0,
    computerScore: 0,
    gameRunning: false,
    gameSpeed: 1
  });

  const canvasWidth = 800;
  const canvasHeight = 400;
  const paddleHeight = 80;
  const paddleWidth = 15;
  const ballSize = 10;

  // Game loop
  const gameLoop = useCallback(() => {
    if (!gameState.gameRunning) return;

    setGameState(prev => {
      let newState = { ...prev };

      // Move ball
      newState.ballX += newState.ballDX * newState.gameSpeed;
      newState.ballY += newState.ballDY * newState.gameSpeed;

      // Ball collision with top and bottom walls
      if (newState.ballY <= 0 || newState.ballY >= canvasHeight - ballSize) {
        newState.ballDY = -newState.ballDY;
      }

      // Ball collision with paddles
      // Player paddle
      if (newState.ballX <= paddleWidth && 
          newState.ballY >= newState.playerY && 
          newState.ballY <= newState.playerY + paddleHeight &&
          newState.ballDX < 0) {
        newState.ballDX = -newState.ballDX;
        newState.gameSpeed = Math.min(newState.gameSpeed + 0.1, 2);
      }

      // Computer paddle
      if (newState.ballX >= canvasWidth - paddleWidth - ballSize && 
          newState.ballY >= newState.computerY && 
          newState.ballY <= newState.computerY + paddleHeight &&
          newState.ballDX > 0) {
        newState.ballDX = -newState.ballDX;
        newState.gameSpeed = Math.min(newState.gameSpeed + 0.1, 2);
      }

      // Scoring
      if (newState.ballX < 0) {
        newState.computerScore++;
        newState.ballX = canvasWidth / 2;
        newState.ballY = canvasHeight / 2;
        newState.ballDX = 4 * (Math.random() > 0.5 ? 1 : -1);
        newState.ballDY = 4 * (Math.random() > 0.5 ? 1 : -1);
        newState.gameSpeed = 1;
      }

      if (newState.ballX > canvasWidth) {
        newState.playerScore++;
        newState.ballX = canvasWidth / 2;
        newState.ballY = canvasHeight / 2;
        newState.ballDX = 4 * (Math.random() > 0.5 ? 1 : -1);
        newState.ballDY = 4 * (Math.random() > 0.5 ? 1 : -1);
        newState.gameSpeed = 1;
      }

      // Simple AI for computer paddle
      const computerCenter = newState.computerY + paddleHeight / 2;
      const ballCenter = newState.ballY + ballSize / 2;
      
      if (computerCenter < ballCenter - 10) {
        newState.computerY += 3;
      } else if (computerCenter > ballCenter + 10) {
        newState.computerY -= 3;
      }

      // Keep computer paddle in bounds
      newState.computerY = Math.max(0, Math.min(canvasHeight - paddleHeight, newState.computerY));

      return newState;
    });

    gameRef.current = requestAnimationFrame(gameLoop);
  }, [gameState.gameRunning]);

  // Start game loop
  useEffect(() => {
    if (gameState.gameRunning) {
      gameRef.current = requestAnimationFrame(gameLoop);
    } else {
      if (gameRef.current) {
        cancelAnimationFrame(gameRef.current);
      }
    }

    return () => {
      if (gameRef.current) {
        cancelAnimationFrame(gameRef.current);
      }
    };
  }, [gameState.gameRunning, gameLoop]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setGameState(prev => {
        const newState = { ...prev };
        
        switch (e.key.toLowerCase()) {
          case 'w':
          case 'arrowup':
            newState.playerY = Math.max(0, newState.playerY - 20);
            break;
          case 's':
          case 'arrowdown':
            newState.playerY = Math.min(canvasHeight - paddleHeight, newState.playerY + 20);
            break;
          case ' ':
            newState.gameRunning = !newState.gameRunning;
            break;
        }
        
        return newState;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Draw game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw center line
    ctx.strokeStyle = '#ffffff';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, gameState.playerY, paddleWidth, paddleHeight);
    ctx.fillRect(canvasWidth - paddleWidth, gameState.computerY, paddleWidth, paddleHeight);

    // Draw ball
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(gameState.ballX, gameState.ballY, ballSize, ballSize);

    // Draw scores
    ctx.fillStyle = '#ffffff';
    ctx.font = '48px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(gameState.playerScore.toString(), canvasWidth / 4, 60);
    ctx.fillText(gameState.computerScore.toString(), 3 * canvasWidth / 4, 60);

    // Draw instructions
    if (!gameState.gameRunning) {
      ctx.font = '24px monospace';
      ctx.fillText('Press SPACE to start', canvasWidth / 2, canvasHeight / 2);
    }

    ctx.font = '16px monospace';
    ctx.fillText('WASD or Arrow Keys to move', canvasWidth / 2, canvasHeight - 20);
  }, [gameState]);

  const startNewGame = () => {
    setGameState({
      ballX: canvasWidth / 2,
      ballY: canvasHeight / 2,
      ballDX: 4 * (Math.random() > 0.5 ? 1 : -1),
      ballDY: 4 * (Math.random() > 0.5 ? 1 : -1),
      playerY: canvasHeight / 2 - paddleHeight / 2,
      computerY: canvasHeight / 2 - paddleHeight / 2,
      playerScore: 0,
      computerScore: 0,
      gameRunning: true,
      gameSpeed: 1
    });
  };

  const togglePause = () => {
    setGameState(prev => ({
      ...prev,
      gameRunning: !prev.gameRunning
    }));
  };

  return (
    <div className="pong-container">
      <div className="pong-header">
        <h3>Pong</h3>
        <div className="pong-controls">
          <button onClick={startNewGame}>New Game</button>
          <button onClick={togglePause}>
            {gameState.gameRunning ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>
      
      <div className="pong-game">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="pong-canvas"
        />
      </div>
      
      <div className="pong-instructions">
        <p><strong>Controls:</strong></p>
        <p>• W/↑ or S/↓ to move paddle</p>
        <p>• SPACE to start/pause game</p>
        <p>• First to score wins the round!</p>
      </div>
    </div>
  );
};

export default Pong;
