import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { SectionNavBar } from "../SectionNavBar";

export const AnimationsHeroPage: FC = () => {
  return (
    <SectionLayout className="flex flex-col">
      <SectionNavBar />
      <div className="flex-1 w-[60%] mx-auto  h-full flex flex-col justify-center items-start ">
        <h1 className="lg:text-6xl text-4xl font-bold text-white flex flex-col space-y-8 w-full ">
          <div className="w-full  text-left">Viedo editing &</div>
          <div className="w-full text-left">2D Animations</div>
        </h1>
      </div>
    </SectionLayout>
  );
};
