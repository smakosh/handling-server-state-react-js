import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/postSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../api/postApi";

export const store = configureStore({
	reducer: {
		post: postReducer,
		[postApi.reducerPath]: postApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
