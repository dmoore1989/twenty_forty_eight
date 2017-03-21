import React, {PropTypes} from 'react';

const GameBoard = ({gameState}) => {
  let gameRows = gameState.map((gameRow, y) => {
    return gameRow.map((gameTile, x) => {
      return <GameTile key={x} tileScore={gameTile} />
    });
  });

  return (
    <div className='game-board'>
      {gameRows}
    </div>
  )
}

const GameTile = ({tileScore}) => {
  if (!tileScore) {
    return (<div className={`game-tile mod-empty`}></div>);
  }

  return (
    <div className={`game-tile mod-${tileScore}`}>
      {tileScore}
    </div>
  );
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired).isRequired
}



export default GameBoard;
