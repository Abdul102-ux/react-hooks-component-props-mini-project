import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App"; 

test("renders <aside> element", () => {
  render(<App />);
  

  const asideElement = screen.getByRole('complementary'); 
  expect(asideElement).toBeInTheDocument();
});

test("renders logo in <aside> element", () => {
  render(<App />);
  
  
  const logo = screen.getByAltText("blog logo"); 
  expect(logo).toBeInTheDocument();
});
