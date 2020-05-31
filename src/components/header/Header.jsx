import React from 'react';
import Logo from './assets/logo-white.svg'; 
import '../../atomic/atomic.scss';

const Header = () => (
  <header className="Bgc(#cccccc) D(f) Ai(c)">
    <img src={Logo} className="H(40)"/>
    <span title="Stuff for Staff" className="Bdstartw(1) Bdstarts(s) Bdstartc(white) Pstart(10) Mstart(15) Fz(40) Fw(300) C(white)">SFS</span>
  </header>
);

export default Header;

