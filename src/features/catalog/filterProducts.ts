import { ProductData } from "../../pages/product/ProductData";
import ProductLikeStorage from "../../utils/likedProductStorage";
import { CatalogState } from "./catalogSlice";

const filterProducts = (state: CatalogState): ProductData[] => {
	let filteredProducts = filterByTitle(state.filterByTitle, state.allProducts);

	filteredProducts = filterLiked(state.filterByLike, filteredProducts);

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
): ProductData[] => {
	if (!toFilter) {
		return products;
	}

	const filteredProducts = products.filter((product) => {
		return ProductLikeStorage.isLiked(product.id);
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
