"use client";
import { FC } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { ModelingHeroPage } from "./modelingHeroPage";
import { ThreedModeling } from "./ThreedModeling";
import { Sculpting } from "./Sculpting";
import { TeacherPainting } from "./TeacherPainting";
import { RenderingPage } from "./rendering";
import { ProductViedoRendering } from "./productViedoRendering";
import { Discord, Google, Instagram, Telegram, Whatsapp } from "@/assets";
import { SectionLayout } from "../sectionLayout";
import cn from "../../utility/css/cn";

import "swiper/css";
import "swiper/css/navigation";
import { Footer } from "../Footer";
import { ListingImages } from "./ListingImages";
import { ProductRenderImages } from "./ProductRenderImages";

const Contact = [
  { icon: <Whatsapp />, link: "", label: "+91 90800 78315" },
  { icon: <Google />, link: "", label: "ezash00@gmail.com" },
  { icon: <Telegram />, link: "", label: "+91 90800 78315" },
  { icon: <Instagram />, link: "", label: "ezash_" },
  { icon: false, link: "", label: "Contact" },
  { icon: <Discord />, link: "", label: "ezash#0632" },
];
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
        modules={[Mousewheel]}
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
        <SwiperSlide>
          <RenderingPage />
        </SwiperSlide>
        <SwiperSlide>
          <ProductViedoRendering />
        </SwiperSlide>
        <SwiperSlide>
          <ListingImages />
        </SwiperSlide>
        <SwiperSlide>
          <ProductRenderImages />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
