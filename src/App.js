import React, { Component } from 'react';
import './App.css';
import GameHeader from './components/game-header.js';
import GameBoard from './components/game-board.js';
import GameScore from './components/game-score.js';


class App extends Component {
  render() {
    let store = this.props.store

    return (
      <div className="App">
        <GameHeader />
        <GameBoard gameState={store.gameState} />
        <GameScore score={store.score} />
      </div>
    );
  }
}

export default App;
