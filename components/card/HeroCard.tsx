import { FC, ReactNode } from "react";
import "./card.css";
import Link from "next/link";
import Image from "next/image";

interface prop {
  url?: string;
  backgroundImage?: ReactNode;
  heading?: ReactNode;
}

export const HeroCard: FC<prop> = ({
  url = "\\",
  backgroundImage = "",
  heading,
}) => {
  return (
    <Link
      href={url}
      className="  w-[300px] h-[500px] bg-[#2E2F34] rounded-3xl transaction hover:scale-105 transition-all  flex justify-center items-center  flex-col space-y-12 group "
    >
      <div className=" w-full h-full flex justify-center items-end">
        {backgroundImage}
      </div>
      <div className=" w-full  h-full flex flex-col space-y-6">
        <div className="text-2xl font-semibold py-2 text-white">{heading}</div>
        <div className="w-full ">
          <button className="w-3/5 border-[#FFA600] border py-2 text-[#FFA600] rounded-full group-hover:text-[#000] group-hover:bg-[#FFA600] ">
            View
          </button>
        </div>
      </div>
      {/* <div className="">
        <div className="w-full  flex justify-center items-center bg-black">
          {backgroundImage}
        </div>
        <div className="text-white font-medium flex   flex-col pt-8  space-y-12 bg-black">
          <div className="text-2xl py-2">{heading}</div>
          <div className="w-full ">
            <button className="w-4/5 border-[#FFA600] border py-2 text-[#FFA600] rounded-full group-hover:text-[#000] group-hover:bg-[#FFA600] ">
              View
            </button>
          </div>
        </div>
      </div> */}
      {/* <div>{backgroundImage}</div>
      <div className="text-white font-medium flex   flex-col pt-12 space-y-12">
        <div className="text-2xl py-2">{heading}</div>
        <div className="w-full ">
          <button className="w-4/5 border-[#FFA600] border py-2 text-[#FFA600] rounded-full group-hover:text-[#000] group-hover:bg-[#FFA600] ">
            View
          </button>
        </div>
      </div> */}
    </Link>
  );
};
