import { ReactElement, useEffect, useState } from "react";
import Bookshelf from "../bookshelf/Bookshelf";

export interface bookTypes {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  pages: number;
  price: number;
  currency: string;
}

export default function Main(): ReactElement | null {
  const [books, setBooks] = useState<bookTypes[]>([]);
  const fetchBooks = async () => {
    // TODO error handling
    const request = await fetch("http://localhost:3001/api/book");
    const reader = request.body?.getReader();
    let readReader = await reader?.read();
    setBooks(JSON.parse(new TextDecoder().decode(readReader?.value)).data);
  };

  // run fetchBooks at the app launch
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      {books && (
        <div className="grid gap-4 xl:gap-6 my-6 grid-row-1 xl:grid-cols-2 mx-2 md:mx-14 2xl:grid-cols-3">
          {books.map((book) => {
            return <Bookshelf key={book.id} book={book} />;
          })}
        </div>
      )}
    </>
  );
}
