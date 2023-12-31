import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { SectionNavBar } from "../SectionNavBar";
import { SliderHeading } from "../SliderHeading";

export const GameHeroPage: FC = () => {
  return (
    <SectionLayout className=" flex flex-col  bg-[#2e2f34]">
      <SectionNavBar />
      <div className="flex-1 w-[60%] mx-auto  h-full flex flex-col justify-center items-start ">
        <h1 className="lg:text-6xl text-4xl font-bold text-white flex flex-col space-y-8 w-full ">
          <div className="w-full  text-left">Game and VR </div>
          <div className="w-full text-left">Development</div>
        </h1>
      </div>
    </SectionLayout>
  );
};

export const GameHeroSecondPage: FC = () => {
  return (
    <SectionLayout className=" flex flex-col relative ">
      <div className="flex-1 mx-auto w-full flex flex-col lg:flex-row h-full ">
        <video
          src={
            "https://video.wixstatic.com/video/c53520_3dad9660a5394387a12aa09760230180/1080p/mp4/file.mp4"
          }
          className="w-full h-full object-cover "
          autoPlay={true}
          loop={true}
          muted
        />
      </div>
    </SectionLayout>
  );
};
