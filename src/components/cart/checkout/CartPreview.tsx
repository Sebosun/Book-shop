import { ReactElement, useEffect, useState } from "react";
import { useAppSelector } from "../../../store/app/hooks";
import { calculateTotalCart } from "../Cart";

export default function CartPreview(): ReactElement | null {
  const { cart } = useAppSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotalCart(cart) / 100);
  }, [cart]);

  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="text-justify p-2 shadow-md border-b-2 border-solid border-gray-300 gap-2 flex">
            <img
              className="max-h-20 object-contain"
              src={item.cover_url}
              alt="book cover"
            />
            <div>{item.title}</div>
          </div>
        );
      })}

      <div className="flex text-2xl gap-4 my-6 leading-8">
        <p>Razem:</p>
        <h1 className="text-sky-600"> {total} zl.</h1>
      </div>
    </div>
  );
}
