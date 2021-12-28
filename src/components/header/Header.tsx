import { ReactElement } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header(): ReactElement | null {
  return (
    <div className="flex justify-end items-center gap-2 p-2 border-b-2 border-solid border-sky-300">
      <AiOutlineShoppingCart />
      <button>Koszyk</button>
    </div>
  );
}
