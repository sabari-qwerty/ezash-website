"use client";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "./style.css";
import "swiper/css";
import "swiper/css/pagination";

import { SectionLayout } from "../sectionLayout";

import { GraphicDesineHeroPage } from "./GraphicDesineHeroPage";
import { LogoDesine } from "./LogoDesine";
import { BrochureSlider } from "./Brochure";
import { ScoialMediaPostes } from "./scoialMediaPostes";
import { PackageDesignSipwer } from "./packagedesign";
import { CardDesignSipwer } from "./cardDesine";
import { UiUxDesignSipwer } from "./uiux";
import { IllustrationDesign } from "./illustration";
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
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <GraphicDesineHeroPage />
        </SwiperSlide>

        <SwiperSlide>
          <LogoDesine />
        </SwiperSlide>
        <SwiperSlide>
          <BrochureSlider />
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout>
            <ScoialMediaPostes />
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout>
            <PackageDesignSipwer />
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout>
            <CardDesignSipwer />
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout>
            <UiUxDesignSipwer />
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout>
            <IllustrationDesign />
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
