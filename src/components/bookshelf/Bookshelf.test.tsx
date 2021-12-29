import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Bookshelf from "./Bookshelf";
import { createStore } from "../../store/app/store";

test("if props is being rendered", () => {
  render(
    <Provider store={createStore()}>
      <Bookshelf
        book={{
          id: 0,
          title: "Conan",
          author: "Aurthur",
          cover_url: "localhost:3000/image.jpg",
          pages: 5,
          price: 4000,
          currency: "PLN",
        }}
      />
    </Provider>
  );

  expect(screen.getByAltText("book cover")).toHaveAttribute(
    "src",
    "localhost:3000/image.jpg"
  );
  expect(screen.getByText(/Conan/i)).toBeInTheDocument();
  expect(screen.getByText(/5 stron/i)).toBeInTheDocument();
  expect(screen.getByText(/Aurthur/i)).toBeInTheDocument();
  expect(screen.getByText(/Dodaj do koszyka/i)).toBeInTheDocument();
});

test("if probs is being rendered 2", () => {
  render(
    <Provider store={createStore()}>
      <Bookshelf
        book={{
          id: 0,
          title: "Naruto",
          author: "Mishima",
          cover_url: "localhost:3000/naruto_2.jpg",
          pages: 23,
          price: 4000,
          currency: "PLN",
        }}
      />
    </Provider>
  );

  expect(screen.getByAltText("book cover")).toHaveAttribute(
    "src",
    "localhost:3000/naruto_2.jpg"
  );
  expect(screen.getByText(/Naruto/i)).toBeInTheDocument();
  expect(screen.getByText(/Mishima/i)).toBeInTheDocument();
  expect(screen.getByText(/23 stron/i)).toBeInTheDocument();
  expect(screen.getByText(/Dodaj do koszyka/i)).toBeInTheDocument();
});
