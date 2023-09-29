import Link from 'next/link';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

import { Logo } from '@/components/logo';
import PublicContainer from '@/components/public-container';

export default function LoginError() {
  return (
    <PublicContainer>
      <Logo />
      <div className="flex flex-col items-center justify-center mt-[52px] w-[136px] h-[136px] bg-[#FF6600] shadow-[inset_0px_0px_0px_#DD052B,0px_8px_16px_#33333329] rounded-[24px]">
        <AiOutlineExclamationCircle className="text-[80px] text-white" />
        <p className="text-white mt-[5px] font-minion">Error!</p>
      </div>
      <div className="absolute bottom-[150px] w-[356px] h-[123px] mb-[54px] flex flex-col justify-end">
        <h1 className="text-[32px] text-[#333333] font-bold font-gotham">
          Ops!
        </h1>
        <p className="text-[24px] text-[#828282] font-minion">
          It was not possible to connect to your account. Try again. <br />
          [Error code or description?]
        </p>
      </div>
      <div
        className={`md:w-[356px] flex justify-start absolute bottom-[80px] left-[65px]`}
      >
        <Link
          href="/login"
          className="flex items-center justify-center mt-[52px] h-[136px] cursor-pointer"
        >
          <BiArrowBack className="text-[80px] text-[#828282]" />
        </Link>
      </div>
    </PublicContainer>
  );
}
