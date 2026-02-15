import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders name as heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: /yuval tal/i })).toBeInTheDocument();
  });

  it("renders role title", () => {
    render(<Hero />);
    expect(screen.getByText(/staff engineer.*technical lead/i)).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Hero />);
    expect(screen.getByText(/building scalable systems/i)).toBeInTheDocument();
  });

  it("renders email CTA with correct mailto", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /email me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "mailto:hello@yuvaltal.com");
  });
});
