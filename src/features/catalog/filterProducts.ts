import { ProductData } from "../../pages/product/ProductData";
import { CatalogState } from "./catalogSlice";

const filterProducts = (state: CatalogState): ProductData[] => {
	let filteredProducts = filterByTitle(state.filterByTitle, state.allProducts);

	filteredProducts = filterLiked(
		state.filterByLike,
		filteredProducts,
		state.likedProducts,
	);

	filteredProducts = filterByCategory(state.filterByCategory, filteredProducts);

	return filteredProducts;
};

const filterByTitle = (
	query: string,
	products: ProductData[],
): ProductData[] => {
	if (query === "") {
		return products;
	}

	const filterPredicate = (query: string, product: ProductData): boolean => {
		const productTitle = product.title.toLowerCase();
		return productTitle.includes(query);
	};

	const filteredProducts = products.filter((product) => {
		return filterPredicate(query, product);
	});

	return filteredProducts;
};

const filterLiked = (
	toFilter: boolean,
	products: ProductData[],
	likedProducts: { [id: number]: undefined },
): ProductData[] => {
	if (!toFilter) {
		return products;
	}

	const filteredProducts = products.filter((product) => {
		return likedProducts[product.id] !== undefined;
	});

	return filteredProducts;
};

const filterByCategory = (
	category: string,
	products: ProductData[],
): ProductData[] => {
	if (category === "") {
		return products;
	}

	const filteredProducts = products.filter((product) => {
		return product.category === category;
	});

	return filteredProducts;
};

export default filterProducts;
