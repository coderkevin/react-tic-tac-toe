export type GridData = number[][];

export type GameData = {
  rows: number;
  columns: number;
  grid: GridData;
  playerCount: number;
  currentPlayer: number;
  gameOver: boolean;
  winner: number;
};

export const createGame = (rows: number, columns: number): GameData => {
  const grid: number[][] = [];

  for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let column = 0; column < columns; column++) {
      grid[row][column] = 0;
    }
  }

  return {
    rows,
    columns,
    grid,
    playerCount: 2,
    currentPlayer: 1,
    gameOver: false,
    winner: 0,
  };
};

const checkLine = (
  grid: GridData,
  value: number,
  startRow: number,
  startColumn: number,
  rowIncrement: number,
  columnIncrement: number
): boolean => {
  const rows = grid.length;
  const columns = grid[0].length;

  let currentRow = startRow;
  let currentColumn = startColumn;
  while (
    currentRow >= 0 &&
    currentRow < rows &&
    currentColumn >= 0 &&
    currentColumn < columns
  ) {
    if (grid[currentRow][currentColumn] !== value) {
      return false;
    }
    currentRow += rowIncrement;
    currentColumn += columnIncrement;
  }
  return true;
};

export const checkForWin = (game: GameData): boolean => {
  const { grid, rows, columns, currentPlayer } = game;

  // Check horizontal
  for (let row = 0; row < rows; row++) {
    if (checkLine(grid, currentPlayer, row, 0, 0, 1)) {
      return true;
    }
  }

  // Check vertical
  for (let column = 0; column < columns; column++) {
    if (checkLine(grid, currentPlayer, 0, column, 1, 0)) {
      return true;
    }
  }

  // Check diagonals
  if (
    checkLine(grid, currentPlayer, 0, 0, 1, 1) ||
    checkLine(grid, currentPlayer, grid.length - 1, 0, -1, 1)
  ) {
    return true;
  }

  return false;
};

export const checkForTie = (game: GameData): boolean => {
  const { grid, rows, columns } = game;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === 0) {
        return false;
      }
    }
  }

  return true;
};

export const playerTurn = (
  game: GameData,
  row: number,
  column: number
): GameData => {
  const { grid, currentPlayer, playerCount } = game;

  // Just mutate the grid instead of copying it each time
  grid[row][column] = currentPlayer;

  // Check to see if they won
  if (checkForWin(game)) {
    return { ...game, winner: currentPlayer, gameOver: true };
  }

  // Check for a tie
  if (checkForTie(game)) {
    return { ...game, winner: 0, gameOver: true };
  }

  // Next player
  const nextPlayer = currentPlayer < playerCount ? currentPlayer + 1 : 1;
  return { ...game, currentPlayer: nextPlayer };
};
