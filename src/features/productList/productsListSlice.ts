import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../pages/product/ProductData";
import ProductLikeStorage from "../../utils/likedProductStorage";
import fetchProducts from "./fetchProducts";

const emptyState: ProductListState = {
	allProducts: [],
	filteredProducts: [],

	filterByLike: false,
	filterByTitle: "",
	filterByCategory: "",

	status: "idle",
	errorMsg: "",
};

export const fetchProductsThunk = createAsyncThunk("productList", async () => {
	const products = await fetchProducts();

	return products;
});

export interface ProductListState {
	allProducts: ProductData[];
	filteredProducts: ProductData[];

	filterByLike: boolean;
	filterByTitle: string;
	filterByCategory: string;

	status: "idle" | "loading" | "failed";
	errorMsg: string | null;
}

export const productListSlice = createSlice({
	name: "productList",
	initialState: emptyState,
	reducers: {
		setAllProducts: (state, action: PayloadAction<ProductData[]>) => {
			state.allProducts = action.payload;

			state.filteredProducts = filterProducts(state);
		},

		setToFilterByTitle: (state, action: PayloadAction<string>) => {
			state.filterByTitle = action.payload;

			state.filteredProducts = filterProducts(state);
		},

		setToFilterLiked: (state, action: PayloadAction<boolean>) => {
			state.filterByLike = action.payload;

			state.filteredProducts = filterProducts(state);
		},

		setToFilterByCategory: (state, action: PayloadAction<string>) => {
			state.filterByCategory = action.payload;

			state.filteredProducts = filterProducts(state);
		},
	},

	selectors: {
		selectAllProducts: (state) => state.allProducts,
		selectFilteredProducts: (state) => state.filteredProducts,
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsThunk.pending, (state) => {
				state.status = "loading";
				state.errorMsg = null;
			})
			.addCase(fetchProductsThunk.fulfilled, (state, action) => {
				state.status = "idle";

				state.allProducts = action.payload;
				state.filteredProducts = action.payload;
			})
			.addCase(fetchProductsThunk.rejected, (state, action) => {
				state.status = "failed";
				state.errorMsg = action.error.message ?? null;
			});
	},
});

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

const filterProducts = (state: ProductListState): ProductData[] => {
	let filteredProducts = filterByTitle(state.filterByTitle, state.allProducts);

	filteredProducts = filterLiked(state.filterByLike, filteredProducts);

	filteredProducts = filterByCategory(state.filterByCategory, filteredProducts);

	return filteredProducts;
};

export const {
	setToFilterByCategory,
	setToFilterLiked,
	setToFilterByTitle,
	setAllProducts,
} = productListSlice.actions;

export const { selectAllProducts, selectFilteredProducts } =
	productListSlice.selectors;
