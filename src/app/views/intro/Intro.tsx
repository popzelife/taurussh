import React from 'react';
import Pulse from 'app/components/pulse/Pulse';
import Console from 'app/components/console/Console';
import Social from 'app/components/social/Social';

import logo from 'assets/logo/taurus-logo.svg';
import './styles.scss';

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
        <a
          href="/Book.pdf"
          target="_blank"
          title="Book"
          rel="noopener noreferrer"
        >
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </a>

        <Console
          text={consoleText}
          id="console"
          className="App-title"
        />

        <div className="App-social">
          <Social
            type="github"
            link="https://github.com/Kant1-0"
            width="5vh"
            fill="#f08"
          />
          <Social
            type="linkedin"
            link="https://www.linkedin.com/in/popzelife/"
            width="5vh"
            fill="#1d3144"
          />
          <Social
            type="twitter"
            link="https://twitter.com/PopzeLife"
            width="5vh"
            fill="#09f"
          />
        </div>
      </header>

      <Pulse seed={2} />
    </div>
  );
}

export default Intro;
