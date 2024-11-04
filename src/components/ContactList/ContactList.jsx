import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilterContacts } from "../../redux/contactsSlice";
import style from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilterContacts);
  return (
    <>
      <ul className={style.mainContainer}>
        {contacts.map((contact) => (
          <li className={style.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
