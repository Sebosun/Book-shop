import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { customerData } from "./Checkout";
import CheckoutForm from "./CheckoutForm";

describe("Submit attempts", () => {
  beforeEach(() => {
    jest.fn().mockClear();
  });

  test("if some of the data is invalid do not call handle submit", async () => {
    const handleSubmit = jest.fn();
    render(<CheckoutForm handleOrderConfirm={handleSubmit} />);

    user.type(screen.getByLabelText(/Imie/i), "John");
    user.type(screen.getByLabelText(/Nazwisko/i), "Dee");
    user.type(screen.getByLabelText(/Miasto/i), "Warsaw");
    user.type(screen.getByLabelText(/Kod Pocztowy/i), "84212");

    user.click(screen.getByRole("button", { name: /ZAMAWIAM I PŁACĘ/i }));

    await waitFor(() => expect(handleSubmit).not.toBeCalled());
  });

  test("if data is correct, call handleSubmit", async () => {
    const handleSubmit = jest.fn();
    render(<CheckoutForm handleOrderConfirm={handleSubmit} />);

    user.type(screen.getByLabelText(/Imie/i), "Aristotle");
    user.type(screen.getByLabelText(/Nazwisko/i), "Aristophanes");
    user.type(screen.getByLabelText(/Miasto/i), "Athens");
    user.type(screen.getByLabelText(/Kod Pocztowy/i), "12361");

    user.click(screen.getByRole("button", { name: /ZAMAWIAM I PŁACĘ/i }));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        first_name: "Aristotle",
        last_name: "Aristophanes",
        city: "Athens",
        zip_code: "12-361",
      });
    });
  });
});
