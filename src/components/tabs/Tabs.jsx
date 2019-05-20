import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import MailLogo from './assets/emailSignature.svg';
import Tab1 from './Tab1.jsx';
import Tab2 from './Tab2.jsx';
import Tab3 from './Tab3.jsx';
import './Tabs.scss';
import Global from '../params/Global';

const Tabs = ({Global}) => (
  <div className="sfs-tabs">
    <Router>
      <div>
        <div className="sfs-nav">
          <NavLink exact to ="/">
            <img src={MailLogo} className="sfs-nav-img"/>
            Email signature
          </NavLink>
          <NavLink to ="/tab2">Tab 2</NavLink>
          <NavLink to ="/tab3">Tab 3</NavLink>
        </div>
        <Switch>
          <Route path="/tab2" component={Tab2} />
          <Route path="/tab3" component={Tab3} />
          <Route path="" component={()=> <Tab1 Global={Global}/>}/>}/>
        </Switch>
      </div>
    </Router>
  </div>
);

export default Tabs;