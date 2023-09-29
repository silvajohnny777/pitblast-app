import { getFromLocalStorage } from '../../../functions/get-item-from-local-storage';

export default function UserInfo() {
  const user = getFromLocalStorage('user', true);

  return (
    <>
      <h1 className="text-[32px] text-[#333333] font-bold font-gotham">
        Welcome to Admin 2.0
      </h1>
      <p className="text-[20px] mt-[15px] text-center text-[#828282]">
        {`Hello ${user.firstName} ${user.lastName}, you are a ${user.companyPosition} at the company.`}
      </p>
      <p className="mt-5 text-[#828282]">
        Here are some more information about your account:
      </p>
      <ul>
        <li className="text-[#828282] my-2">
          Company name:{' '}
          <span className="text-[#333333] font-bold">{user.companyName}</span>
        </li>
        <li className="text-[#828282] my-2">
          Your email:{' '}
          <span className="text-[#333333] font-bold">{user.email}</span>
        </li>
        <li className="text-[#828282] my-2">
          Your status:{' '}
          <span className="text-[#333333] font-bold">{user.status}</span>
        </li>
        <li className="text-[#828282] my-2">
          Your user type:{' '}
          <span className="text-[#333333] font-bold">{user.type}</span>
        </li>
        <li className="text-[#828282] my-2">
          Your ID: <span className="text-[#333333] font-bold">#{user._id}</span>
        </li>
      </ul>
    </>
  );
}
