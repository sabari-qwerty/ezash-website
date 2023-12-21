"use client";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { SectionLayout } from "../sectionLayout";
import { SectionNavBar } from "../SectionNavBar";
import { HeadingWithBorder } from "../headingWithBorder";
import { GraphicDesineHeroPage } from "./GraphicDesineHeroPage";
import { LogoDesine } from "./LogoDesine";

export const GraohicMainPage: FC = () => {
  const [showPop, setShowPop] = useState(false);
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
          <GraphicDesineHeroPage />
        </SwiperSlide>

        <SwiperSlide>
          <LogoDesine />
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout></SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout></SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout></SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout></SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout></SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout></SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout></SectionLayout>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
