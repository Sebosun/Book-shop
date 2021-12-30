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
      <div className="overflow-y-auto p-2 max-h-96">
        {cart.map((item) => {
          return (
            <div className="flex gap-2 p-2 text-justify border-b-2 border-gray-300 border-solid shadow-md">
              <img
                className="object-contain max-h-20"
                src={item.cover_url}
                alt="book cover"
              />
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 justify-center p-2 my-6 text-2xl leading-8 md:justify-start">
        <p>Razem:</p>
        <h1 className="text-sky-600"> {total} zl</h1>
      </div>
    </div>
  );
}
