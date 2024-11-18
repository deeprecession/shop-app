import { FormEventHandler } from "react";
import "./SearchBar.css";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { setToFilterByTitle } from "../../../../features/catalog/catalogSlice";
import debounce from "../../../../utils/debounce";

const SearchBar = () => {
	const dispatch = useAppDispatch();

	const updateState = (input: string) => {
		const query = input.toLowerCase();

		dispatch(setToFilterByTitle(query));
	};

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
			/>
		</div>
	);
};

export default SearchBar;
