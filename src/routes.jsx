import React from 'react';
import { Route } from 'react-router-dom';
import Intro from './intro';

const App = () => {
  <Router>
    <React.StrictMode>
      <Route exact path="/" render={() => <Intro />} />
    </React.StrictMode>
  </Router>;
};

export default App;
