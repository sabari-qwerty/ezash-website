import { FC, useEffect } from "react";
import { SectionLayout } from "../sectionLayout";
import { HeadingWithBorder } from "../headingWithBorder";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import Swiper from "swiper";
import { Arow } from "@/assets";
import Image from "next/image";

export const LogoDesine: FC = () => {
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
    document.querySelectorAll(".swiper")[1].swiper.slideNext();
  };
  // bg-[#2e2f34]
  return (
    <SectionLayout className=" w-full relative    flex flex-col ">
      <div className=" w-full h-full    ">
        <SwiperSlide_ className="w-full h-full   ">
          <SwiperSlide
            style={{
              background: "#34353A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" text-white"
          >
            <div className="w-3/5 flex items-center  justify-between">
              <HeadingWithBorder
                heading=" Logo Designs"
                headingClass="text-6xl"
                className="space-y-8"
              />
              <button onClick={handleClick}>
                <Arow className="text-7xl text-[#FFA600] swiper-button-next" />
              </button>
            </div>
          </SwiperSlide>
          {slidNumber.map((data) => (
            <SwiperSlide
              key={data}
              style={{
                background: "#34353A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="w-full h-full flex justify-center items-center   ">
                <div className="w-3/4 h-3/4 grid grid-cols-2 gap-2">
                  <div className="w-full h-full bg-white">
                    <Image
                      src={`/logo/${data} big.png`}
                      width={400}
                      height={400}
                      alt="img"
                    />
                  </div>
                  <div className="w-full h-full  grid grid-cols-3 gap-2">
                    <div className="w-full h-full  grid grid-rows-2 col-span-2 gap-2">
                      <div className="w-full h-full bg-white">
                        <Image
                          src={`/logo/${data} small 1.png`}
                          width={400}
                          height={400}
                          alt="img"
                        />
                      </div>
                      <div className="w-full h-full bg-white">
                        <Image
                          src={`/logo/${data} small 2.png`}
                          width={400}
                          height={400}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                      <button onClick={handleClick}>
                        <Arow className="text-7xl text-[#FFA600] swiper-button-next" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlide_>
      </div>
    </SectionLayout>
  );
};
