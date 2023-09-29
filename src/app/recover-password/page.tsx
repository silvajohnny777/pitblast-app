'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { BsPerson, BsCheck, BsCircle } from 'react-icons/bs';

import Input from '../../components/input/index';
import { Logo } from '../../components/logo';
import EmailValidation from './components/email-validation/EmailValidation';
import PublicContainer from '@/components/public-container';

import { APP_ROUTES } from '@/constants/app-routes';
import { CheckValidEmail } from '@/functions/check-valid-email';
import { passwordReset } from '@/functions/password-reset';

interface pageContent {
  title: string;
  description: string;
}
export default function RecoverPassword() {
  const { push } = useRouter();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [content, setContent] = useState<pageContent>({
    title: `To reset`,
    description: `your password, please enter your email below. We will send you a
    request to start the process.`
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordReset = async () => {
    setLoading(true);
    try {
      await passwordReset(email);
      setContent({
        title: 'We sent you',
        description: 'an email so you can create a new password'
      });
      setSent(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <PublicContainer>
      <Logo />
      {loading ? (
        <div
          className={`flex flex-col items-center justify-center mt-[52px] w-[136px] h-[136px] bg-[#DD052B] shadow-[inset_0px_0px_0px_#DD052B,0px_8px_16px_#33333329] rounded-[24px]`}
        >
          <BsCircle className="text-[80px] text-white" />
          <p className="text-white mt-[5px]">Loading...</p>
        </div>
      ) : (
        <>
          <div className="md:w-[356px] w-[90%]  h-[123px] mb-[54px] flex flex-col justify-end">
            <h1 className="text-[32px] text-[#333333] font-bold font-gotham">
              {content.title}
            </h1>
            <p className="text-[24px] text-[#828282] font-minion font-[300]">
              {content.description}
            </p>
          </div>
          {!sent && (
            <div className="flex flex-col">
              <Input
                iconLeft={
                  <BsPerson className="absolute top-[50px] left-[16px]" />
                }
                name="email"
                id="email"
                label="Email or Username"
                placeholder="user@e-mail.com"
                value={email}
                type="text"
                handleChange={handleChange}
              />
              <EmailValidation email={email} />
            </div>
          )}
          <div
            className={`md:w-[356px] w-[90%] flex ${
              sent ? 'justify-end' : 'justify-between'
            } absolute bottom-[80px]`}
          >
            {!sent && (
              <Link
                href="/login"
                className="flex items-center justify-center mt-[52px] h-[136px] cursor-pointer"
              >
                <BiArrowBack className="text-[80px] text-[#828282]" />
              </Link>
            )}
            <div
              className={`flex items-center justify-center mt-[52px] w-[136px] h-[136px] ${
                !CheckValidEmail(email)
                  ? 'pointer-events-none bg-[#828282]'
                  : 'bg-[#DD052B]'
              }  shadow-[inset_0px_0px_0px_#DD052B,0px_8px_16px_#33333329] rounded-[24px] cursor-pointer`}
              onClick={
                sent
                  ? () => push(APP_ROUTES.public.login)
                  : () => handlePasswordReset()
              }
            >
              {sent ? (
                <BsCheck className="text-[80px] text-white" />
              ) : (
                <AiOutlineSend className="text-[80px] text-white" />
              )}
            </div>
          </div>
        </>
      )}
    </PublicContainer>
  );
}
