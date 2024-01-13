import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Test cases for Contact page", () => {
  test("Should render Contact Component on the page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should locate submit button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should locate 2 input textbox ", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
  });
});
