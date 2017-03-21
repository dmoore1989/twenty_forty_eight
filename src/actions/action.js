export const ADD_NUMBER = 'ADD_NUMBER';
export const SHIFT_TILES = 'SHIFT_TILES';

export const SHIFT_DIRECTIONS = {
  SHIFT_UP: 'SHIFT_UP',
  SHIFT_DOWN: 'SHIFT_DOWN',
  SHIFT_LEFT: 'SHIFT_LEFT',
  SHIFT_RIGHT: 'SHIFT_RIGHT'
};

const getRandomNumberAndSquare = (grid) => {
  let gridCoordinateX, gridCoordinateY
  let number = Math.random() > 0.25 ? 2 : 4;
  do {
    gridCoordinateX = Math.floor(Math.random() * 4);
    gridCoordinateY = Math.floor(Math.random() * 4)
  } while (grid[gridCoordinateY][gridCoordinateX])
  let square = [gridCoordinateY, gridCoordinateX]
  return {number, square}
}

export function addNumber(grid) {
  let {number, square} = getRandomNumberAndSquare(grid);
  return {type: ADD_NUMBER, number, square};
}

export function shiftTiles() {
  let direction
  return {type: SHIFT_TILES, direction};
}
