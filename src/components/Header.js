import logo from '../images/logo.svg';
import NavBar from './NavBar';

function Header(props) {

  return (
    <header className="header">
      <a href="./" className="header__logo-link" target="_self">
        <img src={logo} alt="Логотип" className="header__logo" />
      </a>
      <NavBar 
        { ...props }
      />  
    </header>
  );
}

export default Header;