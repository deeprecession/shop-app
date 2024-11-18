import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../pages/product/ProductData";

type CardProduct = {
	product: ProductData;
	count: number;
};

export interface CatalogState {
	products: Map<number, CardProduct>;
}

export const shoppingCardSlice = createSlice({
	name: "shoppingCard",

	initialState: {
		products: new Map<number, CardProduct>(),
	},

	reducers: {
		addProduct: (state, action: PayloadAction<ProductData>) => {
			state.products = addProductToCart(action.payload, state).products;
		},
		removeProduct: (state, action: PayloadAction<ProductData>) => {
			state.products = removeProductFromCart(action.payload, state).products;
		},
	},

	selectors: {
		getAllProducts: (state): CardProduct[] => {
			return Array.from(state.products.values());
		},
	},
});

const addProductToCart = (
	productToAdd: ProductData,
	state: CatalogState,
): CatalogState => {
	const productId = productToAdd.id;
	const products = state.products;

	const product = products.get(productId);
	if (product) {
		product.count++;
	} else {
		const newProduct = { product: productToAdd, count: 1 };
		products.set(productToAdd.id, newProduct);
	}

	return { products };
};

const removeProductFromCart = (
	productToAdd: ProductData,
	state: CatalogState,
): CatalogState => {
	const productId = productToAdd.id;
	const products = state.products;

	const product = products.get(productId);
	if (product) {
		if (product.count <= 1) {
			products.delete(productId);
		} else {
			product.count--;
		}
	} else {
		return { products };
	}

	return { products };
};

export const { getAllProducts } = shoppingCardSlice.selectors;
export const { removeProduct, addProduct } = shoppingCardSlice.actions;
