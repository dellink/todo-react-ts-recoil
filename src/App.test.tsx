import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders todo text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/todo/i);
  expect(linkElement).toBeInTheDocument();
});
