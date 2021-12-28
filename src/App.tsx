import "./App.css";
import Header from "./components/header/Header";

function App() {
  const fetchBooks = async () => {
    // TODO error handling
    let request = await fetch("http://localhost:3001/api/book");
    let reader = request.body?.getReader();
    let readReader = await reader?.read();
    console.log(JSON.parse(new TextDecoder().decode(readReader?.value)));
  };

  return (
    <div className="App">
      <Header />
      <p></p>
    </div>
  );
}

export default App;
