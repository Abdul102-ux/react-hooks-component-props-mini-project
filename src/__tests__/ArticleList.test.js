import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App"; 

test("renders all articles", () => {
  render(<App />);
  
  
  expect(screen.getByText("Components 101")).toBeInTheDocument();
  expect(screen.getByText("React Data Flow")).toBeInTheDocument();
  expect(screen.getByText("Function vs Class Components")).toBeInTheDocument();
});

test("renders the correct article details", () => {
  render(<App />);
  
  
  const article1 = screen.getByText("Components 101");
  expect(article1).toBeInTheDocument();
  expect(article1.nextElementSibling).toHaveTextContent("December 15, 2020");
  expect(article1.nextElementSibling.nextElementSibling).toHaveTextContent("Setting up the building blocks of your site");

  
  const article2 = screen.getByText("React Data Flow");
  expect(article2).toBeInTheDocument();
  expect(article2.nextElementSibling).toHaveTextContent("December 11, 2020");
  expect(article2.nextElementSibling.nextElementSibling).toHaveTextContent("Passing props is never passé");

  
  const article3 = screen.getByText("Function vs Class Components");
  expect(article3).toBeInTheDocument();
  expect(article3.nextElementSibling).toHaveTextContent("December 10, 2020");
  expect(article3.nextElementSibling.nextElementSibling).toHaveTextContent("React, meet OOJS.");
});
