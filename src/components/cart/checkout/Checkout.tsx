import type { ReactElement } from "react";
import { useAppSelector } from "../../../store/app/hooks";
import { cartItems } from "../../../store/slices/cart";
import CartPreview from "./CartPreview";
import CheckoutForm from "./CheckoutForm";

export interface customerData {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

export default function Checkout(): ReactElement | null {
  const { cart } = useAppSelector((state) => state.cart);

  const handleOrderConfirm = async (data: customerData) => {
    const purchaseData = filterIdQuantity(cart);
    try {
      const post = await fetch("http://localhost:3001/api/order", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order: purchaseData, ...data }),
      });
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col-reverse md:grid gap-4 p-4 md:grid-cols-2 max-w-xl sm:max-w-4xl xl:max-w-6xl m-4 md:my-24 mx-auto">
      <CheckoutForm handleOrderConfirm={handleOrderConfirm} />
      <div className="grid md:grid-rows-2">
        <CartPreview />
      </div>
    </div>
  );
}

const filterIdQuantity = (cart: cartItems[]) => {
  return cart.map((val) => {
    return { id: val.id, quantity: val.quantity };
  });
};
