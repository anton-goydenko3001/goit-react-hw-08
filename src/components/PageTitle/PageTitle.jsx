import style from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return <h1 className={style.titleContainer}>{children}</h1>;
}
