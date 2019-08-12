import React, { Component } from 'react';
import Pulse from 'app/components/pulse/Pulse';
import consoleText from 'app/utils/consoleText';

import logo from 'assets/logo/taurus-logo.svg';
import './style.scss';

class App extends Component {
  componentDidMount() {
    consoleText(['taurus.sh', 'hello world'], 'console-text', ['white', 'white']);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Pulse seed={3} />
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title" spellCheck="false">
            <span id="console-text" contentEditable="true" />
            <span className="console-underscore" id="console">&#95;</span>
          </p>
        </header>

        <div className="container">
          <Pulse seed={2} />
        </div>
      </div>
    );
  }
}

export default App;
