import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import style from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.userContainer}>
      <p className={style.textContainer}>Welcome, {user.name}</p>
      <button
        className={style.buttonContainer}
        onClick={() => dispatch(logOut())}
        type="button"
      >
        Log Out
      </button>
    </div>
  );
}
