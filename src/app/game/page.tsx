import { FC } from "react";
import { GamePage } from "../../../components/game";
import Image from "next/image";

const page: FC = () => {
  return (
    <>
      <div className="w-full h-full hidden lg:inline-block">
        <GamePage />
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
