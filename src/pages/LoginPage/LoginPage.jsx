import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginPage.module.css";

export default function Login() {
  return (
    <div className={style.loginContainer}>
      <div className={style.textContainer}>
        <h3>Sign in</h3>
        <p>to your account</p>
      </div>
      <div className={style.formContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
