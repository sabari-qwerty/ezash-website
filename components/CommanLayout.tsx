import { FC, ReactNode } from "react";
import cn from "../utility/css/cn";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

interface prop {
  children?: ReactNode;
  className?: string;
}

export const CommanLayout: FC<prop> = ({ children, className }) => {
  return (
    <main
      className={cn(
        ` mx-auto  w-full min-h-[100dvh] overflow-auto scrollbar-hide py-8 relative  flex flex-col  relative${className}`
      )}
    >
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};
