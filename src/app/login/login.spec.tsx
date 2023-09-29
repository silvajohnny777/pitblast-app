import React from 'react';

import Login from './page';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

describe('Login Component', () => {
  it('renders Login component with form', async () => {
    const { getByLabelText, getByText } = render(<Login />);

    expect(getByText('Welcome,')).toBeInTheDocument();
    expect(getByText('Sign in to access your account.')).toBeInTheDocument();

    fireEvent.change(getByLabelText('Email or Username'), {
      target: { value: 'user@example.com' }
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'password123' }
    });

    expect(getByLabelText('Email or Username')).toHaveValue('user@example.com');
    expect(getByLabelText('Password')).toHaveValue('password123');
  });
});
