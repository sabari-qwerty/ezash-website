import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import Image from "next/image";
import { SectionNavBar } from "../SectionNavBar";
import { MobileSectionLayout } from "../MobileSectionLayout";
import { MobileNav } from "../MobileNav";

interface prop {
  nextSlide?: () => void;
}

export const HeroPage: FC<prop> = ({ nextSlide }) => {
  return (
    <>
      <SectionLayout className=" flex flex-col  ">
        <SectionNavBar />
        <div className="flex-1 mx-auto w-4/5 flex flex-col lg:flex-row h-full  ">
          <div className="lg:w-1/2 w-full  h-full">
            <div className=" w-full h-full flex flex-col justify-center lg:space-y-6 space-y-3 lg:px-12  ">
              <div className="w-full lg:w-fit flex flex-col space-y-4 justify-start ">
                <h1 className="lg:text-6xl text-4xl font-bold text-white text-start">
                  Ezash
                </h1>
                <div className="border-b-8 border-[#FFA600] w-1/5 rounded"></div>
                <h2 className="lg:text-lg w-full  text-[#DBDCE0]">
                  3D Visualizer and Graphics Designer{" "}
                </h2>
              </div>
              <div className="w-full  flex justify-start">
                <button className="custom-btn btn-15 " onClick={nextSlide}>
                  PORTFOLIO
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2  h-full  flex lg:justify-end justify-center lg:items-end">
            <div className="w-4/5">
              <Image alt="hero" src={"/hero.png"} width={550} height={700} />
            </div>
          </div>
        </div>
      </SectionLayout>
      <MobileSectionLayout className="parimary-color">
        <MobileNav />
        <div className="flex-1  w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-6 pt-20">
            <h1 className="text-4xl font-semibold w-full text-left text-white">
              Ezash
            </h1>
            <h2 className="lg:text-lg w-full  text-[#DBDCE0]">
              3D Visualizer and Graphics Designer{" "}
            </h2>
            <button className="custom-btn btn-15 " onClick={nextSlide}>
              PORTFOLIO
            </button>
          </div>
          <div className="flex-1 w-full h-full flex justify-center items-center">
            <div className="h-3/4">
              <img src="/hero.png" alt="img" />
            </div>
          </div>
        </div>
      </MobileSectionLayout>
    </>
  );
};
