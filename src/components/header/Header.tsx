import { ReactElement, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/app/hooks";

export default function Header(): ReactElement | null {
  const cart = useAppSelector((state) => state.cart);

  const calcCartLength = () => {
    return cart.cart.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);
  };
  return (
    <div className="p-2 text-2xl border-b-2 border-solid border-sky-300">
      <nav className="flex items-center justify-between mx-24">
        <Link to="/">Home</Link>
        <Link
          to="/cart"
          className="flex justify-center text-2xl items-center btn-primary"
        >
          <AiOutlineShoppingCart />
          <p>Koszyk ({calcCartLength()})</p>
        </Link>
      </nav>
    </div>
  );
}
