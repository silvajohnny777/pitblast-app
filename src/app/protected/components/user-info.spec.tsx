import React from 'react';

import * as localStorageModule from '../../../functions/get-item-from-local-storage';
import UserInfo from './UserInfo';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
jest.mock('../../../functions/get-item-from-local-storage');

describe('UserInfo Component', () => {
  it('renders UserInfo component with user information', () => {
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

    const { getByText } = render(<UserInfo />);

    expect(
      getByText(
        `Hello ${mockUser.firstName} ${mockUser.lastName}, you are a ${mockUser.companyPosition} at the company.`
      )
    ).toBeInTheDocument();
    expect(getByText(`${mockUser.companyName}`)).toBeInTheDocument();
    expect(getByText(`${mockUser.email}`)).toBeInTheDocument();
    expect(getByText(`${mockUser.status}`)).toBeInTheDocument();
    expect(getByText(`${mockUser.type}`)).toBeInTheDocument();
    expect(getByText(`#${mockUser._id}`)).toBeInTheDocument();
  });
});
