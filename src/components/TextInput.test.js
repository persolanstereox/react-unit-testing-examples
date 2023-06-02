import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput component", () => {
  test("renders input field", () => {
    render(<TextInput />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  test("displays entered text", () => {
    render(<TextInput />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
    const displayElement = screen.getByText("You entered: Hello, World!");
    expect(displayElement).toBeInTheDocument();
  });
});
