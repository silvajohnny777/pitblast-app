import React from 'react';

import { CheckValidEmail } from '@/functions/check-valid-email';

interface EmailValidationTypes {
  email: string;
}

export default function EmailValidation({ email }: EmailValidationTypes) {
  if (!CheckValidEmail(email) && email.length > 0) {
    return (
      <span className="text-[#DD052B] md:w-[356px] w-[90%] text-right">
        Invalid email!
      </span>
    );
  }

  return null;
}
