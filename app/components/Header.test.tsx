import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

describe("Header", () => {
  it("renders site name linking to home", () => {
    render(<Header />);
    const link = screen.getByRole("link", { name: /yuval tal/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: /life/i })).toHaveAttribute("href", "#life");
    expect(screen.getByRole("link", { name: /writing/i })).toHaveAttribute("href", "#writing");
  });

  it("renders within a header landmark", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
});
