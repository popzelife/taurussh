import React from 'react';
import './style.scss';

function Pusle({ seed }) {
  const items = [];

  for (let i = 0; i < 60; i += 1) {
    items.push(<div className="item" key={i + seed} />);
  }
  return items;
}

export default Pusle;
