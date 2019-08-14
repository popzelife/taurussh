import React from 'react';
import Pulse from 'app/components/pulse/Pulse';
import Console from 'app/components/console/Console';

import logo from 'assets/logo/taurus-logo.svg';
import './style.scss';

function Intro(): JSX.Element {
  const consoleText = [
    'taurus.sh <♉️>',
    'hello world <👋>',
    'i am dev <👨‍💻>',
    'and designer <👨‍🎨>',
  ];

  return (
    <div className="App">
      <Pulse seed={3} />

      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />

        <Console
          text={consoleText}
          id="console"
          className="App-title"
        />
      </header>

      <Pulse seed={2} />
    </div>
  );
}

export default Intro;
