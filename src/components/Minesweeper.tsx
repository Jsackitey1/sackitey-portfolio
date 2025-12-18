import React, { useState, useEffect, useCallback } from 'react';
import './Minesweeper.css';

interface Cell {
  row: number;
  col: number;
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
}

interface GameState {
  board: Cell[][];
  gameStatus: 'playing' | 'won' | 'lost';
  mineCount: number;
  flagCount: number;
  startTime: number;
  elapsedTime: number;
}

const Minesweeper: React.FC = () => {
  const BOARD_SIZE = 20;
  const MINE_COUNT = 60;
  
  const [gameState, setGameState] = useState<GameState>({
    board: [],
    gameStatus: 'playing',
    mineCount: MINE_COUNT,
    flagCount: 0,
    startTime: 0,
    elapsedTime: 0
  });

  // Initialize the game board
  const initializeBoard = useCallback((): Cell[][] => {
    const board: Cell[][] = [];
    
    // Create empty board
    for (let row = 0; row < BOARD_SIZE; row++) {
      board[row] = [];
      for (let col = 0; col < BOARD_SIZE; col++) {
        board[row][col] = {
          row,
          col,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          neighborMines: 0
        };
      }
    }
    
    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < MINE_COUNT) {
      const row = Math.floor(Math.random() * BOARD_SIZE);
      const col = Math.floor(Math.random() * BOARD_SIZE);
      
      if (!board[row][col].isMine) {
        board[row][col].isMine = true;
        minesPlaced++;
      }
    }
    
    // Calculate neighbor mine counts
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        if (!board[row][col].isMine) {
          let count = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = row + i;
              const newCol = col + j;
              if (newRow >= 0 && newRow < BOARD_SIZE && 
                  newCol >= 0 && newCol < BOARD_SIZE && 
                  board[newRow][newCol].isMine) {
                count++;
              }
            }
          }
          board[row][col].neighborMines = count;
        }
      }
    }
    
    return board;
  }, []);

  // Start new game
  const startNewGame = useCallback(() => {
    const board = initializeBoard();
    setGameState({
      board,
      gameStatus: 'playing',
      mineCount: MINE_COUNT,
      flagCount: 0,
      startTime: Date.now(),
      elapsedTime: 0
    });
  }, [initializeBoard]);

  // Initialize game on component mount
  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // Update timer
  useEffect(() => {
    if (gameState.gameStatus === 'playing' && gameState.startTime > 0) {
      const timer = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          elapsedTime: Math.floor((Date.now() - prev.startTime) / 1000)
        }));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState.gameStatus, gameState.startTime]);

  // Reveal cell and adjacent cells if empty
  const revealCell = useCallback((row: number, col: number) => {
    if (gameState.gameStatus !== 'playing') return;
    
    const cell = gameState.board[row][col];
    if (cell.isRevealed || cell.isFlagged) return;
    
    const newBoard = gameState.board.map(row => row.map(cell => ({ ...cell })));
    
    if (cell.isMine) {
      // Game over - reveal all mines
      newBoard[row][col].isRevealed = true;
      for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
          if (newBoard[r][c].isMine) {
            newBoard[r][c].isRevealed = true;
          }
        }
      }
      setGameState(prev => ({
        ...prev,
        board: newBoard,
        gameStatus: 'lost'
      }));
      return;
    }
    
    // Reveal cell
    newBoard[row][col].isRevealed = true;
    
    // If empty cell, reveal neighbors
    if (cell.neighborMines === 0) {
      const queue = [{ row, col }];
      while (queue.length > 0) {
        const { row: currentRow, col: currentCol } = queue.shift()!;
        
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newRow = currentRow + i;
            const newCol = currentCol + j;
            
            if (newRow >= 0 && newRow < BOARD_SIZE && 
                newCol >= 0 && newCol < BOARD_SIZE && 
                !newBoard[newRow][newCol].isRevealed && 
                !newBoard[newRow][newCol].isFlagged) {
              
              newBoard[newRow][newCol].isRevealed = true;
              
              if (newBoard[newRow][newCol].neighborMines === 0) {
                queue.push({ row: newRow, col: newCol });
              }
            }
          }
        }
      }
    }
    
    // Check if game is won
    const totalCells = BOARD_SIZE * BOARD_SIZE;
    const revealedCells = newBoard.flat().filter(cell => cell.isRevealed).length;
    
    if (revealedCells === totalCells - MINE_COUNT) {
      setGameState(prev => ({
        ...prev,
        board: newBoard,
        gameStatus: 'won'
      }));
      return;
    }
    
    setGameState(prev => ({
      ...prev,
      board: newBoard
    }));
  }, [gameState.board, gameState.gameStatus]);

  // Toggle flag on cell
  const toggleFlag = useCallback((row: number, col: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (gameState.gameStatus !== 'playing') return;
    
    const cell = gameState.board[row][col];
    if (cell.isRevealed) return;
    
    const newBoard = gameState.board.map(row => row.map(cell => ({ ...cell })));
    newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
    
    const flagCount = newBoard.flat().filter(cell => cell.isFlagged).length;
    
    setGameState(prev => ({
      ...prev,
      board: newBoard,
      flagCount
    }));
  }, [gameState.board, gameState.gameStatus]);

  // Get cell display content
  const getCellContent = (cell: Cell) => {
    if (cell.isFlagged) return '🚩';
    if (!cell.isRevealed) return '';
    if (cell.isMine) return '💣';
    if (cell.neighborMines === 0) return '';
    return cell.neighborMines;
  };

  // Get cell CSS class
  const getCellClass = (cell: Cell) => {
    let className = 'minesweeper-cell';
    if (cell.isRevealed) {
      className += ' revealed';
      if (cell.isMine) {
        className += ' mine';
      } else if (cell.neighborMines > 0) {
        className += ` number-${cell.neighborMines}`;
      } else {
        className += ' empty';
      }
    } else {
      className += ' hidden';
      if (cell.isFlagged) {
        className += ' flagged';
      }
    }
    return className;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="minesweeper-container">
      <div className="minesweeper-header">
        <div className="game-info">
          <div className="info-item">
            <span className="info-label">Mines:</span>
            <span className="info-value">{gameState.mineCount - gameState.flagCount}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Time:</span>
            <span className="info-value">{formatTime(gameState.elapsedTime)}</span>
          </div>
        </div>
        <div className="game-status">
          <button className="new-game-btn" onClick={startNewGame}>
            {gameState.gameStatus === 'playing' ? '😊' : 
             gameState.gameStatus === 'won' ? '😎' : '😵'}
          </button>
        </div>
      </div>
      
      <div className="minesweeper-board">
        {gameState.board.map((row, rowIndex) => (
          <div key={rowIndex} className="minesweeper-row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={getCellClass(cell)}
                onClick={() => revealCell(rowIndex, colIndex)}
                onContextMenu={(e) => toggleFlag(rowIndex, colIndex, e)}
              >
                {getCellContent(cell)}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="minesweeper-footer">
        {gameState.gameStatus === 'won' && (
          <div className="game-message win">🎉 Congratulations! You won! 🎉</div>
        )}
        {gameState.gameStatus === 'lost' && (
          <div className="game-message lose">💥 Game Over! Try again! 💥</div>
        )}
        <div className="game-instructions">
          <p>Left click to reveal • Right click to flag • Click 😊 to restart</p>
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;
