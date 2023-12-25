import { FC } from "react";
import cn from "../utility/css/cn";
import { ActiveLink } from "./ActiveLink";

interface prop {
  className?: string;
}
export const SectionNavBar: FC<prop> = ({ className }) => {
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
    <div className={`w-full  justify-center items-center     flex `}>
      <nav
        className={cn(
          `w-full lg:w-[90%]  lg:mx-auto flex justify-center lg:justify-end space-x-16 absolute top-0 py-8   z-50   ${className}`
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
