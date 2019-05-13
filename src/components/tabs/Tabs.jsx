import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Tab1 from './Tab1.jsx';
import Tab2 from './Tab2.jsx';
import Tab3 from './Tab3.jsx';
import './Tabs.scss';

const Tabs = () => (
  <div className="row">
    <Router>
      <Switch>
        <Route exact path="" component={Tab1} />
        <Route path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />
      </Switch>
    </Router>
  </div>
);

export default Tabs;