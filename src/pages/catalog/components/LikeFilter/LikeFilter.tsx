import { FormEvent, useEffect, useRef } from "react";
import style from "./LikeFilter.module.css";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  selectLikedFilter,
  setToFilterLiked,
} from "../../../../features/catalog/catalogSlice";

const LikeFilterCheckbox = () => {
  const dispatch = useAppDispatch();

  const checkboxRef = useRef<HTMLInputElement>(null);

  const storedLikeFilter = useAppSelector(selectLikedFilter);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = storedLikeFilter;
    }
  }, [storedLikeFilter]);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const formValue = e.currentTarget.checked;
    dispatch(setToFilterLiked(formValue));
  };

  return (
    <div className={style.container}>
      <input
        ref={checkboxRef}
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
