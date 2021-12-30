import { cartState } from "../store/slices/cart";

export const calcCartLenght = (cart: cartState) => {
  const totalQuantity = cart.cart.reduce((prev, cur) => {
    return prev + cur.quantity;
  }, 0);
  return totalQuantity;
};
