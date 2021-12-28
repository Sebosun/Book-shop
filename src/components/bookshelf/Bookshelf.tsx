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
    <div className="flex flex-col max-w-ms">
      <img className="object-contain h-96" src={cover_url} alt="book cover" />
      <div>{title}</div>
      <div>{author}</div>
      <div>{pageNumber}</div>
      <button className="p-4 text-white text-lg rounded-xl w-48 self-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
        Dodaj do koszyka
      </button>
    </div>
  );
}
