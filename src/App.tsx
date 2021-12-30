import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/checkout/Checkout";
import OrderComplete from "./components/cart/checkout/OrderComplete";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
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
          <Route path="/order-completed" element={<OrderComplete />} />
          {cart.length > 0 && <Route path="/checkout" element={<Checkout />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
