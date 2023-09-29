import React from 'react';

import Input from './index';

import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders Input component correctly', async () => {
  const label = 'Email';
  const name = 'email';
  const placeholder = 'user@example.com';
  const id = 'email';
  const value = '';
  const error = false;

  const handleChange = jest.fn();

  const { getByLabelText } = render(
    <Input
      label={label}
      name={name}
      placeholder={placeholder}
      id={id}
      value={value}
      error={error}
      handleChange={handleChange}
    />
  );

  const labelElement = getByLabelText(label);
  expect(labelElement).toBeInTheDocument();

  const inputElement = getByLabelText(label);
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'test@example' } });
});
