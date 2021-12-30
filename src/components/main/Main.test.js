import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "../../store/app/store";
import Main from "./Main";

test("renders after succesful api call", async () => {
  const books = [
    {
      id: 41,
      title: "Taejtet",
      author: "Plato",
      cover_url: "./:).jpg",
      pages: 150,
      price: 15000,
      currency: "PLN",
    },
  ];

  const metadata = {
    page: 1,
    records_per_page: 1,
    total_records: 1,
  };

  const combinedData = { data: books, metadata };

  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => combinedData,
  });

  render(
    <Provider store={createStore()}>
      <Main />
    </Provider>
  );

  const author = await screen.findByText(/Plato/i);
  const title = await screen.findByText(/Taejtet/i);
  const pages = await screen.findByText(/150/i);

  expect(author).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(pages).toBeInTheDocument();
});
