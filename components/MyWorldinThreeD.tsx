import { FC } from "react";
import { SectionLayout } from "./sectionLayout";

export const MyWorldinThreeD: FC = () => {
  return (
    <SectionLayout className="w-full h-full  lg:grid grid-cols-2 gap-28    ">
      <div className="w-full h-full  flex justify-end items-center">
        <div className="w-3/5 h-3/5">
          <img src="https://static.wixstatic.com/media/f88658_63c1a990700e4a718aced07a8faa4e56~mv2.png/v1/fill/w_389,h_389,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f88658_63c1a990700e4a718aced07a8faa4e56~mv2.png" />
        </div>
      </div>
      <div className="w-full h-full  flex justify-start items-center ">
        <div className="w-3/5 h-3/5 flex flex-col space-y-8">
          <h2 className="flex flex-col space-y-3 justify-start items-start w-full">
            <span className="text-white font-bold text-2xl">
              VIEW MY WORKS IN
            </span>
            <span className="text-[#FFA600] font-bold text-5xl">3D WORLD </span>
          </h2>
          <p className="text-white text-start text-xl leading-loose">
            Now you can view my designs in a 3D world and explore them like a
            <span className="font-semibold">video game</span>.{" "}
            <span className="font-semibold">No VR devices are needed</span>; you
            can simply view them in a browser with a stable internet connection
          </p>
          <p className="text-start text-white">
            Click the explore button to{" "}
            <span className="text-[#FFA600] font-bold ">
              {" "}
              enhance your experience.{" "}
            </span>
          </p>
          <div className="w-full h-full  flex justify-start pt-10">
            <button
              className="custom-btn btn-15   "
              style={{
                width: "200px",
                height: "50px",
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
