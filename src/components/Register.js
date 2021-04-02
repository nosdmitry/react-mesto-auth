import { Link } from "react-router-dom";
import SignForm from "./SignForm";

function Register() {
  return (
    <section className="sign">
      <SignForm 
        title="Регистрация"
        submitButtonTitle="Зарегистрироваться"
      />
      <span className="sign__reg-question">
        Уже зарегистрированы?&nbsp;
        <Link to="/singin" className="sign__link">Войти</Link>
      </span>
    </section>
  );
}

export default Register;
