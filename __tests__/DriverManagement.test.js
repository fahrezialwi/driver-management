import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import DriverManagement from "../components/DriverManagement";
import { UserProvider } from '../context/User';

test('render driver management', () => {
  render(
    <UserProvider>
      <DriverManagement/>
    </UserProvider>
  );
  const text = screen.getByText('DRIVER MANAGEMENT');
  expect(text).toBeInTheDocument();
});