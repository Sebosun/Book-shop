import type { ReactElement } from "react";
import CheckoutForm from "./CheckoutForm";

export default function Checkout(): ReactElement | null {
  return (
    <>
      <div className="max-w-md mx-auto">
        <CheckoutForm />
      </div>
    </>
  );
}
