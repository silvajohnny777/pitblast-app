import React from 'react';

import LoginError from './page';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders LoginError component with expected elements', () => {
  render(<LoginError />);

  expect(screen.getByAltText('pitblast_logo')).toBeInTheDocument();

  expect(screen.getByText('Error!')).toBeInTheDocument();
  expect(screen.getByText('Ops!')).toBeInTheDocument();
});
