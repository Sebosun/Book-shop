import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Header from "./components/header/Header";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
