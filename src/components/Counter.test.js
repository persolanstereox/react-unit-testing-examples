import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Couter";

describe("Counter", () => {
  test("renders initial count", () => {
    render(<Counter />);
    const countElement = screen.getByText(/0/);
    expect(countElement).toBeInTheDocument();
  });

  test("increments count when the button is clicked", () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: /counter/i });
    fireEvent.click(button);
    const countElement = screen.getByText(/1/);
    expect(countElement).toBeInTheDocument();
  });

  test("increments count multiple times when the button is clicked multiple times", () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: /counter/i });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    const countElement = screen.getByText(/3/);
    expect(countElement).toBeInTheDocument();
  });
});