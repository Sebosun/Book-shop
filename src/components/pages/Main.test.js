import { render, screen } from "@testing-library/react";
import Main from "./Main";

xtest("if fetch renders books in a grid", () => {
  render(<Main />);

  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
