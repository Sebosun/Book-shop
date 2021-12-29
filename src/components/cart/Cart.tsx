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
      <div className="p-2 text-md">
        <div className="flex shadow-md flex-col gap-2 max-w-4xl p-4 m-2 border-2 border-solid border-gray-300 rounded-md mx-auto">
          <div className="grid grid-cols-9 text-xs justify-evenly md:text-xl border-b-2 pb-2 md:grid grid-cols-9 text-left gap-4">
            <div></div>
            <p className="col-span-6">Tytul</p>
            <p className="justify-self-end">Sztuki</p>
            <p className="justify-self-end">Cena</p>
          </div>

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
          <h1 className="text-sky-600 text-2xl text-right">{total / 100} zl</h1>
        </div>
        <button
          onClick={handleCheckout}
          className="mx-auto min-w-full md:min-w-0 my-4 md:w-44 uppercase btn-primary"
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
