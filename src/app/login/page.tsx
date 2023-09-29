'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { BsCheck, BsCircle, BsEye, BsEyeSlash, BsPerson } from 'react-icons/bs';

import Input from '@/components/input/index';
import { Logo } from '@/components/logo';
import PublicContainer from '@/components/public-container';

import { CheckValidEmail } from '@/functions/check-valid-email';
import { login } from '@/functions/login';
import { SetOnLocalStorage } from '@/functions/set-local-storage';

interface userInfoTypes {
  email: string;
  password: string;
}

export default function Login() {
  const { push } = useRouter();
  const [loginInfo, setLoginInfo] = useState<userInfoTypes>({
    email: '',
    password: ''
  });
  const [logging, setLogging] = useState<boolean>(false);
  const [loginErrror, setLoggingError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    setLogging(true);
    try {
      const userInfo = await login(loginInfo.email, loginInfo.password);
      SetOnLocalStorage('token', userInfo._id);
      SetOnLocalStorage('user', userInfo, true);
      setLoggingError(false);
      setSuccess(true);
      setTimeout(() => {
        push('/protected');
        setLogging(false);
      }, 1000);
    } catch (error) {
      setLoggingError(true);
      setLogging(false);
    }
  };

  return (
    <PublicContainer>
      <Logo />
      {logging ? (
        <div
          className={`flex flex-col items-center justify-center mt-[52px] w-[136px] h-[136px] ${
            !success ? 'bg-[#DD052B]' : 'bg-[#05DD2B]'
          }  shadow-[inset_0px_0px_0px_#DD052B,0px_8px_16px_#33333329] rounded-[24px]`}
        >
          {success ? (
            <BsCheck className="text-[80px] text-white" />
          ) : (
            <BsCircle className="text-[80px] text-white" />
          )}
          <p className="text-white mt-[5px]">
            {success ? 'Sucess' : 'Loging in...'}
          </p>
        </div>
      ) : (
        <>
          <div className="md:w-[356px] w-[90%] h-[123px] mb-[54px] flex flex-col justify-end">
            <h1 className="text-[32px] text-[#333333] font-bold font-gotham">
              {loginErrror ? 'Ops!' : 'Welcome,'} {logging && 'logando'}
            </h1>
            <p className="text-[24px] text-[#828282] font-minion">
              {loginErrror
                ? 'It was not possible to connect to your account. Verify your username and password and try again.'
                : 'Sign in to access your account.'}
            </p>
          </div>
          <div className="flex flex-col">
            <Input
              iconLeft={
                <BsPerson
                  className={`absolute top-[50px] left-[16px]  ${
                    loginErrror ? 'text-[#FF3C00]' : 'text-[#828282]'
                  }`}
                />
              }
              name="email"
              id="email"
              label="Email or Username"
              value={loginInfo.email}
              error={loginErrror}
              placeholder="user@e-mail.com"
              type="text"
              handleChange={handleChange}
            />

            <Input
              iconLeft={
                <AiOutlineLock
                  className={`absolute top-[50px] left-[16px] ${
                    loginErrror ? 'text-[#FF3C00]' : 'text-[#828282]'
                  }`}
                />
              }
              iconRight={
                showPassword ? (
                  <BsEye
                    className={`absolute top-[50px] right-[16px] cursor-pointer ${
                      loginErrror ? 'text-[#FF3C00]' : 'text-[#828282]'
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <BsEyeSlash
                    className={`absolute top-[50px] right-[16px] cursor-pointer ${
                      loginErrror ? 'text-[#FF3C00]' : 'text-[#828282]'
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
              }
              name="password"
              id="password"
              label="Password"
              value={loginInfo.password}
              error={loginErrror}
              placeholder="*********"
              type={showPassword ? 'text' : 'password'}
              handleChange={handleChange}
            />
          </div>
          <Link
            className="md:w-[356px] w-[275px] mt-2 text-right font-minion text-[#828282]"
            href="/recover-password"
          >
            <span className="underline mt-[8px] text-[#DD052B]">Forgot</span>{' '}
            your password?
          </Link>
          <div className="w-[356px] flex justify-end absolute bottom-[80px]">
            <div
              className={`flex items-center justify-center mt-[52px] w-[136px] h-[136px] ${
                loginInfo.email.length > 0 &&
                loginInfo.password &&
                CheckValidEmail(loginInfo.email)
                  ? 'bg-[#DD052B]'
                  : 'pointer-events-none bg-[#828282]'
              }  shadow-[inset_0px_0px_0px_#DD052B,0px_8px_16px_#33333329] rounded-[24px] cursor-pointer`}
              onClick={() => handleLogin()}
            >
              <BsCheck className="text-[80px] text-white" />
            </div>
          </div>
        </>
      )}
    </PublicContainer>
  );
}
