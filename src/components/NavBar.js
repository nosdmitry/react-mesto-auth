import { Link, useHistory } from "react-router-dom";

function NavBar({ isLoggedIn, handleLoginStatus, userData, location }) {

  const history = useHistory();

  function signOut() {
    localStorage.removeItem('token');
    handleLoginStatus();
  }

  function showCurrentLink() {
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

  return (
    <ul className="navbar">
      {
        isLoggedIn
          ? (
            <>
              <li className="navbar__item">
                <Link to="#" className="navbar__link">
                  {userData.email}
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/" onClick={signOut} className="navbar__link">
                  Выйти
                </Link>
              </li>
            </>
          )
          : (
            <>
              { showCurrentLink()}
            </>
          )
      }

    </ul>
  );
}

export default NavBar;
