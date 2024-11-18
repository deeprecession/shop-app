import {
	Action,
	combineSlices,
	configureStore,
	ThunkAction,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { catalogSlice } from "./features/catalog/catalogSlice";

const rootReducer = combineSlices(catalogSlice);

export type RootState = ReturnType<AppStore["getState"]>;

export const makeStore = () => {
	const store = configureStore({ reducer: rootReducer });

	setupListeners(store.dispatch);

	return store;
};

export const store = makeStore();

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
