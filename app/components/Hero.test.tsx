import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders name as heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: /yuval tal/i })).toBeInTheDocument();
  });

  it("renders role title", () => {
    render(<Hero />);
    expect(
      screen.getByText(/final-year computer science student/i)
    ).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/backend and full-stack development/i)
    ).toBeInTheDocument();
  });

  it("renders email CTA with correct mailto", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /email me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "mailto:yuvalt12311@gmail.com");
  });
});
