export interface Matrix {
  x: number;
  y: number;
}

export const getNumberOfRows = (items: Array<any>, columns = 5) => {
  return items.length / columns;
};

// Index to Matrix position method
export const getMatrixPositionFromIndex = (index: number, columns = 5) => {
  const rowIndex = Math.floor(index / columns);
  const columnIndex = index % columns;
  return { x: rowIndex, y: columnIndex };
};

// Matrix position to index method
export const getIndexFromMaxtrixPosition = (matrixPosition: Matrix, columns = 5) => {
  return matrixPosition.x * columns + matrixPosition.y;
};

// Keyboard navigation
export const goUp = (position: Matrix): Matrix => ({
  x: Math.max(position.x - 1, 0),
  y: position.y,
});

export const goDown = (position: Matrix, rows = 5): Matrix => ({
  x: Math.min(position.x + 1, rows),
  y: position.y,
});

export const goLeft = (position: Matrix): Matrix => ({
  x: position.x,
  y: Math.max(position.y - 1, 0),
});

export const goRight = (position: Matrix, columns = 5): Matrix => ({
  x: position.x,
  y: Math.min(position.y + 1, columns),
});
