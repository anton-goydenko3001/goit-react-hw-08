import PageTitle from "../../components/PageTitle/PageTitle";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.mainContainer}>
      <PageTitle>phonebook</PageTitle>
      <p className={style.subtitleContainer}>
        Your convenient digital assistant for keeping all your contacts in one
        place. Easily add new contacts, edit them as needed, and remove
        unnecessary ones, keeping all the important information right at your
        fingertips.
      </p>
    </div>
  );
}
