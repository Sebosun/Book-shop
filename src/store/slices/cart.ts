import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  cart: [];
}

const initialState: cartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
