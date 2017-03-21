import {connect} from 'react-redux'
import * as Actions from './../actions/action.js'
import App from './../App.js'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) =>{
  return {
    updateBoard: (grid) => {
      dispatch(Actions.addNumber(grid));
    }
  }
}

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;
