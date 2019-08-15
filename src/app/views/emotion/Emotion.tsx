import React from 'react';

import Pulse from 'app/components/pulse/Pulse';
import Console from 'app/components/console/Console';

import './style.scss';

function Emotion(): JSX.Element {
  const consoleText = [
    'taurus.sh <♉️>',
    'hello world <👋>',
    'i am dev <👨‍💻>',
    'and designer <👨‍🎨>',
  ];

  return (
    <>
      <div className="App">
        <Pulse
          seed={8}
          height="50vh"
        />
        <Pulse
          seed={7}
          height="50vh"
          style={{ paddingLeft: '0.8rem' }}
        />
        <Pulse
          seed={6}
          height="50vh"
          style={{ paddingLeft: '0.8rem' }}
        />
      </div>
      <div className="App-modal">
        <Console
          className="App-title"
          id="console"
          text={consoleText}
        />
      </div>
    </>
  );
}

export default Emotion;
