import { cartState } from "../models/cartState";

export const calcCartLenght = (cart: cartState) => {
  const totalQuantity = cart.cart.reduce((prev, cur) => {
    return prev + cur.quantity;
  }, 0);
  return totalQuantity;
};
