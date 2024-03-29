import { FC, ReactNode } from "react";
import cn from "../utility/css/cn";

interface prop {
  className?: string;
  children?: ReactNode;
}

export const SectionLayout: FC<prop> = ({ className, children }) => {
  return (
    <section
      className={cn(`w-full  lg:h-[100dvh]  desktop-only   ${className} `)}
    >
      {children}
    </section>
  );
};
