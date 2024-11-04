import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div className={style.mainContainer}>
      <p>Find contacts by name</p>
      <input
        className={style.inputContainer}
        placeholder="enter contact name"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
