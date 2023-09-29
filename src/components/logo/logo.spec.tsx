import React from 'react';

import { Logo } from '.';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders Logo component with correct props', () => {
  const expectedAlt = 'pitblast_logo';

  const { getByRole } = render(<Logo />);

  const imageElement = getByRole('img');

  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('alt', expectedAlt);
});
