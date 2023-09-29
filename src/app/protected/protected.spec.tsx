import React from 'react';

import * as localStorageModule from '../../functions/get-item-from-local-storage';
import Page from './page';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../../functions/get-item-from-local-storage');

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

jest.mock('../../functions/remove-local-storage', () => ({
  removeFromLocalStorage: jest.fn()
}));

describe('Page Component', () => {
  it('renders Page component corretly', () => {
    const mockUser = {
      firstName: 'Johnny',
      lastName: 'Test',
      companyPosition: 'Developer',
      companyName: 'Company Name',
      email: 'JohnnyTest@email.com',
      status: 'Active',
      type: 'User',
      _id: '1234567890'
    };

    const getFromLocalStorageSpy = jest.spyOn(
      localStorageModule,
      'getFromLocalStorage'
    );
    getFromLocalStorageSpy.mockReturnValue(mockUser);

    const { getByText } = render(<Page />);

    expect(getByText('Welcome to Admin 2.0')).toBeInTheDocument();
  });
});
