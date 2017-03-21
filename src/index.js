import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import game from './reducers/game.js';
import {Provider} from 'react-redux';
import Game from './containers/game.js';

let store = createStore(game);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app')
);
