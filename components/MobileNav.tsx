import { FC } from "react";
import cn from "../utility/css/cn";
import { ActiveLink } from "./ActiveLink";

export const MobileNav: FC = () => {
  const NavBarContent = [
    {
      lable: "Home",
      dir: "/",
    },
    {
      lable: "Portfolio",
      dir: "/#portfolio",
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
    <div className={`w-full justify-center items-center flex`}>
      <nav className={cn(`w-4/5  py-10 flex justify-between`)}>
        {NavBarContent.map((data, key) => (
          <ActiveLink
            href={data.dir}
            key={key}
            lable={data.lable}
            className="font-medium text-base"
          />
        ))}
      </nav>
    </div>
  );
};
