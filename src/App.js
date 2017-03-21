import React from 'react';
import './App.css';
import GameHeader from './components/game-header.js';
import GameBoard from './components/game-board.js';
import GameScore from './components/game-score.js';


const App = (props) => {
  return (
    <div className="App">
      <GameHeader />
      <GameBoard {...props} />
      <GameScore {...props} />
    </div>
  );
}

export default App;
