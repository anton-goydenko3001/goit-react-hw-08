import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={style.mainContainer}>
      <NavLink className={style.navContainer} to="/register">
        Register
      </NavLink>
      <NavLink className={style.navContainer} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
