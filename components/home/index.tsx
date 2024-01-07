"use client";
import { FC, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { GraphicDesineHeroPage } from "../graphic/GraphicDesineHeroPage";
import { LogoDesine } from "../graphic/LogoDesine";
import { SectionLayout } from "../sectionLayout";
import {
  AZfalgicon,
  Discord,
  Google,
  IDfalgicon,
  InFalgicon,
  Instagram,
  Telegram,
  USFalgicon,
  Whatsapp,
} from "@/assets";
import cn from "../../utility/css/cn";

import "swiper/css";
import "swiper/css/pagination";
import { HeroPage } from "./HeroPage";
import { Portfolio } from "./Portfolio";
import { Mousewheel } from "swiper/modules";
import { MyWorldinThreeD } from "../MyWorldinThreeD";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Footer } from "../Footer";

const Review = [
  {
    icon: <InFalgicon className="text-2xl" />,
    name: "Sivaram",
    companyName: (
      <div>
        Tamilnadu BoxingPromotion <b className="font-semibold">India</b>
      </div>
    ),
    review:
      "A really great work, fast, incredible, even  better that what i was expected, highly Satisfied will continue to work with them in the future",
  },
  {
    icon: <USFalgicon className="text-2xl" />,
    name: "Adam",
    companyName: (
      <div>
        Classic Garage America Classic Garage{" "}
        <b className="font-semibold">America</b>
      </div>
    ),
    review:
      "The quality of the visual presentations, including renders and virtual walkthroughs, exceeded our expectations. greatly aided in understanding the final outcome",
  },
  {
    icon: <AZfalgicon className="text-2xl" />,
    name: "Yasemin",
    companyName: (
      <div>
        Unic-one Toys <b className="font-semibold">Azerbaijan</b>
      </div>
    ),
    review:
      "Throughout the process, communication was clear and timely. I appreciated the prompt responses to queries and the proactive updates on the project's status",
  },
  {
    icon: <IDfalgicon className="text-2xl" />,
    name: "Benoit",
    companyName: (
      <div>
        &amp;D Zones <b className="font-semibold">Indonesia</b>
      </div>
    ),
    review:
      "The visual aesthetics of the virtual world were impressive. The attention to detail in graphics, textures, and lighting contributed to a visually stunning environment.",
  },
];
const Contact = [
  { icon: <Whatsapp />, link: "", label: "+91 90800 78315" },
  { icon: <Google />, link: "", label: "ezash00@gmail.com" },
  { icon: <Telegram />, link: "", label: "+91 90800 78315" },
  { icon: <Instagram />, link: "", label: "ezash_" },
  { icon: false, link: "", label: "Contact" },
  { icon: <Discord />, link: "", label: "ezash#0632" },
];

const data = [
  {
    valueOne: { name: "Graphics	& UI/UX Designs", url: "/graphic" },
    valueTwo: { name: "Portfolio", url: "/#portfolio" },
  },
  {
    valueOne: { name: "3D Modeling & Animation", url: "/modeling" },
    valueTwo: { name: "Home", url: "/" },
  },
  {
    valueOne: { name: "Video editing & 2D animations", url: "/game" },
    valueTwo: { name: "About", url: "/about" },
  },
  {
    valueOne: { name: "Game & VR Development", url: "/game" },
    valueTwo: { name: "contact", url: "/contact" },
  },
];

export const HomePageSwiper: FC = () => {
  const NextSlide = () => {
    // @ts-ignore
    document.querySelector(".swiper").swiper.slideNext();
  };

  useEffect(() => {
    // Access the hash value
    const { hash } = window.location;
    if (hash === "#portfolio") {
      NextSlide();
    }
  }, []);

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
        className="mySwiper "
      >
        <SwiperSlide>
          <HeroPage nextSlide={NextSlide} />
        </SwiperSlide>

        <SwiperSlide>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide>
          <MyWorldinThreeD />
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout className="flex flex-col justify-center items-center space-y-16">
            <div className="font-semibold text-4xl text-white">
              Here what &apos;s my clients says
            </div>
            <div className="grid grid-cols-2 gap-4 gap-y-8 w-[90%] mx-auto ">
              {Review.map((data, key) => (
                <div
                  key={key}
                  className="w-4/5 mx-auto text-white bg-[#34353a] rounded-3xl border px-6 py-8 flex flex-col space-y-3 "
                >
                  <div className="flex space-x-5 items-center   ">
                    <div>{data.icon}</div>
                    <div className="text-left flex flex-col ">
                      <div>{data.name}</div>
                      <div>{data.companyName}</div>
                    </div>
                  </div>
                  <div className="text-left">{data.review}</div>
                </div>
              ))}
            </div>
          </SectionLayout>
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
