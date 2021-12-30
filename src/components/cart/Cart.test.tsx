import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "../../store/app/store";
import "jest-fetch-mock";
import Cart from "./Cart";

describe("Cart behaviour", () => {
  test("if by default shows that the cart is empty", () => {
    render(
      <Provider store={createStore()}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Twoj koszyk jest pusty/i)).toBeInTheDocument();
  });
});
