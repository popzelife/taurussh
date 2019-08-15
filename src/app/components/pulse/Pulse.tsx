import React from 'react';
import './style.scss';

type Props = Readonly <{
  seed: number;
  style?: React.CSSProperties;
}>

function Pusle({ seed, style }: Props): JSX.Element {
  const items = [];

  for (let i = 0; i < 60; i += 1) {
    items.push(<div className="item" key={i + seed} />);
  }

  return (
    <div className="container" style={style}>
      {items}
    </div>
  );
}

export default Pusle;
