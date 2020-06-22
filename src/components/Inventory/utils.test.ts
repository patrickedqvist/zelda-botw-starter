import { getIndexFromMaxtrixPosition, getMatrixPositionFromIndex } from './utils';


it('should convert 6 to x:1, y:1 position', () => {
  const index = 6;
  const result = getMatrixPositionFromIndex(index);
  expect(result).toEqual({ x: 1, y: 1 });
});

it('should convert x:1, y:1 to 6', () => {
  const matrix = {
      x: 1,
      y: 1
  };
  const result = getIndexFromMaxtrixPosition(matrix);
  expect(result).toBe(6);
});
