import type { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./cart/Cart";
import Checkout from "./cart/checkout/Checkout";
import OrderComplete from "./cart/checkout/OrderComplete";
import Header from "./header/Header";
import Main from "./main/Main";
import { useAppSelector } from "../store/app/hooks";

export function Router(): ReactElement | null {
  const { cart } = useAppSelector((state) => state.cart);
  return (
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
  );
}
