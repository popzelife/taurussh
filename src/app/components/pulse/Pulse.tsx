import React from 'react';
import './style.scss';

type Props = Readonly <{
  seed: number;
}>

function Pusle({ seed }: Props): JSX.Element {
  const items = [];

  for (let i = 0; i < 60; i += 1) {
    items.push(<div className="item" key={i + seed} />);
  }

  return (
    <div className="container">
      {items}
    </div>
  );
}

export default Pusle;
