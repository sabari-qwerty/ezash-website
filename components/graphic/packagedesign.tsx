"use client";
import { FC, useEffect } from "react";
import Swiper from "swiper";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import { SectionLayout } from "../sectionLayout";
import { HeadingWithBorder } from "../headingWithBorder";
import { Arow } from "@/assets";
import Image from "next/image";

const data = [
  "/package/1.png",
  "/package/2.jpg",
  "/package/3.jpg",
  "/package/4.png",
];

export const PackageDesignSipwer: FC = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Add other Swiper options as needed
    });
  }, []);

  const slidNumber = [1, 2, 3, 4, 5];

  const handleClick = () => {
    // @ts-ignore
    document.querySelectorAll(".swiper")[4].swiper.slideNext();
  };
  return (
    <SectionLayout className=" w-full relative     flex flex-col bg-[#2e2f34] ">
      <div className=" w-full h-full ">
        <SwiperSlide_ className="w-full h-full   ">
          <SwiperSlide
            style={{
              background: "#2E3034",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" text-white"
          >
            <div className="w-3/5 flex items-center  justify-between">
              <HeadingWithBorder
                heading="Package Design"
                headingClass="text-6xl"
                className="space-y-8"
              />
              <button onClick={handleClick}>
                <Arow className="text-7xl text-[#FFA600] swiper-button-next" />
              </button>
            </div>
          </SwiperSlide>
          {data.map((data, key) => (
            <SwiperSlide
              key={data}
              style={{
                background: "#2E3034",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="w-full h-full flex justify-center items-center ">
                <div className="w-full h-full  flex justify-center items-center gap-5">
                  <div className="w-4/5 h-4/5  ">
                    <Image
                      alt="img"
                      src={data}
                      width={800}
                      height={800}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-fit h-4/5 flex  items-center text-white ">
                    <button onClick={handleClick}>
                      <Arow className="text-7xl text-[#FFA600] swiper-button-next" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlide_>
      </div>
    </SectionLayout>
  );
};
