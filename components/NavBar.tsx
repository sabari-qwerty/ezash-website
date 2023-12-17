import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import cn from "../utility/css/cn";

interface prop {
  className?: string;
}

export const NavBar: FC<prop> = ({ className }) => {
  const NavBarContent = [
    {
      lable: "Home",
      dir: "/",
    },
    {
      lable: "About",
      dir: "/about",
    },
    {
      lable: "Contact",
      dir: "/contact",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center bg-[#2e2f34] ">
      <nav
        className={cn(
          `w-[90%] mx-auto flex justify-center space-x-16 absolute top-0 py-8  z-50   ${className}`
        )}
      >
        {NavBarContent.map((data, key) => (
          <ActiveLink
            href={data.dir}
            key={key}
            lable={data.lable}
            className="font-bold"
          />
        ))}
      </nav>
    </div>
  );
};
