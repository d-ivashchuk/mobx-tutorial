import React, { Component } from 'react';
import './App.css';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class App extends Component {
  count = 0
  handleIncrement = () => {
    this.count++
  }
  handleDecrement = () => {
    this.count--
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.count}</h1>
          <div>
            <button onClick={this.handleDecrement}>{'<'}</button>
            <button onClick={this.handleIncrement}>{'>'}</button>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
