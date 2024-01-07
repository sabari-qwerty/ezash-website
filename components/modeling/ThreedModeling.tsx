import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { SwiperSlide, Swiper } from "swiper/react";
import { HeadingWithBorder } from "../headingWithBorder";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { SliderHeading } from "../SliderHeading";

const data = [
  "/modeling/1.jpg",
  "/modeling/2.jpg",
  "/modeling/3.jpg",
  "/modeling/MOD1.png",
  "/modeling/MOD2.png",
  "/modeling/MOD5.png",
];

export const ThreedModeling: FC = () => {
  return (
    <>
      <SectionLayout className="w-full relative flex flex-col bg-[#2e2f34]">
        <div className="w-full h-full bg-black">
          <Swiper
            className="w-full h-full mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            {data.map((data, key) => (
              <SwiperSlide key={key}>
                <div className="w-full h-full">
                  <img
                    src={data}
                    alt="img"
                    className="w-full h-full object-cover "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <SliderHeading heading="3D Modeling" />
      </SectionLayout>
    </>
  );
};
