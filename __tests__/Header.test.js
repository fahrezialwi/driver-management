import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test('render hello', () => {
  render(
    <Header/>
  );
  const text = screen.getByText(/Hello,/);
  expect(text).toBeInTheDocument();
});