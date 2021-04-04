import logo from '../images/logo.svg';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import UserLinks from './UserLinks';

function Header(props) {

  const location = useLocation();
  


  return (
    <header className="header">
      
      <div 
        className={`
          user-data-wrap 
          ${!props.isMenuOpen ? 'user-data-wrap_visible_hidden' : '' }
        `}> 

        <UserLinks 
          { ...props }
        />

      </div>

      <a 
        href="./" 
        className="header__logo-link" 
        target="_self">
          <img src={logo} alt="Логотип" className="header__logo" />
      </a>

      <NavBar 
        { ...props }
        location={ location }
      />  
    </header>
  );
}

export default Header;