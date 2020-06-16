import React from 'react';
import Logo from './assets/logo-white.svg';
import '../../atomic/atomic.scss';

const sfsHeaderTitleStyle =
  'Bdstartw(1) Bdstarts(s) Bdstartc(white) Pstart(10) Mstart(15) Fz(40) Fw(300) C(white)';

const Header = () => (
  <header className="D(f) Ai(c) Bgc(#cccccc)">
    <img src={Logo} className="H(40)" />
    <span title="Stuff for Staff" className={sfsHeaderTitleStyle}>
      SFS
    </span>
  </header>
);

export default Header;
