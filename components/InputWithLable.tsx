import { FC, InputHTMLAttributes } from "react";

interface prop extends InputHTMLAttributes<HTMLInputElement> {
  lable?: string;
  type?: "text" | "email";
  id?: string;
}

export const InputWithLable: FC<prop> = ({ lable, type, id, ...rest }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-white">
        {lable}
      </label>
      <input
        type={type}
        id={id}
        className=" bg-transparent focus:text-white  outline-1 indent-2 outline-white border-white inputTag w-full min-h-[40px]"
        {...rest}
      />
    </div>
  );
};
