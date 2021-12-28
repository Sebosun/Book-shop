import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/app/hooks";
import CartItem from "./CartItem";

export default function Cart(): ReactElement {
  const [total, setTotal] = useState(0);
  const { cart } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTotal = () => {
      return cart.reduce((prev, item) => {
        return item.quantity * item.price + prev;
      }, 0);
    };
    setTotal(calculateTotal());
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
        <button onClick={handleCheckout} className="mx-auto btn-primary">
          Kup Teraz!
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
