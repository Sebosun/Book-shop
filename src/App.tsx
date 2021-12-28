import { useEffect, useState } from "react";
import "./App.css";
import Bookshelf from "./components/bookshelf/Bookshelf";
import Header from "./components/header/Header";

export interface bookTypes {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  pages: number;
  price: number;
  currency: string;
}

function App() {
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
    <div className="App">
      <Header />
      {books && (
        <div className="flex flex-wrap gap-4 my-4 justify-center">
          {books.map((item) => {
            return (
              <Bookshelf
                cover_url={item.cover_url}
                title={item.title}
                author={item.author}
                pageNumber={item.pages}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
