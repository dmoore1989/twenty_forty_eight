import * as GAME_ACTIONS from './../actions/action.js';

const initialState = {
  gameState: [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
  ],
  score: 0,
  gameOver: false
}

const insertNewValue = (grid, number, square) => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  newGrid[square[0]][square[1]] = number;
  return newGrid
}
const game = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ACTIONS.ADD_NUMBER:
      return Object.assign({}, state, {
        gameState: insertNewValue(state.gameState, action.number, action.square)
      });
    default:
      return state
  }
}


export default game;
