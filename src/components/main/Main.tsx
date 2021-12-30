import { ReactElement, useEffect, useState } from "react";
import { bookTypes } from "../../models/bookTypes";
import Bookshelf from "./Bookshelf";

interface fetchData {
  data: bookTypes[];
  metadata: {
    page: number;
    records_per_page: number;
    total_records: number;
  };
}

export default function Main(): ReactElement | null {
  const [books, setBooks] = useState<fetchData | false>(false);

  const fetchBooks = async () => {
    try {
      const request = await fetch("http://localhost:3001/api/book");
      const parsed = await request.json();
      setBooks(parsed);
    } catch (err) {
      console.error(err);
    }
  };

  // run fetchBooks when the component loads
  useEffect(() => {
    fetchBooks();
  }, []);

  if (books) {
    return (
      <div>
        {books && (
          <div className="grid gap-4 xl:gap-6 my-6 grid-row-1 xl:grid-cols-2 mx-2 md:mx-14 2xl:grid-cols-3">
            {books.data.map((book) => {
              return <Bookshelf key={book.id} book={book} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}
