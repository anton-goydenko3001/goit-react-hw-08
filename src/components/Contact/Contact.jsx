import { useDispatch } from "react-redux";
import { PiPhoneBold, PiUserBold } from "react-icons/pi";
import { deleteContacts } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import style from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContacts(contact.id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully!");
      });

  return (
    <div className={style.mainContainer}>
      <div className={style.itemContainer}>
        <p>
          <PiUserBold className={style.icon} />
          {contact.name}
        </p>
        <p>
          <PiPhoneBold className={style.icon} />
          {contact.number}
        </p>
      </div>
      <button className={style.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
