import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders silly text', () => {
  render(<App />);
  const sillyText = screen.getByText(/hi :P/i);
  expect(sillyText).toBeInTheDocument();
});
