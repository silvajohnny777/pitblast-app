import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { APP_ROUTES } from '@/constants/app-routes';
import { checkUserAuthenticated } from '@/functions/check-user-is-authenticated';

interface privateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: privateRouteProps) => {
  const { push } = useRouter();

  const isUserAuthenticated = checkUserAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [push, isUserAuthenticated]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
