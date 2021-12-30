import { ReactElement } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/app/hooks";
import { calcCartLenght } from "../../helpers/calcCartLenght";

export default function Header(): ReactElement | null {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="p-2 text-2xl border-b-2 border-sky-300 border-solid">
      <nav className="flex justify-between items-center mx-2 md:mx-24">
        <Link className="p-4 rounded-md hover:bg-sky-200" to="/">
          Home
        </Link>
        <Link
          to="/cart"
          className="flex justify-center items-center md:text-2xl btn-primary"
        >
          <AiOutlineShoppingCart />
          <p>Koszyk ({calcCartLenght(cart)})</p>
        </Link>
      </nav>
    </div>
  );
}
