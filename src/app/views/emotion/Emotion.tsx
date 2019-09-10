import React, { Component } from 'react';
import _ from 'lodash';

import Pulse from 'app/components/pulse/Pulse';
import Console from 'app/components/console/Console';

import './styles.scss';

class Emotion extends Component {
  state = {
    heightMap: [20, 25, 59, 30, 14, 24, 52, 25, 32, 60, 24],
    // consoleText: [
    //   'taurus.sh <♉️>',
    //   'hello world <👋>',
    //   'i am dev <👨‍💻>',
    //   'and designer <👨‍🎨>',
    // ],
  };

  heigtMapInterval: number | undefined = undefined;

  componentDidMount(): void {
    const { heightMap } = this.state;

    // this.heigtMapInterval = window.setInterval((): void => {
    //   const newHeightMap = heightMap.reduce((acc: number[], height: number): number[] => {
    //     const operator = _.random(0, 1);
    //     const step = _.random(5, 10);
    //     const newHeight: number = operator ? height + step : height - step;

    //     acc.push(newHeight);
    //     return acc;
    //   }, []);


    //   this.setState({ heightMap: newHeightMap });
    // }, 3000);
  }

  componentWillUnmount(): void {
    clearInterval(this.heigtMapInterval);
  }

  render(): JSX.Element {
    const { heightMap } = this.state;
    const Pulses = [];
    const seed = _.random(1, 100);
    const index = [0, 1, 2];

    for (let i = 1; i <= 5; i += 1) {
      Pulses.push(
        <Pulse
          seed={i + seed}
          initialHeight={10}
          height={[heightMap[index[0]], heightMap[index[1]], heightMap[index[2]]]}
          baseUnit="rem"
          style={i > 1 ? { paddingLeft: `calc(1vw / ${5})` } : {}}
        />,
      );
      index[0] += 2;
      index[1] += 2;
      index[2] += 2;
    }

    return (
      <>
        <div className="App">
          {Pulses}
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
}

export default Emotion;
