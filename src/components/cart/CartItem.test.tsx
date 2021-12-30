import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";

test("if props are displayed on the page", () => {
  render(
    <CartItem
      title="Poza Dobrem I Zlem"
      cover_url="./big_brain.png"
      price={15}
      quantity={1}
    />
  );

  expect(screen.getByText(/Poza Dobrem I zlem/i)).toBeInTheDocument();
  expect(screen.getByText(/15 zl/i)).toBeInTheDocument();
  expect(screen.getByText(1)).toBeInTheDocument();
});

test("if props are displayed on the page 2", () => {
  render(
    <CartItem
      title="Thinking Being"
      cover_url="./big_brain.png"
      price={58.29}
      quantity={4}
    />
  );

  expect(screen.getByText(/Thinking Being/i)).toBeInTheDocument();
  expect(screen.getByText(/58.29 zl/i)).toBeInTheDocument();
  expect(screen.getByText(4)).toBeInTheDocument();
});
