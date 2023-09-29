import React from 'react';

import EmailValidation from './EmailValidation';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
test('renders "Invalid email!" message when email is invalid', () => {
  const invalidEmail = 'invalid-email';

  const { getByText } = render(<EmailValidation email={invalidEmail} />);

  const invalidEmailMessage = getByText('Invalid email!');
  expect(invalidEmailMessage).toBeInTheDocument();
});

test('does not render "Invalid email!" message when email is valid', () => {
  const validEmail = 'valid@email.com';

  const { queryByText } = render(<EmailValidation email={validEmail} />);

  const invalidEmailMessage = queryByText('Invalid email!');
  expect(invalidEmailMessage).toBeNull();
});
