import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { SectionNavBar } from "../SectionNavBar";

export const GameHeroPage: FC = () => {
  return (
    <SectionLayout className=" flex flex-col ">
      <div className="secoundery-coloer w-full h-fit z-50">
        <SectionNavBar className=" w-full relative" />
      </div>

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
