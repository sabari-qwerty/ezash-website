"use client";
import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import cn from "../utility/css/cn";
import { usePathname } from "next/navigation";

interface prop {
  className?: string;
}

export const NavBar: FC<prop> = ({ className }) => {
  const path = usePathname();

  console.log("/modeling" in ["/modeling"]);
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
    <div
      className={`w-full   justify-center items-center    ${
        ["/graphic", "/modeling", "/game", "/animations"].includes(path)
          ? "hidden"
          : "flex"
      } `}
    >
      <nav
        className={cn(
          `w-full mx-auto flex justify-center space-x-16 absolute top-0 py-8  z-50 bg-[#2e2f34]   ${className}`
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
