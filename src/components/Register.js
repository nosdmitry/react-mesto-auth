import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="sign">
      <h3 className="sign__title">Регистрация</h3>
      <form className="form sign__form">
        <input className="form__input" />
        <input className="form__input" />
        <button className="form__submit">Зарегистрироваться</button>
      </form>
      <span className="sign__reg-question">
        Уже зарегистрированы? 
        <Link to="/singin" className="sign__link">Войти</Link>
      </span>
    </section>
  );
}

export default Register;
