import { ReactElement } from "react";
import { useAppDispatch } from "../../store/app/hooks";
import { addToCart } from "../../store/slices/cart";
import { bookTypes } from "../pages/Main";

export default function Bookshelf({
  book,
}: {
  book: bookTypes;
}): ReactElement | null {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-2 md:p-4 rounded-lg border-2 border-solid shadow-xl max-w-ms">
      <img
        className="object-contain h-96"
        src={book.cover_url}
        alt="book cover"
      />
      <div className="flex flex-col justify-evenly text-left">
        <div className="text-gray-500">
          Tytul: <span className="text-gray-900">{book.title}</span>
        </div>
        <div className="text-gray-600">
          Autor: <span className="text-gray-900">{book.author}</span>
        </div>
        <div className="text-gray-600">
          <span className="text-gray-900">{book.pages}</span> stron
        </div>
        <button onClick={handleAddToCart} className="btn-primary">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
