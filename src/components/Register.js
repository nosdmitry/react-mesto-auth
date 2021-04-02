import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="sign">
      <h3 className="sign__title">Регистрация</h3>
      <form className="form">
        <label className="form__form-field">
          <input
            className="
              form__input 
              form__input_type_sign"
            placeholder="Email"
          />
          <span className="username-name-error form__error"></span>
        </label>

        <label className="form__form-field">
          <input
            className="
              form__input 
              form__input_type_sign 
              form__input_type_password"
            placeholder="Пароль"
            type="password"
          />
          <span className="password-name-error form__error"></span>
        </label>

        <button
          className="form__submit form__submit_type_sign">Зарегистрироваться</button>
      </form>
      <span className="sign__reg-question">
        Уже зарегистрированы?&nbsp;
        <Link to="/singin" className="sign__link">Войти</Link>
      </span>
    </section>
  );
}

export default Register;
