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
    <nav
      className={cn(
        `w-full mx-auto flex justify-center lg:justify-end space-x-16 absolute top-0 py-8  z-50 bg-black ${className}`
      )}
    >
      {NavBarContent.map((data, key) => (
        <ActiveLink href={data.dir} key={key} lable={data.lable} />
      ))}
    </nav>
  );
};
