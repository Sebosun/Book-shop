import { bookTypes } from "./bookTypes";

export interface cartItems extends bookTypes {
  quantity: number;
}

export interface cartState {
  cart: cartItems[];
}
