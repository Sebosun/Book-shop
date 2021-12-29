import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart";

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
