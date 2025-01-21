import { FormEvent } from "react";
import style from "./LikeFilter.module.css";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  selectLikedFilter,
  setToFilterLiked,
} from "../../../../features/catalog/catalogSlice";
import Toggle from "react-toggle";

const LikeFilterCheckbox = () => {
  const dispatch = useAppDispatch();

  const storedLikeFilter = useAppSelector(selectLikedFilter);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const formValue = e.currentTarget.checked;
    dispatch(setToFilterLiked(formValue));
  };

  return (
    <div className={style.container}>
      <label htmlFor="likeFilter">Show only liked items</label>
      <Toggle
        defaultChecked={storedLikeFilter}
        id="likeFilter"
        onChange={onChange}
        name="likeFilter"
        icons={false}
      ></Toggle>
    </div>
  );
};

export default LikeFilterCheckbox;
