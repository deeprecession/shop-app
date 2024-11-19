import {
	Action,
	combineSlices,
	configureStore,
	ThunkAction,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { catalogSlice } from "./features/catalog/catalogSlice";
import { shoppingCartSlice } from "./features/shoppingCart/shoppingCartSlice";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig: PersistConfig<any, any, any, any> = {
	key: "root",
	storage,
	whitelist: ["shoppingCart"],
};

const rootReducer = combineSlices(catalogSlice, shoppingCartSlice);

const persistentRootReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<AppStore["getState"]>;

export const makeStore = () => {
	const store = configureStore({ reducer: persistentRootReducer });

	setupListeners(store.dispatch);

	const persistor = persistStore(store);

	return [store, persistor];
};

export const [store, persistor] = makeStore();

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
