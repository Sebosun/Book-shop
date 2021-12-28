import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Header from "./components/header/Header";
import Main from "./components/pages/Main";
import { useAppSelector } from "./store/app/hooks";

function App() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<p>404 - Not found</p>} />
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          {cart.length > 0 && <Route path="/checkout" element={<Checkout />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
