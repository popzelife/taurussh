import React, { Component } from 'react';
import logo from './taurus-logo.svg';
import './App.css';

class App extends Component {

  render_pulse(seed) {
    let items = []

    for (let i = 0; i < 60; i++) {
      items.push(<div className="item" key={i+seed}/>)
    }
    return items
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.render_pulse(3)}
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Taurus</h1>
        </header>

        <div className="container">
          {this.render_pulse(2)}
        </div>
      </div>
    );
  }
}

export default App;
