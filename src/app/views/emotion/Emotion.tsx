import React from 'react';

import Pulse from 'app/components/pulse/Pulse';
import Console from 'app/components/console/Console';

import './styles.scss';

function Emotion(): JSX.Element {
  const consoleText = [
    'taurus.sh <♉️>',
    'hello world <👋>',
    'i am dev <👨‍💻>',
    'and designer <👨‍🎨>',
  ];

  const pulses =

  return (
    <>
      <div className="App">
        <Pulse
          seed={9}
          height={75}
          initialHeight={25}
          baseUnit="px"
        />
        {/* <Pulse
          seed={8}
          height={50}
          initialHeight={25}
          baseUnit="vh"
          style={{ paddingLeft: '0.45rem' }}
        /> */}
        <Pulse
          seed={7}
          initialHeight={25}
          height={[75, 300, 75]}
          baseUnit="px"
          style={{ paddingLeft: '0.45rem' }}
        />
        <Pulse
          seed={6}
          height={75}
          initialHeight={25}
          baseUnit="px"
          style={{ paddingLeft: '0.45rem' }}
        />
      </div>
      {/* <div className="App-modal">
        <Console
          className="App-title"
          id="console"
          text={consoleText}
        />
      </div> */}
    </>
  );
}

export default Emotion;
