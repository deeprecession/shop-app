import { FormEvent } from "react";
import style from "./LikeFilter.module.css";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { setToFilterLiked } from "../../../../features/catalog/catalogSlice";

const LikeFilterCheckbox = () => {
  const dispatch = useAppDispatch();

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const formValue = e.currentTarget.checked;
    dispatch(setToFilterLiked(formValue));
  };

  return (
    <div className={style.container}>
      <input
        id="likeFilter"
        onChange={onChange}
        name="likeFilter"
        type="checkbox"
      />
      <label htmlFor="likeFilter">Show only liked items</label>
    </div>
  );
};

export default LikeFilterCheckbox;
