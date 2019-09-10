import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Intro from 'app/views/intro/Intro';
import Emotion from 'app/views/emotion/Emotion';
import Sprites from 'app/views/sprites/Sprites';

import 'styles/index.scss';

import * as serviceWorker from './serviceWorker';

const App = (): JSX.Element => (
  <>
    <Sprites />

    <Router>
      <Route
        render={({ location }): JSX.Element => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                component={Intro}
              />
              <Route
                exact
                path="/emotion"
                component={Emotion}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
