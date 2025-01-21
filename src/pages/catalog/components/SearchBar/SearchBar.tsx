import { FormEventHandler, useEffect, useRef } from "react";
import "./SearchBar.css";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  selectTitleFilter,
  setToFilterByTitle,
} from "../../../../features/catalog/catalogSlice";
import debounce from "../../../../utils/debounce";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previousSearch = useAppSelector(selectTitleFilter);

  const updateState = (input: string) => {
    const query = input.toLowerCase();

    dispatch(setToFilterByTitle(query));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = previousSearch;
    }
  }, [previousSearch]);

  const debouncedInputHandler = debounce(updateState, 300);

  const onInput: FormEventHandler<HTMLInputElement> = (event) => {
    const inputVal = event.currentTarget.value;

    debouncedInputHandler(inputVal);
  };

  return (
    <div className="search-bar-container">
      <label htmlFor="search-bar"> Search Products</label>
      <input
        id="search-bar"
        className="search-bar"
        onInput={onInput}
        aria-label="Search products"
        ref={inputRef}
      />
    </div>
  );
};

export default SearchBar;
