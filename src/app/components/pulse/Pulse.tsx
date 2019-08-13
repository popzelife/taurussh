import * as React from 'react';
import './style.scss';

export interface Props {
  seed: number;
}

function Pusle({ seed }: Props) {
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
