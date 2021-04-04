import { Link } from "react-router-dom";

function UserLinks({ userData, signOut }) {
  return (
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
  );
}

export default UserLinks;
