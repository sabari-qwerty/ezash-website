"use client";
import { FC } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { ModelingHeroPage } from "./modelingHeroPage";
import { ThreedModeling } from "./ThreedModeling";
import { Sculpting } from "./Sculpting";
import { TeacherPainting } from "./TeacherPainting";

export const ModelingPage: FC = () => {
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
          <ModelingHeroPage />
        </SwiperSlide>
        <SwiperSlide>
          <ThreedModeling />
        </SwiperSlide>
        <SwiperSlide>
          <Sculpting />
        </SwiperSlide>
        <SwiperSlide>
          <TeacherPainting />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
