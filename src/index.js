import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import game from './reducers/game.js';
import * as GAME_ACTIONS from './actions/action.js';

let store = createStore(game);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);
