import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookTypes } from "../../components/pages/Main";

interface cartItems extends bookTypes {
  quantity: number;
}

export interface cartState {
  cart: cartItems[];
}

const initialState: cartState = { cart: [] };

const cartSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
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
