"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { SectionLayout } from "../../../components/sectionLayout";
import { Contactfrom } from "../../../components/ContactFrom";
import { SectionNavBar } from "../../../components/SectionNavBar";
import { Footer } from "../../../components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full h-full hidden lg:inline-block">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel]}
          className="mySwiper bg-black w-full h-full"
        >
          <SwiperSlide>
            <SectionLayout className="w-full">
              <div className="flex flex-col space-x-4 justify-center items-center   pt-10 lg:pt-0 w-[90%] mx-atuo"></div>
              <SectionNavBar />

              <div className="mx-auto w-4/5 flex flex-col lg:flex-row h-full ">
                <div className="w-full h-full flex flex-col space-y-12 justify-center items-start">
                  <h1 className="lg:text-6xl text-4xl font-bold text-white">
                    Contact Me
                  </h1>
                  <p className="lg:text-xl text-lg font-medium text-white">
                    Let&apos;s Work Together
                  </p>
                  <p className="lg:text-lg text-base text-left text-white">
                    If you d like to discuss a project or ask me any questions,
                    feel
                    <br />
                    free to contact me through the following channels:
                  </p>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center ">
                  <Contactfrom />
                </div>
              </div>
            </SectionLayout>
          </SwiperSlide>
          <SwiperSlide>
            <Footer />
          </SwiperSlide>
        </Swiper>
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
