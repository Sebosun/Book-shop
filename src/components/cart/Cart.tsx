import type { ReactElement } from "react";
import { useAppSelector } from "../../store/app/hooks";

export default function Cart(): ReactElement | null {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div>
      <p>Cart</p>
    </div>
  );
}
