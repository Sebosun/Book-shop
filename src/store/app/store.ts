import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart";

const store = configureStore({
  reducer: {
    cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
