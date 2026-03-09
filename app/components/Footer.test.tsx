import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

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

describe("Footer", () => {
  it("renders copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Yuval Tal/)).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:yuvalt12311@gmail.com"
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/yuval-dotcom"
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/yuval-tal-spy"
    );
  });
});
