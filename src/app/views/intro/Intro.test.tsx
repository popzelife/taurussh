import React from 'app/views/intro/node_modules/react';
import ReactDOM from 'app/views/intro/node_modules/react-dom';
import Intro from './Intro';

it('renders without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro />, div);
  ReactDOM.unmountComponentAtNode(div);
});
