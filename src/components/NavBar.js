import { Link, useHistory } from "react-router-dom";

function NavBar({ isLoggedIn, userData }) {

  const history = useHistory();

  function signOut() {
    localStorage.removeItem('token');
    history.push('/signin');
  }

  return (
    <ul className="navbar">
      {
        isLoggedIn
          ? (
            <>
              <li className="navbar__item">
                <Link onClick={signOut} className="navbar__link">
                  { userData.email }
                </Link>
              </li>
              <li className="navbar__item">
                <Link onClick={signOut} className="navbar__link">
                  Выйти
                </Link>
              </li>
            </>
          )
          : (
            <>
              <li className="navbar__item">
                <Link to="/signin" className="navbar__link">
                  Вход
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/signin" className="navbar__link">
                  Регистрация
                </Link>
              </li>
            </>
          )
      }

    </ul>
  );
}

export default NavBar;
