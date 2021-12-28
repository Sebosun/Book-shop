import { useEffect } from "react";
import "./App.css";
import Bookshelf from "./components/bookshelf/Bookshelf";
import Header from "./components/header/Header";

function App() {
  const fetchBooks = async () => {
    // TODO error handling
    const request = await fetch("http://localhost:3001/api/book");
    const reader = request.body?.getReader();
    let readReader = await reader?.read();
    console.log(JSON.parse(new TextDecoder().decode(readReader?.value)));
  };

  // run fetchBooks at the app launch
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="p-8 flex flex-wrap gap-4">
        <Bookshelf />
      </div>
    </div>
  );
}

export default App;
