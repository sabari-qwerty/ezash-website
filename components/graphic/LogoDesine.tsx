import { FC, useEffect } from "react";
import { SectionLayout } from "../sectionLayout";
import { HeadingWithBorder } from "../headingWithBorder";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import Swiper from "swiper";
import { Arow } from "@/assets";
import Image from "next/image";
import { SliderHeading } from "../SliderHeading";
import { Navigation } from "swiper/modules";

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

  // bg-[#2e2f34]
  return (
    <SectionLayout className=" w-full relative    flex flex-col ">
      <div className=" w-full h-full    ">
        <SwiperSlide_
          className="w-full h-full "
          navigation={true}
          modules={[Navigation]}
        >
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
              <div className="w-full h-full flex justify-center items-center ">
                <div className="w-full h-full  flex justify-center items-center gap-5">
                  <div className="w-4/5 h-4/5  ">
                    <Image
                      alt="img"
                      src={`/logo/l${data}.png`}
                      width={800}
                      height={800}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlide_>
      </div>
      <SliderHeading heading="Logo Designs" className="bg-[#000]" />
    </SectionLayout>
  );
};
