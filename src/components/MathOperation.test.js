import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MathOperation from "./MathOperation";

describe("MathOperation component", () => {
  test("renders inputs and button", () => {
    render(<MathOperation />);
    expect(screen.getByLabelText("First Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Second Number")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  test("adds two numbers correctly", () => {
    render(<MathOperation />);
    const firstInput = screen.getByLabelText("First Number");
    const secondInput = screen.getByLabelText("Second Number");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(firstInput, { target: { value: "2" } });
    fireEvent.change(secondInput, { target: { value: "3" } });
    fireEvent.click(addButton);

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("does not display result initially", () => {
    render(<MathOperation />);
    expect(screen.queryByText("")).toBeNull();
  });
});
