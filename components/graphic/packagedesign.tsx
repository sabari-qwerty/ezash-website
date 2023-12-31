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
//   "/package/1.png",
//   "/package/2.jpg",
//   "/package/3.jpg",
//   "/package/4.png",
// ];

const data = [
  {
    src: "/package/1.png",
    view: false,
  },
  {
    src: "/package/2.jpg",
    view: true,
  },
  {
    src: "/package/3.jpg",
    view: true,
  },
  {
    src: "/package/4.png",
    view: false,
  },
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
        <SwiperSlide_
          className="w-full h-full "
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
                <div className="w-full h-full  flex justify-center items-center gap-5 ">
                  <div
                    className={cn(
                      `w-4/5 h-4/5   ${data.view && "w-full h-full"}`
                    )}
                  >
                    <Image
                      alt="img"
                      src={data.src}
                      width={800}
                      height={800}
                      className={`w-full h-full ${!data.view && "contain"} `}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlide_>
      </div>
      <SliderHeading heading="Package Design" invertColor />
    </SectionLayout>
  );
};
