"use client";
import { FC } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { AnimationsHeroPage } from "./heropage";
import { Twodanimations } from "./twodanimations";
import { ViedoEditing } from "./viedoEditing";
import { Footer } from "../Footer";

export const AnimationsPage: FC = () => {
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
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <AnimationsHeroPage />
        </SwiperSlide>
        <SwiperSlide>
          <Twodanimations />
        </SwiperSlide>
        <SwiperSlide>
          <ViedoEditing />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
