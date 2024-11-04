import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useId } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";
import style from "./ContactForm.module.css";
import toast from "react-hot-toast";

const phoneRegex = /^[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(phoneRegex, "Number format: 000-00-00")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContacts({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Contact successfully added!");
      })
      .catch((error) => {
        toast.error("Failed to add contact!");
      });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "", id: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style.formContainer}>
          <div className={style.inputContainer}>
            <label htmlFor="name">Name</label>
            <Field
              className={style.inputValue}
              id="name"
              type="text"
              name="name"
              placeholder="contact name"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="name"
              component="span"
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="number">Number</label>
            <Field
              className={style.inputValue}
              id="number"
              type="tel"
              name="number"
              placeholder="contact phone number"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="number"
              component="span"
            />
          </div>
          <button className={style.addButton} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
