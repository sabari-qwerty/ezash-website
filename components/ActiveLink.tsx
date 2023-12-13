"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface prop {
  href?: string;
  lable?: string;
  className?: string;
}
export const ActiveLink: FC<prop> = ({ href = "/", lable, className }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      href={href}
      className={` ${
        pathname === href ? "text-[#FFA600]" : "text-white"
      }  tracking-wider text-lg font-medium hover:text-[#FFA600]  ${className}`}
    >
      {lable}
    </Link>
  );
};
