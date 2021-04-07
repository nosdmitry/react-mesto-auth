import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import * as userAuth from "../utils/userAuth";
import InfoTooltip from "./InfoTooltip";


function Register(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(email, password);
  }

  return (
    <section className="sign">
      <h3 className="sign__title">Регистрация</h3>
        {
          props.infoTolltip.isOpen 
            ? <InfoTooltip 
                { ...props.infoTolltip }
                handleCloseButton={ props.onClose }
              />
            : null
        }
        <form className="form" onSubmit={ handleSubmit }>
          <label className="form__form-field">
            <input
              className="
                form__input 
                form__input_type_sign"
              placeholder="Email"
              onChange={ handleEmail }
            />
            <span className="email-name-error form__error"></span>
          </label>

          <label className="form__form-field">
            <input
              className="
                form__input 
                form__input_type_sign 
                form__input_type_password"
              placeholder="Пароль"
              type="password"
              autoComplete="none"
              onChange={ handlePassword }
            />
            <span className="password-name-error form__error"></span>
          </label>

          <button
            className="form__submit form__submit_type_sign">Зарегистрироваться</button>
        </form>
      <span className="sign__reg-question">
        Уже зарегистрированы?&nbsp;
        <Link to="/signin" className="sign__link">Войти</Link>
      </span>
    </section>
  );
}

export default withRouter(Register);
