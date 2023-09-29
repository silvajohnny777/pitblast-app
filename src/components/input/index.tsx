import { ReactNode } from 'react';

interface inputPropsTypes {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  type?: string;
  name: string;
  id: string;
  placeholder: string;
  label: string;
  value: string;
  error?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  iconLeft,
  iconRight,
  name,
  type = 'text',
  label,
  placeholder,
  id,
  value,
  error,
  handleChange
}: inputPropsTypes) => {
  return (
    <div className="relative flex flex-col">
      {label && (
        <label
          className={`mb-[7px] ${
            error && 'text-[#545454]'
          } font-gotham font-[300]`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {iconLeft}
      <input
        id={id}
        className={`md:w-[356px] w-[275px] h-[52px] rounded-[8px] ${
          error
            ? 'border-[3px] border-[#DD052B]'
            : 'border-[1px] border-[#C6C6C6]'
        } border-solid  py-[17px] pl-[60px] text-[#828282]`}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event)
        }
      />
      {iconRight}
    </div>
  );
};

export default Input;
