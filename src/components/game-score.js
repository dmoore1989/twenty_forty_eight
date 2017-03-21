import React, {PropTypes} from 'react';

const GameScore = ({updateBoard, gameState, score}) => {
  return (
    <div className='game-score'>
      {`Total Score: ${score}`}
      <button onClick={() => updateBoard(gameState)}>

      </button>
    </div>
  );
}


GameScore.propTypes = {
  updateBoard: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired
}


export default GameScore;
