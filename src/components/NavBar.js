import { Link, useHistory } from "react-router-dom";

function NavBar() {

  const history = useHistory();

  function signOut() {
    localStorage.removeItem('token');
    history.push('/signin');
  }

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link
          to="/signin"
          className="navbar__link"
        >
          Вход
          </Link>
      </li>
      <li className="navbar__item">
        <Link
          to="/signup"
          className="navbar__link"
        >
          Регистрация
        </Link>
      </li>
      <li className="navbar__item">
        <Link onClick={ signOut } className="navbar__link">
          Выйти
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
