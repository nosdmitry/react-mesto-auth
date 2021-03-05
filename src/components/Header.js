import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="./index.html" className="header__logo-link" target="_self">
        <img src={logo} alt="Логотип" className="header__logo" />
      </a>
    </header>
  );
}

export default Header;