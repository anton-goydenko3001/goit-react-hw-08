import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import style from "./RegistrationForm.module.css";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
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
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={style.formContainer} autoComplete="off">
          <label className={style.labelContainer}>
            <Field
              className={style.inputContainer}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
