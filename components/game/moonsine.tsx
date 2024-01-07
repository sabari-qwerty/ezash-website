import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import Image from "next/image";

export const Moonsine: FC = () => {
  return (
    <SectionLayout className="lg:grid grid-cols-2 gap-16">
      <div className="w-full h-full  flex  justify-end items-center">
        <div className="w-4/5 h-4/5  flex justify-center  items-center">
          <video
            src={
              "https://video.wixstatic.com/video/c53520_b0fed90e54ff44c2823de0a2b37a0ca0/720p/mp4/file.mp4"
            }
            autoPlay
            muted
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start">
        <div className="w-3/5 h-3/5   flex flex-col space-y-8 justify-center items-start  ">
          <div className="flex flex-col space-y-8">
            <div className="  text-5xl text-left text-white font-bold w-full ">
              MOON SHINE
            </div>
            <p className="w-full h-full text-left text-white">
              The game name is Moon Shine, and it is a kind of story game for
              mobile platforms. Unfortunately, I will not be able to finish it,
              but I will design the landscape and optimise it. In the future I
              will do this in high quality for PC and consoles
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
{
  /*  */
}
