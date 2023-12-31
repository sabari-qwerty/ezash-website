"use client";
import React from "react";
import { SectionLayout } from "../../../components/sectionLayout";
import { SectionNavBar } from "../../../components/SectionNavBar";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { About } from "@/assets";
import { Footer } from "../../../components/Footer";
const page = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full h-full">
          <SectionLayout className="flex flex-col space-x-4   pt-10 lg:pt-0 w-full mx-auto">
            <SectionNavBar />

            <div className="mx-auto w-4/5 flex flex-col lg:flex-row-reverse h-full ">
              <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <div className="flex flex-col space-y-8">
                  <h1 className="lg:text-6xl text-4xl font-bold text-white flex flex-col space-y-3 text-left">
                    <span className="w-full ">Ezash</span>
                    <span className="text-lg text-[#8F8B89]">
                      3D Visualizer and Graphics Desiger
                    </span>
                  </h1>
                  <div className="lg:text-xl text-lg text-[#8F8B89] w-full text-left">
                    <p>
                      As a passionate 3D visualization and graphic designer, I
                      bring imagination to life through captivating visuals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full flex flex-col items-center justify-center ">
                <div className="w-[420px]  h-[420px]">
                  <Image
                    src={"/aboutEzash.png"}
                    width={200}
                    height={200}
                    alt="img"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <SectionLayout className="flex flex-col justify-center items-center space-x-4   pt-10 lg:pt-0 w-full mx-auto">
            <div className="w-4/5 mx-auto flex flex-col items-center justify-center space-y-8">
              <h2 className="lg:text-6xl text-4xl font-bold text-white">
                A Bit About Me
              </h2>
              <p className="text-3xl text-white">
                I have an 2 years experience 3d visualizing & graphic design, To
                work in an environment which encourages me to succeed and grow
                professionally where i can utilize my skill and knowledge in an
                organizes the value of hard work and trusts me with
                responsibilities and challenge
              </p>
            </div>
          </SectionLayout>
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
          <SectionLayout className="flex flex-col justify-center items-center space-x-4    w-full mx-auto">
            <About className="text-[500px]" />
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default page;
