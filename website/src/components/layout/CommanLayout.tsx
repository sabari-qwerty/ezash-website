import { FC, ReactNode } from "react";
import cn from "../../../utility/cn";

interface prop {
  children?: ReactNode;
  className?: string;
}

export const CommanLayout: FC<prop> = ({ children, className }) => {
  return (
    <div className={cn(`w-[90%] mx-auto h-full ${className}`)}>{children}</div>
  );
};
