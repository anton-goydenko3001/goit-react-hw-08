import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import { selectError, selectIsLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Toaster, toast } from "react-hot-toast";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("The phonebook is loaded!");
      })
      .catch((error) => {
        toast.error("Failed to download phonebook!");
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      <SearchBox />
      <ContactList />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#e6f5d0",
            },
          },
          error: {
            icon: "❌",
            style: {
              background: "#f0a7a1",
            },
          },
        }}
      />
    </div>
  );
}
