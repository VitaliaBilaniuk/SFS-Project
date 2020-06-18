import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './assets/logo-white.svg';
import '../../index.scss';

const sfsHeaderTitleStyle =
  'Bdstartw(1) Bdstarts(s) Bdstartc(white) Pstart(10) Mstart(15) Fz(40) Fw(300) C(white)';

const Header = () => (
  <header className="D(f) Ai(c) Bgc(#cccccc)">
    <NavLink exact to="/">
      <img src={Logo} className="H(40)" />
    </NavLink>
    <span title="Stuff for Staff" className={sfsHeaderTitleStyle}>
      SFS2
    </span>
  </header>
);

export default Header;
