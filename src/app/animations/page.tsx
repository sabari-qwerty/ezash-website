import React from "react";
import { Model } from "../../../components/model";
import { AnimationsPage } from "../../../components/animations";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full h-full hidden lg:inline-block">
        <AnimationsPage />
      </div>
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex justify-center items-center">
          <Image src={"/web-mobile.png"} width={320} height={320} alt="img" />
        </div>
      </div>
    </>
  );
};

export default page;
