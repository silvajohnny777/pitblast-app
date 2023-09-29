import React from 'react';

import RecoverPassword from './page';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn()
    };
  }
}));

test('renders RecoverPassword component and check for wrong email typing', async () => {
  const useRouter = jest.fn();
  useRouter.mockReturnValue({ push: jest.fn() });

  const { getByText, getByLabelText } = render(<RecoverPassword />);

  const titleElement = getByText(/To reset/i);
  expect(titleElement).toBeInTheDocument();

  const emailInputElement = getByLabelText('Email or Username');
  expect(emailInputElement).toBeInTheDocument();

  // Simulate typing a wrong email
  fireEvent.change(emailInputElement, {
    target: { value: 'test@wrongmail' }
  });
  const sendButton = getByText('Invalid email!');
  expect(sendButton).toBeInTheDocument();
});
