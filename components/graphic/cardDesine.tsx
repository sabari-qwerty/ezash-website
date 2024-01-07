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
import cn from "../../utility/css/cn";

// const data = [
//   "/card/graphic/1.jpg",
//   "/card/graphic/2.jpg",
//   "/card/graphic/3.png",
//   "/card/graphic/CD1.png",
//   "/card/graphic/CD 2.png",
// ];

const data = [
  { src: "/card/graphic/1.jpg", view: false, bg: "" },
  { src: "/card/graphic/2.jpg", view: false, bg: "" },
  { src: "/card/graphic/3.png", view: false, bg: "" },
  { src: "/card/graphic/CD1.png", view: true, bg: "#4A4A4A" },
  { src: "/card/graphic/CD 2.png", view: true, bg: "#2F3135" },
];

export const CardDesignSipwer: FC = () => {
  return (
    <SectionLayout className=" w-full relative     lg:flex flex-col bg-[#2e2f34] ">
      <div className=" w-full h-full ">
        <SwiperSlide_
          className="w-full h-full "
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
                  <div
                    className={cn(
                      `w-full h-full ${
                        !data.view && "w-4/5 h-4/5"
                      } object-fill `
                    )}
                    style={{
                      backgroundColor: `${data.bg}`,
                    }}
                  >
                    <Image
                      alt="img"
                      src={data.src}
                      width={800}
                      height={800}
                      className="w-full h-full contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlide_>
      </div>
      <SliderHeading heading="Card Design" />
    </SectionLayout>
  );
};
