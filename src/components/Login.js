import React, { useEffect, useState } from "react";
import * as userAuth from '../utils/userAuth';
import { useHistory, withRouter } from "react-router";

function Login() {  

  const history = useHistory();

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
    console.log('email: ', email);
    console.log('password: ', password);
    userAuth.authorization(email, password);
    history.push('/');
  }  

  return (
    <section className="sign">
      <h3 className="sign__title">Вход</h3>
        <form className="form" onSubmit={ handleSubmit }>
          <label className="form__form-field">
            <input
              className="
                form__input 
                form__input_type_sign"
              placeholder="Email"
              onChange={ handleEmail }
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
              autoComplete="none"
              onChange={ handlePassword }
            />
            <span className="password-name-error form__error"></span>
          </label>

          <button
            className="form__submit form__submit_type_sign">Войти</button>
        </form>
    </section>
  );
}

export default withRouter(Login);
