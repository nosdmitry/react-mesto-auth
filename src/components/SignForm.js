function SignForm(props) {
  return (
    <>
      <h3 className="sign__title">{ props.title }</h3>
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
            className="form__submit form__submit_type_sign">{ props.submitButtonTitle }</button>
        </form>
    </>
  );
}

export default SignForm;
