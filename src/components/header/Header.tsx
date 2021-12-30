import { ReactElement } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/app/hooks";
import { calcCartLenght } from "../../helpers/calcCartLenght";

export default function Header(): ReactElement | null {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="p-2 text-2xl border-b-2 border-solid border-sky-300">
      <nav className="flex items-center justify-between mx-2 md:mx-24">
        <Link className="p-4 hover:bg-sky-200 rounded-md" to="/">
          Home
        </Link>
        <Link
          to="/cart"
          className="flex justify-center md:text-2xl items-center btn-primary"
        >
          <AiOutlineShoppingCart />
          <p>Koszyk ({calcCartLenght(cart)})</p>
        </Link>
      </nav>
    </div>
  );
}
