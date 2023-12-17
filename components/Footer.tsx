"use client";
import { Instagram, Whatsapp, Discord, Google, Telegram } from "@/assets";
import { FC } from "react";
import { usePathname } from "next/navigation";
import cn from "../utility/css/cn";

const Contact = [
  { icon: <Whatsapp />, link: "", label: "+91 90800 78315" },
  { icon: <Google />, link: "", label: "ezash00@gmail.com" },
  { icon: <Telegram />, link: "", label: "+91 90800 78315" },
  { icon: <Instagram />, link: "", label: "ezash_" },
  { icon: false, link: "", label: "Contact" },
  { icon: <Discord />, link: "", label: "+91 90800 78315" },
];

export const Footer: FC = () => {
  const path = usePathname();
  const bool = console.log();
  return (
    <footer
      className={cn(
        `flex flex-col space-y-16 ${path == "/graphic" && "hidden"}`
      )}
    >
      <div className="flex justify-center text-white items-center text-3xl font-semibold">
        <h2>Ways to Contact me</h2>
      </div>
      <div className="flex   lg:justify-between  justify-center   flex-col lg:flex-row space-y-6 lg:space-y-0">
        {Contact.map((data, key) => (
          <a
            href={data.link}
            target="_blank"
            key={key}
            className="flex rounded-lg justify-center items-center space-x-4  bg-[#00000017] py-2 px-4 hover:bg-[#FFA600] text-[#fff] hover:text-gray-700 "
          >
            {data.icon && <span className="text-2xl">{data.icon}</span>}
            <span className="text-xl">{data.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};
