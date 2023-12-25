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
        <SwiperSlide>
          <RenderingPage />
        </SwiperSlide>
        <SwiperSlide>
          <ProductViedoRendering />
        </SwiperSlide>
        <SwiperSlide>
          <SectionLayout
            className="w-full h-full flex
           justify-center items-center "
          >
            <footer
              className={cn(
                `flex flex-col space-y-16 justify-center items-center  py-4 w-full h-full `
              )}
            >
              <div className="flex justify-center text-white items-center text-3xl font-semibold w-full">
                <h2>Ways to Contact me</h2>
              </div>
              <div className="flex flex-col space-y-16 justify-center items-center w-full">
                <div className="flex w-3/5 mx-auto  lg:justify-between  justify-center   flex-col lg:flex-row space-y-6 lg:space-y-0">
                  {Contact.slice(0, 3).map((data, key) => (
                    <a
                      href={data.link}
                      target="_blank"
                      key={key}
                      className=" min-w-[160px] flex rounded-full justify-center items-center space-x-4  bg-[#00000017] py-2 px-4 hover:bg-[#FFA600] text-[#fff] hover:text-gray-700 "
                    >
                      {data.icon && (
                        <span className="text-2xl">{data.icon}</span>
                      )}
                      <span className="text-xl">{data.label}</span>
                    </a>
                  ))}
                </div>
                <div className="flex w-3/5 lg:w-2/5 mx-auto  lg:justify-between  justify-center   flex-col lg:flex-row space-y-6 lg:space-y-0">
                  {Contact.slice(3, 6).map((data, key) => (
                    <a
                      href={data.link}
                      target="_blank"
                      key={key}
                      className="flex  min-w-[160px] rounded-full justify-center items-center space-x-4  bg-[#00000017] py-2 px-4 hover:bg-[#FFA600] text-[#fff] hover:text-gray-700 "
                    >
                      {data.icon && (
                        <span className="text-2xl">{data.icon}</span>
                      )}
                      <span className="text-xl">{data.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </SectionLayout>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
