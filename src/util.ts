export function toColor(chess: ChessInstance): Color {
    return (chess.turn() === 'w') ? 'white' : 'black';
  }