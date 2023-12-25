import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { SwiperSlide, Swiper } from "swiper/react";
import { HeadingWithBorder } from "../headingWithBorder";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const data = ["/modeling/1.jpg", "/modeling/2.jpg", "/modeling/3.jpg"];

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
                  heading=" 3D Modeling "
                  headingClass="text-6xl"
                  className="space-y-8"
                />
              </div>
            </SwiperSlide>
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
      </SectionLayout>
    </>
  );
};
