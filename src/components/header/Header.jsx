import React from 'react';
import Logo from './assets/logo-white.svg'; 
import './header.scss';

const Header = () => (
  <header className="sfs-header">
    <img src={Logo} className="sfs-header__img"/>
    <span title="Stuff for Staff" className="sfs-header__capture">SFS</span>
  </header>
);

export default Header;

