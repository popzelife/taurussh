import React from 'react';
import _ from 'lodash';

import './types.d';
import './styles.scss';

type Props = Readonly <{
  seed: number;
  style?: React.CSSProperties;
  baseUnit?: string | [string, string];
  height?: number | [number, number, number];
  initialHeight?: number | [number, number, number];
  mainColor?: string;
  secondaryColor?: string;
  animTime?: string;
}>

const varStyle: CSSPropertiesPulseVariables = {
  '--pulse-height': '22em',
  '--pulse-initial-height': '10em',
  '--pulse-main-color': 'rgba(255, 255, 255, 0.15)',
  '--pulse-secondary-color': 'rgba(255, 255, 255, 0.05)',
  '--pulse-anim-time': '3s',
};

/**
 * TODO add Bezier curve function
 * Should check https://d3js.org/
*/

export function circle(fraction: number): number {
  return 1 - Math.sin(Math.acos(fraction));
}

export function quad(fraction: number): number {
  return fraction ** 2;
}

function emulateEaseInOut(i: number, func: Function, length = 15): number {
  const fraction = i <= length ? i : length - (i - length);
  return func(fraction / length);
}

function getStepAnimation(height: [number, number, number], i: number): number {
  const step = i <= 30
    ? (height[1] - height[0]) / 30
    : (height[1] - height[2]) / 30;
  const dynamicHeight = i <= 30
    ? height[0] + (step * i)
    : height[1] - (step * (i - 30));

  const timeline = i - ((i % 2) / 2);
  const delta = timeline <= 30
    ? emulateEaseInOut(timeline, quad)
    : emulateEaseInOut(timeline - 30, quad);

  return dynamicHeight + delta * 10; // ((dynamicHeight / 10) * delta);
}

function addAnimationKeyframes(props: FormattedProps): void {
  const {
    seed,
    height,
    baseUnit,
  } = props;

  if (height && height[0] !== height[1] && height[1] !== height[2]) {
    const animStyle = document.createElement('style');
    let keyFrames = '';

    for (let i = 0; i < 60; i += 1) {
      const dynamicHeight = getStepAnimation(height, i);
      keyFrames += `
@keyframes wave-${seed}-${i} {
  50% {
    height: ${dynamicHeight}${baseUnit[0]};
  }
}
`;
    }

    animStyle.innerHTML = keyFrames;
    animStyle.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(animStyle);
  }
}

function getComputedStyle(props: FormattedProps): CSSPropertiesPulseVariables {
  const {
    style,
    height,
    initialHeight,
    baseUnit,
    mainColor,
    secondaryColor,
    animTime,
  } = props;
  const computedStyle = _.merge(style, varStyle);

  if (height) computedStyle['--pulse-height'] = `${height[0]}${baseUnit[0]}`;
  if (initialHeight) computedStyle['--pulse-initial-height'] = `${initialHeight[0]}${baseUnit[1]}`;
  if (mainColor) computedStyle['--pulse-main-color'] = mainColor;
  if (secondaryColor) computedStyle['--pulse-secondary-color'] = secondaryColor;
  if (animTime) computedStyle['--pulse-anim-time'] = animTime;

  return computedStyle;
}

function formatProps(props: Props): FormattedProps {
  const { height, initialHeight, baseUnit } = props;
  const dummyBaseUnit = baseUnit || ['em', 'em'];

  const formatedHeight: FormatedHeight = typeof height === 'number'
    ? [height, height, height]
    : height;
  const formatedInitialHeight: FormatedHeight = typeof initialHeight === 'number'
    ? [initialHeight, initialHeight, initialHeight]
    : initialHeight;
  const formatedBaseUnit: FormatedBaseUnit = typeof dummyBaseUnit === 'string'
    ? [dummyBaseUnit, dummyBaseUnit]
    : dummyBaseUnit;

  return {
    ...props,
    baseUnit: formatedBaseUnit,
    height: formatedHeight,
    initialHeight: formatedInitialHeight,
  };
}

const Pusle = (props: Props): JSX.Element => {
  const dumProps = formatProps(props);
  const { seed, height } = dumProps;
  const items = [];

  const computedStyle = getComputedStyle(dumProps);
  addAnimationKeyframes(dumProps);

  for (let i = 0; i < 60; i += 1) {
    const animStyle = height && height[0] !== height[1] && height[1] !== height[2]
      ? { animationName: `wave-${seed}-${59 - i}` }
      : {};

    items.push(
      <div
        className="item"
        key={i + seed}
        style={animStyle}
      />,
    );
  }

  return (
    <div
      id={`pulse-seed-${seed}`}
      className="pulse-container"
      style={computedStyle}
    >
      {items}
    </div>
  );
};

export default Pusle;
