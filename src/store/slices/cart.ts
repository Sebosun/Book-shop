import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookTypes } from "../../components/pages/Main";

export interface cartState {
  cart: any[];
}

const initialState: cartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<bookTypes>) {
      const newArr = [...state.cart, action.payload];
      state.cart = newArr;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
