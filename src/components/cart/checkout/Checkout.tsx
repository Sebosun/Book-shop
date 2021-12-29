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
    <div className="flex justify-center gap-12 my-20 flex-wrap">
      <div className="w-96">
        <CheckoutForm handleOrderConfirm={handleOrderConfirm} />
        <div></div>
      </div>
      <CartPreview />
    </div>
  );
}

const filterIdQuantity = (cart: cartItems[]) => {
  return cart.map((val) => {
    return { id: val.id, quantity: val.quantity };
  });
};
