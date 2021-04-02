import SignForm from "./SignForm";

function Login() {
  return (
    <section className="sign">
      <SignForm 
        title="Вход"
        submitButtonTitle="Войти"
      />
    </section>
  );
}

export default Login;
