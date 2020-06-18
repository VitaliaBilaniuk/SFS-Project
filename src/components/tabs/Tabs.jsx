import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import loadable from '@loadable/component';

import MailLogo from './assets/emailSignature.svg';
import PassCard from './assets/passCard.svg';
import BusinessCard from './assets/businessCard.svg';

import './Clickboard.scss';
import '../../index.scss';

const TabLoader = loadable(({ componentName }) => import(`./${componentName}.jsx`), {
  cacheKey: (props) => props.componentName,
});

const sfsTabsStyle =
  'W(100p/3) P(20) Cur(p) Fz(14) C(#111123) Td(n) Bgc(#cccccc)-h Bgc(#cccccc)_active';

const routedTabs = [
  { componentName: 'PassCardTab', path: '/pass-card' },
  { componentName: 'BusinessCardTab', path: '/business-card' },
  { componentName: 'EmailSignatureTab', path: '(/email-signature|/)' },
];

const Tabs = () => (
  <div className="W(100p)">
    <div className="sfs-nav D(f) Bdbw(1) Bdbs(s) Bdbc(#111123)">
      <NavLink className={sfsTabsStyle} exact to="/email-signature">
        <img src={MailLogo} className="Mend(10) H(10)" />
        Email signature
      </NavLink>
      <NavLink className={sfsTabsStyle} to="/pass-card">
        <img src={PassCard} className="Mend(10) H(10)" />
        Pass Card
      </NavLink>
      <NavLink className={sfsTabsStyle} to="/business-card">
        <img src={BusinessCard} className="Mend(10) H(10)" />
        Business card
      </NavLink>
    </div>
    <Switch>
      {routedTabs.map(({ path, componentName }) => (
        <Route
          key={`${path}-${componentName}`}
          path={path}
          component={() => <TabLoader componentName={componentName} />}
        />
      ))}
    </Switch>
  </div>
);

export default Tabs;
