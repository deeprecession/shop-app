import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../pages/product/ProductData";

export type CartProduct = {
	product: ProductData;
	count: number;
};

export interface CatalogState {
	products: { [id: number]: CartProduct };
}

export const shoppingCartSlice = createSlice({
	name: "shoppingCart",

	initialState: {
		products: {},
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
		getAllProducts: (state): CartProduct[] => {
			return Array.from(Object.values(state.products));
		},
	},
});

const addProductToCart = (
	productToAdd: ProductData,
	state: CatalogState,
): CatalogState => {
	const productId = productToAdd.id;
	const products = state.products;

	const product = products[productId];
	if (product) {
		product.count++;
	} else {
		const newProduct = { product: productToAdd, count: 1 };
		products[productToAdd.id] = newProduct;
	}

	return { products };
};

const removeProductFromCart = (
	productToAdd: ProductData,
	state: CatalogState,
): CatalogState => {
	const productId = productToAdd.id;
	const products = state.products;

	const product = products[productId];
	if (product) {
		if (product.count <= 1) {
			products[productId];
		} else {
			product.count--;
		}
	} else {
		return { products };
	}

	return { products };
};

export const { getAllProducts } = shoppingCartSlice.selectors;
export const { removeProduct, addProduct } = shoppingCartSlice.actions;