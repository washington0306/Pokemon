import React from 'react';

import './styles.css';

const NavBar = () => {
  const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <nav>
      <img alt="logo-pokeapi" src={logoImg} className="navbar-img" />
    </nav>
  );
};
export default NavBar;
