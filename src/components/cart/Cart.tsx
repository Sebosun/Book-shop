import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/app/hooks";
import { cartItems } from "../../store/slices/cart";
import CartItem from "./CartItem";

// calculates carts total value
export const calculateTotalCart = (cart: cartItems[]) => {
  return cart.reduce((prev, item) => {
    return item.quantity * item.price + prev;
  }, 0);
};

export default function Cart(): ReactElement {
  const [total, setTotal] = useState(0);
  const { cart } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculateTotalCart(cart));
  }, [cart]);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  //i.e. if carts not empty
  if (cart.length > 0) {
    return (
      <div className="max-w-4xl mx-auto">
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              title={item.title}
              cover_url={item.cover_url}
              price={item.price / 100}
              quantity={item.quantity}
            />
          );
        })}
        <h1>{total / 100} zl.</h1>
        <button
          onClick={handleCheckout}
          className="mx-auto uppercase btn-primary"
        >
          Dalej
        </button>
      </div>
    );
  } else {
    return (
      <>
        <h1>Hehe</h1>
      </>
    );
  }
}
