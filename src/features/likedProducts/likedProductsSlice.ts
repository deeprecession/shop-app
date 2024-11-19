import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LikedProductsState {
	products: { [id: number]: undefined };
}

const initialState: LikedProductsState = {
	products: {},
};

export const likedProductsSlice = createSlice({
	name: "likedProducts",

	initialState: initialState,

	reducers: {
		addLiked: (state, action: PayloadAction<number>) => {
			state.products[action.payload] = undefined;
		},
		removeLiked: (state, action: PayloadAction<number>) => {
			delete state.products[action.payload];
		},
		toggleLiked: (state, action: PayloadAction<number>) => {
			if (action.payload in state.products) {
				delete state.products[action.payload];
			} else {
				state.products[action.payload] = undefined;
			}
		},
	},

	selectors: {
		isProductLiked: (state: LikedProductsState, id: number): boolean => {
			return id in state.products;
		},
	},
});

export const { isProductLiked } = likedProductsSlice.selectors;
export const { toggleLiked, addLiked, removeLiked } =
	likedProductsSlice.actions;
