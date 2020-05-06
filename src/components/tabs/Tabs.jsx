import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import MailLogo from './assets/emailSignature.svg';
import PassCard from './assets/passCard.svg';
import BusinessCard from './assets/businessCard.svg';
import './Tabs.scss';

const Tab1 = lazy(() => import('./Tab1.jsx'));
const Tab2 = lazy(() => import('./Tab2.jsx'));
const Tab3 = lazy(() => import('./Tab3.jsx'));

const Tabs = () => (
  <div className="sfs-tabs">
    <Router>
      <div>
        <div className="sfs-nav">
          <NavLink exact to ="/"><img src={MailLogo} className="sfs-nav-img"/>Email signature</NavLink>
          <NavLink to ="/tab2"><img src={PassCard} className="sfs-nav-img"/>Pass Card</NavLink>
          <NavLink to ="/tab3"><img src={BusinessCard} className="sfs-nav-img"/>Business card</NavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/tab2" render={() =><Tab2/>} />
            <Route path="/tab3" render={() =><Tab3/>} />
            <Route path="" render={() =><Tab1/>}/>
          </Switch>
        </Suspense>
      </div>
    </Router>
  </div>
);

export default Tabs;