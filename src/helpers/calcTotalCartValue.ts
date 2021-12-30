import { cartItems } from "../models/cartState";

export const calculateTotalCartValue = (cart: cartItems[]) => {
  return cart.reduce((prev, item) => {
    return item.quantity * item.price + prev;
  }, 0);
};
