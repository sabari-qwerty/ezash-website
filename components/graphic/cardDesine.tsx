"use client";
import { FC, useEffect } from "react";
import Swiper from "swiper";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import { SectionLayout } from "../sectionLayout";
import { HeadingWithBorder } from "../headingWithBorder";
import { Arow } from "@/assets";
import Image from "next/image";

const data = [
  "/card/graphic/1.jpg",
  "/card/graphic/2.jpg",
  "/card/graphic/3.png",
];

export const CardDesignSipwer: FC = () => {
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
    document.querySelectorAll(".swiper")[5].swiper.slideNext();
  };
  return (
    <SectionLayout className=" w-full relative     flex flex-col bg-[#2e2f34] ">
      <div className=" w-full h-full ">
        <SwiperSlide_ className="w-full h-full   ">
          <SwiperSlide
            style={{
              background: "#34353A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" text-white"
          >
            <div className="w-3/5 flex items-center  justify-between">
              <HeadingWithBorder
                heading="Card Design"
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
              key={key}
              style={{
                background: "#34353A",
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
