import { FC, ReactNode } from "react";
import cn from "../../../utility/cn";

interface prop {
  children?: ReactNode;
  className?: string;
}

export const SectionLayout: FC<prop> = ({ children, className }) => {
  return (
    <section className={cn(`w-full h-[100dvh] ${className}`)}>
      {children}
    </section>
  );
};
