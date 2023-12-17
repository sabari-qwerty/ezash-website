"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { SectionLayout } from "../sectionLayout";

export const GraohicMainPage: FC = () => {
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
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SectionLayout className="w-full h-[100dvh] flex justify-center items-center">
            <h1 className="lg:text-6xl text-4xl font-bold text-white">
              Graphics and UI/UX Designs
            </h1>
          </SectionLayout>
        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
