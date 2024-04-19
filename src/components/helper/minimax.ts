// Функция, которая определяет, является ли текущая позиция на доске победной для определенного игрока (X или O)
const isWinner = (board: any[], player: string) => {
  // Проверяем все возможные комбинации победы
  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // горизонтальные линии
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // вертикальные линии
    [0, 4, 8],
    [2, 4, 6], // диагонали
  ];

  for (let i = 0; i < winPositions.length; i++) {
    const [a, b, c] = winPositions[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true; // если игрок выиграл, возвращаем true
    }
  }
  return false; // если игрок не выиграл, возвращаем false
};

// Функция, которая проверяет, является ли доска полной (нет пустых ячеек)
const isBoardFull = (board: any[]) => {
  return board.every(cell => cell !== null); // если каждая ячейка занята, возвращаем true
};

// Функция, которая реализует алгоритм минимакса
const minimax = (board: any[], depth: number, maximizingPlayer: boolean) => {
  const humanPlayer = "O";
  const aiPlayer = "X";

  // Базовый случай: если текущая позиция - это конечная позиция (победа, ничья или поражение)
  if (isWinner(board, aiPlayer)) {
    return 10 - depth; // выигрыш компьютера
  } else if (isWinner(board, humanPlayer)) {
    return depth - 10; // выигрыш игрока
  } else if (isBoardFull(board)) {
    return 0; // ничья
  }

  if (maximizingPlayer) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = aiPlayer;
        const score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = humanPlayer;
        const score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

// Функция, которая возвращает индекс лучшего хода для компьютера
const findBestMove = (board: any[]) => {
  let bestMove;
  let bestScore = -Infinity;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = "X"; // делаем ход
      const score = minimax(board, 0, false);
      board[i] = null; // отменяем ход
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
};

export { findBestMove };
