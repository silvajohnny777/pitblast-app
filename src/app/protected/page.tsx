'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

import UserInfo from './components/UserInfo';
import { Logo } from '@/components/logo';
import ProtectedContainer from '@/components/protected-container';

import { removeFromLocalStorage } from '../../functions/remove-local-storage';

export default function Page() {
  const { push } = useRouter();
  const logOutFunction = () => {
    removeFromLocalStorage(`token`);
    removeFromLocalStorage(`user`);
    push('/login');
  };
  return (
    <ProtectedContainer>
      <div className="md:w-[400px] w-[90%]">
        <Logo />
        <UserInfo />
        <div
          className={`md:w-[356px] flex justify-start absolute bottom-[80px] left-[65px]`}
        >
          <Link
            href="/login"
            className="flex items-center justify-center mt-[52px] h-[136px] cursor-pointer"
            onClick={() => logOutFunction()}
          >
            <BiArrowBack className="text-[80px] text-[#828282]" />
          </Link>
        </div>
      </div>
    </ProtectedContainer>
  );
}
