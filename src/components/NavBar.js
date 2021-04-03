import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link
          to="/singin"
          className="navbar__link"
        >
          Вход
          </Link>
      </li>
      <li className="navbar__item">
        <Link

          to="/singup"
          className="navbar__link"
        >
          Регистрация
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link">
          Выйти
        </Link>
      </li>
    </ul >
  );
}

export default NavBar;
