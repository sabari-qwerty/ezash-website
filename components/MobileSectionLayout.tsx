import { FC, ReactNode } from "react";
import cn from "../utility/css/cn";

interface prop {
  className?: string;
  children?: ReactNode;
}

export const MobileSectionLayout: FC<prop> = ({ className, children }) => {
  return (
    <section className={cn(`w-full h-full ${className}`)}>{children}</section>
  );
};
