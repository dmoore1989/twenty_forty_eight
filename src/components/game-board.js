import React from 'react';

class GameBoard extends React.Component {
  render () {
    let gameRows = this.props.gameState.map((gameRow, y) => {
      return gameRow.map((gameTile, x) => {
        return <GameTile key={x} tileState={gameTile} />
      });
    });

    return (
      <div className='game-board'>
        {gameRows}
      </div>
    )
  }
}

class GameTile extends React.Component {
  render () {
    if (!this.props.tileState) {
      return (<div className={`game-tile mod-empty`}></div>);
    }

    return (
      <div className={`game-tile mod-${this.props.tileState}`}>
        {this.props.tileState}
      </div>
    );
  }
}


export default GameBoard;
