import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from "./RegistrationPage.module.css";

export default function Register() {
  return (
    <div className={style.registerContainer}>
      <div className={style.textContainer}>
        <p>
          To access all features of Phonebook, you need to create an account.
        </p>
      </div>
      <div className={style.formContainer}>
        <RegistrationForm />
      </div>
    </div>
  );
}
