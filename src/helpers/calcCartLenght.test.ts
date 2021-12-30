import { cartState } from "../store/slices/cart";
import { calcCartLenght } from "./calcCartLenght";

test("returns correct value", () => {
  const mockCart: cartState = {
    cart: [
      {
        id: 1228,
        title: "Nowa Matematyka z plusem 6. Podręcznik",
        author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
        cover_url: "http://localhost:3001/static/cover/book/1228.jpg",
        pages: 268,
        price: 3190,
        currency: "PLN",
        quantity: 23,
      },
      {
        id: 1246,
        title: "Matematyka z plusem 7. Podręcznik",
        author: "praca zbiorowa pod redakcją M. Dobrowolskiej",
        cover_url: "http://localhost:3001/static/cover/book/1246.jpg",
        pages: 336,
        price: 3420,
        currency: "PLN",
        quantity: 41,
      },
      {
        id: 905,
        title: "Nowa Matematyka z plusem 5. Podręcznik",
        author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
        cover_url: "http://localhost:3001/static/cover/book/905.jpg",
        pages: 256,
        price: 2990,
        currency: "PLN",
        quantity: 4,
      },
    ],
  };

  expect(calcCartLenght(mockCart)).toBe(68);
});

test("returns correct value 2", () => {
  const mockCart: cartState = {
    cart: [
      {
        id: 458,
        title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
        author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
        cover_url: "http://localhost:3001/static/cover/book/458.jpg",
        pages: 300,
        price: 3300,
        currency: "PLN",
        quantity: 1,
      },
      {
        id: 457,
        title: "Matematyka 1. Podręcznik. Zakres podstawowy",
        author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
        cover_url: "http://localhost:3001/static/cover/book/457.jpg",
        pages: 280,
        price: 3200,
        currency: "PLN",
        quantity: 1,
      },
      {
        id: 1227,
        title: "Język polski 6. Między nami. Podręcznik",
        author: "A. Łuczak, A. Murdzek",
        cover_url: "http://localhost:3001/static/cover/book/1227.jpg",
        pages: 344,
        price: 3230,
        currency: "PLN",
        quantity: 1,
      },
      {
        id: 1228,
        title: "Nowa Matematyka z plusem 6. Podręcznik",
        author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
        cover_url: "http://localhost:3001/static/cover/book/1228.jpg",
        pages: 268,
        price: 3190,
        currency: "PLN",
        quantity: 1,
      },
      {
        id: 1246,
        title: "Matematyka z plusem 7. Podręcznik",
        author: "praca zbiorowa pod redakcją M. Dobrowolskiej",
        cover_url: "http://localhost:3001/static/cover/book/1246.jpg",
        pages: 336,
        price: 3420,
        currency: "PLN",
        quantity: 1,
      },
      {
        id: 905,
        title: "Nowa Matematyka z plusem 5. Podręcznik",
        author: "M. Dobrowolska, M. Jucewicz, M. Karpiński, P. Zarzycki",
        cover_url: "http://localhost:3001/static/cover/book/905.jpg",
        pages: 256,
        price: 2990,
        currency: "PLN",
        quantity: 5,
      },
    ],
  };

  expect(calcCartLenght(mockCart)).toBe(10);
});

export {};
