import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from "./App";
import Header from "./Header";


test('Header componenti doğru render edilmeli', () => {
  render(<Header />);
  const headerElement = screen.getByText('Emoji Search');
  expect(headerElement).toBeInTheDocument();
});

 
