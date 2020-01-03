import React from 'react';
import { render } from '@testing-library/react';
import ListManager from './list-manager';

test('renders learn react link', () => {
  const { getByText } = render(<ListManager />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
