import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App"; 

test("renders a <header> element", () => {
  render(<App />);
  
  const header = screen.getByRole('banner'); 
  expect(header).toBeInTheDocument();
});

test("renders the correct header content", () => {
  render(<App />);
  
  const header = screen.getByRole('banner');
  expect(header).toHaveTextContent("Blog"); 
});
