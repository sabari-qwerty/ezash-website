"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { GameHeroPage, GameHeroSecondPage } from "./HeroPage";
import { ValorunSlide } from "./valorun";
import { Moonsine } from "./moonsine";
import { SectionLayout } from "../sectionLayout";
import { Discord, Google, Instagram, Telegram, Whatsapp } from "@/assets";
import cn from "../../utility/css/cn";
import { Footer } from "../Footer";

const Contact = [
  { icon: <Whatsapp />, link: "", label: "+91 90800 78315" },
  { icon: <Google />, link: "", label: "ezash00@gmail.com" },
  { icon: <Telegram />, link: "", label: "+91 90800 78315" },
  { icon: <Instagram />, link: "", label: "ezash_" },
  { icon: false, link: "", label: "Contact" },
  { icon: <Discord />, link: "", label: "ezash#0632" },
];
export const GamePage: FC = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <GameHeroPage />
        </SwiperSlide>
        <SwiperSlide>
          <GameHeroSecondPage />
        </SwiperSlide>
        <SwiperSlide>
          <ValorunSlide />
        </SwiperSlide>
        <SwiperSlide>
          <Moonsine />
        </SwiperSlide>
        <SwiperSlide>
          <video
            src={
              "https://video.wixstatic.com/video/c53520_d0a68ce2ef2c4028a1ce7a9638b67ff2/1080p/mp4/file.mp4"
            }
            className="w-full h-full object-cover "
            autoPlay={true}
            loop={true}
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout
            className="w-full h-full flex
           justify-center items-center "
          >
            <Footer />
          </SectionLayout>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
