import { FormEventHandler } from "react";
import debounce from "../../utils/debounce";
import { ProductData } from "../product/ProductData";
import "./SearchBar.css";

type SearchBarProps = {
	products: ProductData[];
	updateHandler: (foundProducts: ProductData[]) => void;
};

const SearchBar = ({ products, updateHandler }: SearchBarProps) => {
	const filterProductsPredicate = (
		query: string,
		product: ProductData,
	): boolean => {
		const productTitle = product.title.toLowerCase();
		return productTitle.includes(query);
	};

	const inputHandler = (input: string) => {
		const query = input.toLowerCase();

		if (query === "") {
			updateHandler(products);
			return;
		}

		const filteredProducts = products.filter((product) => {
			return filterProductsPredicate(query, product);
		});

		updateHandler(filteredProducts);
	};

	const debouncedInputHandler = debounce(inputHandler, 300);

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
