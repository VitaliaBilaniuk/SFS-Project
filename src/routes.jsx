import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Intro from './intro';

const App = () => {
  <BrowserRouter>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Intro} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
};

export default App;
