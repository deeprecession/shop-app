import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../pages/product/ProductData";
import fetchProducts from "./fetchProducts";
import filterProducts from "./filterProducts";

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

export const {
	setToFilterByCategory,
	setToFilterLiked,
	setToFilterByTitle,
	setAllProducts,
} = productListSlice.actions;

export const { selectAllProducts, selectFilteredProducts } =
	productListSlice.selectors;
