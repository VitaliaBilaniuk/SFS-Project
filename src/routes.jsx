import React from 'react';
import { Route} from 'react-router-dom';
import Intro from './intro';

const App = () => {
  <Router>
      <React.StrictMode>
        <Route path="/" exact component={Intro} />
      </React.StrictMode>
  </Router>
};

export default App;
