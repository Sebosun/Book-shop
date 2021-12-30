import { ReactElement, useEffect, useState } from "react";
import { useAppSelector } from "../../../store/app/hooks";
import { calculateTotalCartValue } from "../../../helpers/calcTotalCartValue";

export default function CartPreview(): ReactElement | null {
  const { cart } = useAppSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotalCartValue(cart) / 100);
  }, [cart]);

  return (
    <div className="p-4">
      <div className="max-h-96 p-2 overflow-y-scroll">
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
      </div>

      <div className="flex p-2 justify-center md:justify-start text-2xl gap-4 my-6 leading-8">
        <p>Razem:</p>
        <h1 className="text-sky-600"> {total} zl</h1>
      </div>
    </div>
  );
}
