import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Hero, InvestEverything } from "../components/component_index";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero");

    expect(heroImage).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(<InvestEverything />);

    const signupButton = screen.getByRole("button", {
      name: /Register Now/i,
    });

    expect(signupButton).toBeInTheDocument();
  });
});
