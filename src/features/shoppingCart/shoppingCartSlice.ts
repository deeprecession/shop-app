import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../pages/product/ProductData";

export type CartProduct = {
	product: ProductData;
	count: number;
};

export interface CatalogState {
	products: { [id: number]: CartProduct };
}

const initialState: CatalogState = {
	products: {},
};

export const shoppingCartSlice = createSlice({
	name: "shoppingCart",

	initialState: initialState,

	reducers: {
		addProduct: (state, action: PayloadAction<ProductData>) => {
			state.products = addProductToCart(action.payload, state).products;
		},
		removeOneProduct: (state, action: PayloadAction<ProductData>) => {
			state.products = removeOneProductFromCart(action.payload, state).products;
		},
		removeWholeProduct: (state, action: PayloadAction<ProductData>) => {
			state.products = removeWholeProductFromCart(
				action.payload,
				state,
			).products;
		},
	},

	selectors: {
		getAllProducts: (state: CatalogState): CartProduct[] => {
			return Array.from(Object.values(state.products));
		},
		getProductCount: (state: CatalogState, productId: number): number => {
			const product = state.products[productId];
			return product ? product.count : 0;
		},
		getCartTotalPrice: (state: CatalogState): number => {
			let sumPrice = 0;

			Object.entries(state.products).forEach(([_, { product, count }]) => {
				sumPrice += product.price * count;
			});

			return sumPrice;
		},
		getCartItemsCount: (state: CatalogState): number => {
			let productCount = 0;

			Object.entries(state.products).forEach(([_, { count }]) => {
				productCount += count;
			});

			return productCount;
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

const removeWholeProductFromCart = (
	productToAdd: ProductData,
	state: CatalogState,
): CatalogState => {
	const productId = productToAdd.id;
	const products = state.products;

	const product = products[productId];
	if (product) {
		delete products[productId];
	}

	return { products };
};

const removeOneProductFromCart = (
	productToAdd: ProductData,
	state: CatalogState,
): CatalogState => {
	const productId = productToAdd.id;
	const products = state.products;

	const product = products[productId];
	if (product) {
		if (product.count <= 1) {
			delete products[productId];
		} else {
			product.count--;
		}
	}

	return { products };
};

export const {
	getAllProducts,
	getProductCount,
	getCartTotalPrice,
	getCartItemsCount,
} = shoppingCartSlice.selectors;
export const { removeWholeProduct, removeOneProduct, addProduct } =
	shoppingCartSlice.actions;
