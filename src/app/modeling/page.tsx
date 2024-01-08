import React from "react";
import { ModelingPage } from "../../../components/modeling";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full h-full hidden lg:inline-block">
        <ModelingPage />
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
