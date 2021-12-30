import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookTypes } from "../../models/bookTypes";
import { cartState } from "../../models/cartState";

const initialState: cartState = { cart: [] };

const cartSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // checks if item is already in our state
    // if it is adds 1 quantity otherwise adds new item to the cart
    addToCart(state, action: PayloadAction<bookTypes>) {
      const find = state.cart.some((el) => el.id === action.payload.id);
      if (find) {
        const index = state.cart.findIndex((el) => el.id === action.payload.id);
        state.cart[index].quantity++;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        const newCart = [...state.cart, newItem];
        state.cart = newCart;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
