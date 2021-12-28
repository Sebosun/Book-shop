import type { ReactElement } from "react";
import { useAppSelector } from "../../store/app/hooks";
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
    const purchaseData = cart.map((val) => {
      return { id: val.id, quantity: val.quantity };
    });

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
    <>
      <div className="max-w-md mx-auto">
        <CheckoutForm handleOrderConfirm={handleOrderConfirm} />
      </div>
    </>
  );
}
