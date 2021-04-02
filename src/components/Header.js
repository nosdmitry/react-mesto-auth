import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="./" className="header__logo-link" target="_self">
        <img src={logo} alt="Логотип" className="header__logo" />
      </a>
        <Link 
          exact to="/singup" 
          className="header__links header__links_type_margin"
        >
          Регистрация
        </Link>
    </header>
  );
}

export default Header;