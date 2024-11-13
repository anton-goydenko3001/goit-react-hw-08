import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import style from "./LoginForm.module.css";
import toast from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("WELCOME !");
      })
      .catch((error) => {
        toast.error("ERROR !");
      });
    actions.resetForm();
  };

  return (
    <div className={style.mainContainer}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={style.formContainer} autoComplete="off">
          <label className={style.labelContainer}>
            <Field
              className={style.inputContainer}
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </label>
          <label className={style.labelContainer}>
            <Field
              className={style.inputContainer}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <button className={style.buttonContainer} type="submit">
            Log In
          </button>
          <p className={style.linkContainer}>
            or{" "}
            <Link className={style.linkText} to="/register">
              register
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
