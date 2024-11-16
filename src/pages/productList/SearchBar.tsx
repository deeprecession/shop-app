import { FormEventHandler } from "react";
import debounce from "../../utils/debounce";
import "./SearchBar.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { filterByTitle } from "../../features/productList/productsListSlice";

const SearchBar = () => {
	const dispatch = useAppDispatch();

	const updateState = (input: string) => {
		const query = input.toLowerCase();

		dispatch(filterByTitle(query));
	};

	const debouncedInputHandler = debounce(updateState, 300);

	const onInput: FormEventHandler<HTMLInputElement> = (event) => {
		const inputVal = event.currentTarget.value;

		debouncedInputHandler(inputVal);
	};

	return (
		<div>
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
