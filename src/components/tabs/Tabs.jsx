import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import MailLogo from './assets/emailSignature.svg';
import PassCard from './assets/passCard.svg';
import BusinessCard from './assets/businessCard.svg';
import './Clickboard.scss';
import '../../atomic/atomic.scss';

const Tab1 = lazy(() => import('./Tab1.jsx'));
const Tab2 = lazy(() => import('./Tab2.jsx'));
const Tab3 = lazy(() => import('./Tab3.jsx'));

const sfsTabsStyle =
  'W(100p/3) P(20) Cur(p) Fz(14) C(#111123) Td(n) Bgc(#cccccc)-h Bgc(#cccccc)_active';

const Tabs = () => (
  <div className="W(100p)">
    <Router>
      <div>
        <div className="sfs-nav D(f) Bdbw(1) Bdbs(s) Bdbc(#111123)">
          <NavLink className={sfsTabsStyle} exact to="/">
            <img src={MailLogo} className="Mend(10) H(10)" />
            Email signature
          </NavLink>
          <NavLink className={sfsTabsStyle} to="/tab2">
            <img src={PassCard} className="Mend(10) H(10)" />
            Pass Card
          </NavLink>
          <NavLink className={sfsTabsStyle} to="/tab3">
            <img src={BusinessCard} className="Mend(10) H(10)" />
            Business card
          </NavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/tab2" render={() => <Tab2 />} />
            <Route path="/tab3" render={() => <Tab3 />} />
            <Route path="" render={() => <Tab1 />} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  </div>
);

export default Tabs;
