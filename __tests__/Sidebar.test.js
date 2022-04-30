import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar";

test('render beranda', () => {
  render(
    <Sidebar/>
  );
  const text = screen.getByText('Beranda');
  expect(text).toBeInTheDocument();
});

test('render driver management', () => {
  render(
    <Sidebar/>
  );
  const text = screen.getByText('Driver Management');
  expect(text).toBeInTheDocument();
});


test('render pickup', () => {
  render(
    <Sidebar/>
  );
  const text = screen.getByText('Pickup');
  expect(text).toBeInTheDocument();
});