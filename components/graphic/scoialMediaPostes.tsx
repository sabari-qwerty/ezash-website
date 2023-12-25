"use client";
import { FC, useEffect } from "react";
import Swiper from "swiper";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import { SectionLayout } from "../sectionLayout";
import { HeadingWithBorder } from "../headingWithBorder";
import { Arow } from "@/assets";
import Image from "next/image";
import { SliderHeading } from "../SliderHeading";
import { Navigation } from "swiper/modules";

const data = [
  "/social/social 1.png",
  "/social/social 2.png",
  "/social/social 3.png",
  "/social/social 4.png",
];

export const ScoialMediaPostes: FC = () => {
  return (
    <SectionLayout className=" w-full relative     flex flex-col bg-slate-600 ">
      <div className=" w-full h-full ">
        <SwiperSlide_
          className="w-full h-full  bg-black "
          navigation={true}
          modules={[Navigation]}
        >
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlide_>
      </div>
      <SliderHeading heading="Social Media Posts" />
    </SectionLayout>
  );
};
