import { ReactElement } from "react";
import { bookTypes } from "../../models/bookTypes";
import { useAppDispatch } from "../../store/app/hooks";
import { addToCart } from "../../store/slices/cart";

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
    <div className="grid grid-cols-2 gap-4 p-2 rounded-lg border-2 border-solid shadow-xl md:p-4 max-w-ms">
      <img
        className="object-contain h-96"
        src={book.cover_url}
        alt="book cover"
      />
      <div className="flex flex-col justify-evenly text-left">
        <div>
          <div className="text-gray-500">Tytul:</div>
          <div className="text-gray-900">{book.title}</div>
        </div>
        <div>
          <div className="text-gray-600">Autor:</div>
          <div className="text-gray-900">{book.author}</div>
        </div>
        <div className="text-gray-900">{book.pages} stron</div>
        <button onClick={handleAddToCart} className="btn-primary w-lg">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
