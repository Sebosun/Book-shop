import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotalCartValue } from "../../helpers/calcTotalCartValue";
import { useAppSelector } from "../../store/app/hooks";
import CartItem from "./CartItem";

// calculates carts total value
export default function Cart(): ReactElement {
  const [total, setTotal] = useState(0);
  const { cart } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculateTotalCartValue(cart));
  }, [cart]);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  //i.e. if carts not empty
  if (cart.length > 0) {
    return (
      <div className="p-2 text-md">
        <div className="flex flex-col gap-2 p-4 m-2 mx-auto max-w-4xl rounded-md border-2 border-gray-300 border-solid shadow-md">
          <div className="grid grid-cols-9 gap-4 justify-evenly pb-2 text-xs text-left border-b-2 md:text-xl md:grid">
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
          <h1 className="text-2xl text-right text-sky-600">{total / 100} zl</h1>
        </div>
        <button
          onClick={handleCheckout}
          className="mx-auto my-4 min-w-full uppercase md:min-w-0 md:w-44 btn-primary"
        >
          Dalej
        </button>
      </div>
    );
  } else {
    return (
      <div className="my-20">
        <h1 className="text-4xl text-gray-700">Twoj koszyk jest pusty.</h1>
      </div>
    );
  }
}
