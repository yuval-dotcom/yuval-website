import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("./components", () => ({
  Header: () => <header data-testid="header">Header</header>,
  Hero: () => <section data-testid="hero">Hero</section>,
  SocialLinks: () => <nav data-testid="social">SocialLinks</nav>,
  FocusSection: () => <section data-testid="focus">Focus</section>,
  CurrentlySection: () => <section data-testid="currently">Currently</section>,
  FutureSection: () => <section data-testid="future">Future</section>,
  DashboardSection: () => <section data-testid="dashboard">Dashboard</section>,
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

describe("Home page", () => {
  it("renders all main sections", () => {
    render(<Home />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("social")).toBeInTheDocument();
    expect(screen.getByTestId("focus")).toBeInTheDocument();
    expect(screen.getByTestId("currently")).toBeInTheDocument();
    expect(screen.getByTestId("future")).toBeInTheDocument();
    expect(screen.getByTestId("dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders a main landmark", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
