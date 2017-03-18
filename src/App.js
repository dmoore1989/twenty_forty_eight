import React, { Component } from 'react';
import './App.css';
import GameHeader from './components/game-header.js';
import GameBoard from './components/game-board.js';
import GameScore from './components/game-score.js';

const score = 2094385
const gameState = [
  [null, 2, 4, 8],
  [16, 32, 64, 128],
  [256, 512, 1024, 2048],
  [4096, 8192, null, null]
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameHeader />
        <GameBoard gameState={gameState} />
        <GameScore score={score} />
      </div>
    );
  }
}

export default App;
