'use client';

import { useRouter } from 'next/navigation';

import { checkUserAuthenticated } from '../functions/check-user-is-authenticated';

export default function Home() {
  const { push } = useRouter();
  return checkUserAuthenticated() ? push('/protected') : push('/login');
}
