import * as React from 'react';
import Pulse from 'app/components/pulse/Pulse';
import { consoleText } from 'app/utils/consoleText';

import logo from 'assets/logo/taurus-logo.svg';
import './style.scss';

class App extends React.Component {
  componentDidMount() {
    consoleText(['taurus.sh <♉️>', 'hello world <👋>', 'i am dev <👨‍💻>', 'and designer <👨‍🎨>'], 'console');
  }

  render() {
    return (
      <div className="App">
        <Pulse seed={3} />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-title" spellCheck={false}>
            <span id="console-text" contentEditable={true} />
            <span className="console-underscore" id="console">&#95;</span>
          </p>
        </header>

        <Pulse seed={2} />
      </div>
    );
  }
}

export default App;
