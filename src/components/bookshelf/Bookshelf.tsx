import { ReactElement } from "react";

interface bookTypes {
  cover_url: string;
  title: string;
  author: string;
  pageNumber: number;
}

export default function Bookshelf({
  cover_url,
  title,
  author,
  pageNumber,
}: bookTypes): ReactElement | null {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 rounded-lg border-2 border-solid shadow-xl max-w-ms">
      <img className="object-contain h-96" src={cover_url} alt="book cover" />
      <div className="flex flex-col justify-evenly text-left">
        <div className="text-gray-500">
          Tytul: <span className="text-gray-900">{title}</span>
        </div>
        <div className="text-gray-600">
          Autor: <span className="text-gray-900">{author}</span>
        </div>
        <div className="text-gray-600">
          <span className="text-gray-900">{pageNumber}</span> stron
        </div>

        <button className="btn-primary">Dodaj do koszyka</button>
      </div>
    </div>
  );
}
