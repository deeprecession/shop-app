import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../pages/product/ProductData";
import catchError from "../../utils/catchError";

const fetchProducts = async (): Promise<ProductData[]> => {
	const res = await fetch(`https://dummyjson.com/products?limit=0`);

	if (!res.ok) {
		throw new Response("Product not found", { status: 404 });
	}

	const [err, jsonResopnse] = await catchError<FakeJsonResponse>(res.json());
	if (err) {
		console.error(err);
		throw new Response("Product not found", { status: 404 });
	}

	return jsonResopnse.products;
};

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

		filterByTitle: (state, action: PayloadAction<string>) => {
			state.filterByTitle = action.payload;

			state.filteredProducts = filterProducts(state);
		},

		filterByLike: (state, action: PayloadAction<boolean>) => {
			state.filterByLike = action.payload;

			state.filteredProducts = filterProducts(state);
		},

		filterByCategory: (state, action: PayloadAction<string>) => {
			state.filterByCategory = action.payload;
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

const filterProducts = (state: ProductListState): ProductData[] => {
	const filterPredicate = (query: string, product: ProductData): boolean => {
		const productTitle = product.title.toLowerCase();
		return productTitle.includes(query);
	};

	const filteredProducts = state.allProducts.filter((product) => {
		return filterPredicate(state.filterByTitle, product);
	});

	return filteredProducts;
};

type FakeJsonResponse = {
	products: ProductData[];
};

export const { filterByCategory, filterByLike, filterByTitle, setAllProducts } =
	productListSlice.actions;

export const { selectAllProducts, selectFilteredProducts } =
	productListSlice.selectors;
