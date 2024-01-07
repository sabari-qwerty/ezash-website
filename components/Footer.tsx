"use client";
import { Instagram, Whatsapp, Discord, Google, Telegram } from "@/assets";
import { FC } from "react";
import { usePathname } from "next/navigation";
import cn from "../utility/css/cn";
import { SectionLayout } from "./sectionLayout";
import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

const Contact = [
  { icon: <Whatsapp />, link: "", label: "+91 90800 78315" },
  { icon: <Google />, link: "", label: "ezash00@gmail.com" },
  { icon: <Telegram />, link: "", label: "+91 90800 78315" },
  { icon: <Instagram />, link: "", label: "ezash_" },
  { icon: false, link: "", label: "Contact" },
  { icon: <Discord />, link: "", label: "ezash#0632" },
];

const data = [
  {
    valueOne: { name: "Graphics	& UI/UX Designs", url: "/graphic" },
    valueTwo: { name: "Portfolio", url: "/#portfolio" },
  },
  {
    valueOne: { name: "3D Modeling & Animation", url: "/modeling" },
    valueTwo: { name: "Home", url: "/" },
  },
  {
    valueOne: { name: "Video editing & 2D animations", url: "/animations" },
    valueTwo: { name: "About", url: "/about" },
  },
  {
    valueOne: { name: "Game & VR Development", url: "/game" },
    valueTwo: { name: "contact", url: "/contact" },
  },
];

export const Footer: FC = () => {
  const path = usePathname();
  const bool = console.log();
  return (
    <SectionLayout
      className="w-full h-full lg:flex
   justify-center items-center "
    >
      <footer className={cn(`w-full h-full grid grid-rows-2 `)}>
        <div className="w-4/5 mx-auto h-full flex  space-x-8 items-center justify-center   ">
          <div className="w-4/5  h-full grid grid-cols-3 gap-2  items-center  justify-between ">
            <div className="w-full h-full flex items-center pl-10">
              <div className="w-[250px] ">
                <Image
                  src={"/ezashround.png"}
                  alt="amount"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="col-span-2 w-full h-full flex  flex-col items-center justify-center space-y-6 text-white  text-lg">
              {data.map((data, key) => (
                <div key={key} className=" flex justify-between w-full  ">
                  <ActiveLink
                    href={data.valueOne.url}
                    className="text-left"
                    lable={data.valueOne.name}
                  />
                  <ActiveLink
                    href={data.valueTwo.url}
                    className="text-right pr-20"
                    lable={data.valueTwo.name}
                  />
                  {/* <Link href={data.valueOne.url} className="text-left">
                    {data.valueOne.name}
                  </Link>
                  <Link href={data.valueTwo.url} className="text-right px-12">
                    {data.valueTwo.name}
                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex flex-col space-y-16 justify-center items-center py-4 w-full   bg-[#34353a]">
          <div className="flex justify-center text-white items-center text-3xl font-semibold w-full">
            <h2>Ways to Contact me</h2>
          </div>
          <div className="flex flex-col space-y-16 justify-center items-center w-full bg-[#34353a]">
            <div className="flex w-3/5 mx-auto  lg:justify-between  justify-center   flex-col lg:flex-row space-y-6 lg:space-y-0">
              {Contact.slice(0, 3).map((data, key) => (
                <a
                  href={data.link}
                  target="_blank"
                  key={key}
                  className=" min-w-[160px] flex rounded-full justify-center items-center space-x-4  bg-[#00000017] py-2 px-4 hover:bg-[#FFA600] text-[#fff] hover:text-gray-700 "
                >
                  {data.icon && <span className="text-2xl">{data.icon}</span>}
                  <span className="text-xl">{data.label}</span>
                </a>
              ))}
            </div>
            <div className="flex w-3/5 lg:w-2/5 mx-auto  lg:justify-between  justify-center   flex-col lg:flex-row space-y-6 lg:space-y-0">
              {Contact.slice(3, 6).map((data, key) => (
                <a
                  href={data.link}
                  target="_blank"
                  key={key}
                  className="flex  min-w-[160px] rounded-full justify-center items-center space-x-4  bg-[#00000017] py-2 px-4 hover:bg-[#FFA600] text-[#fff] hover:text-gray-700 "
                >
                  {data.icon && <span className="text-2xl">{data.icon}</span>}
                  <span className="text-xl">{data.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </SectionLayout>
  );
};
