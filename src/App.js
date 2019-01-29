import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { startAction } from './actions/startAction'
import { stopAction } from './actions/stopAction'
import { increment } from './actions/increment'
import { decrement } from './actions/decrement'


class App extends Component {
  incrementPoints = () => {
    this.props.increment()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><code>{this.props.points}</code></h1>
          <img src={logo} className='App-logo' alt="logo" onClick={() => this.incrementPoints()} />
          <p>
            React Clicker
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startAction: () => dispatch(startAction),
    stopAction: () => dispatch(stopAction),
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
