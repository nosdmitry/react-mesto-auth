import { Link } from "react-router-dom";
import UserLinks from "./UserLinks";

function NavBar({ 
  isLoggedIn, signOut, 
  userData, location, handleMenuOpen }) {

  function showAuthLinks() {
    if (location.pathname === '/signup') {
      return (
        <li className="navbar__item">
          <Link to="/signin" className="navbar__link">
            Вход
          </Link>
        </li>
      );
    } else {
      return (
        <li className="navbar__item">
          <Link to="/signup" className="navbar__link">
            Регистрация
          </Link>
        </li>
      );
    }
  }

  function handleMenuButton() {

  }

  function showEmailAndExit() {
    if(isLoggedIn) {
      return (
        <>
          <button 
            className="header__menu-button" 
            aria-label="menu button"
            onClick={ handleMenuOpen }
          ></button>
        </>
      );
    }
    return (
      <UserLinks 
        userData={ userData }
        signOut={ signOut }
      />
    );
  }

  return (
    <ul className="navbar">
      {
        isLoggedIn ? showEmailAndExit() : showAuthLinks()
      }
    </ul>
  );
}

export default NavBar;
