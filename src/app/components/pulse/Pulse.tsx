import React from 'react';
import './style.scss';

const rootStyle = {
  '--pulse-height': '22em',
  '--pulse-main-color': 'rgba(255, 255, 255, 0.15)',
  '--pulse-secondary-color': 'rgba(255, 255, 255, 0.05)',
  '--pulse-anim-time': '3s',
};

type Props = Readonly <{
  seed: number;
  style?: React.CSSProperties;
  height?: string;
  width?: string;
}>

function Pusle({
  seed,
  style,
  height,
  width,
}: Props): JSX.Element {
  const items = [];

  if (height) {
    console.log(document.querySelector(':root'));
  }
  if (width) {
    console.log(document.querySelector('.container'));
  }


  for (let i = 0; i < 60; i += 1) {
    items.push(<div className="item" key={i + seed} />);
  }

  return (
    <div
      id={`pulse-seed-${seed}`}
      className="container"
      style={rootStyle}
    >
      {items}
    </div>
  );
}

export default Pusle;
