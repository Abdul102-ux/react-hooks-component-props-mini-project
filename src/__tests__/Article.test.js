import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders a <article> element", () => {
  render(<App />);
  
  const articles = screen.getAllByRole('article');
  expect(articles.length).toBe(3); 
});

test("renders a <h3> with the title of the post", () => {
  render(<App />);
  
  const h3 = screen.getByText(/Components 101/);
  expect(h3).toBeInTheDocument();
  expect(h3.tagName).toBe("H3");
});

test("renders a <small> with the date of the post", () => {
  render(<App />);
  
  const small = screen.getByText(/December 15, 2020/);
  expect(small).toBeInTheDocument();
  expect(small.tagName).toBe("SMALL");
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(<App />);
  
  const small = screen.getByText(/December 10, 2020/); 
  expect(small).toBeInTheDocument();
});

test("renders a <p> with the preview text", () => {
  render(<App />);
  
  const p = screen.getByText(/Setting up the building blocks of your site/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});
