import React from 'react';

class GameScore extends React.Component {
  render () {
    return (
      <div className='game-score'>
        {this.props.score}
      </div>
    );
  }
}

export default GameScore;
