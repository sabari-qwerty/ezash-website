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
  "/brochure/BR12.png",
  "/brochure/BR2.png",
  "/brochure/br1.png",
  "/brochure/a34826_31ddc73dcbb743f996d92f7b71d0879d_mv2_1_removebg_preview.png",
  "/brochure/Screenshot_2023_11_14_at_13_32_18_a34826_42bd371cc27e41dfb981df62b0aad3fe.png",
];

export const BrochureSlider: FC = () => {
  const slidNumber = [1, 2, 3, 4, 5];

  return (
    <SectionLayout className=" w-full relative     lg:flex flex-col bg-[#2e2f34] ">
      <div className=" w-full h-full ">
        <SwiperSlide_
          className="w-full h-full"
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((data, key) => (
            <SwiperSlide
              key={key}
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
                      className="w-full h-full "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlide_>
      </div>
      <SliderHeading heading="Brochure Designs" invertColor />
    </SectionLayout>
  );
};
