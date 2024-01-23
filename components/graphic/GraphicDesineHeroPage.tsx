import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { SectionLayout } from "../sectionLayout";
import { SectionNavBar } from "../SectionNavBar";

export const GraphicDesineHeroPage: FC = () => {
  return (
    <SectionLayout className=" lg:flex flex-col  bg-[#010101]">
      <SectionNavBar />
      <div className="flex-1 w-[60%] mx-auto  h-full flex flex-col justify-center items-start ">
        <h1 className="lg:text-6xl text-4xl font-bold text-white flex flex-col space-y-8 w-full ">
          <div className="w-full  text-left">Graphics and UI&#47;UX</div>
          <div className="w-full text-left">Designs</div>
        </h1>
      </div>
    </SectionLayout>
  );
};
