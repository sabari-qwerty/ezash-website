import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SliderHeading } from "../SliderHeading";

const data = [
  {
    type: "viedo",
    src: "https://video.wixstatic.com/video/a34826_be100e14ce314aa28da7333f78cab966/1080p/mp4/file.mp4",
  },
];

export const Twodanimations: FC = () => {
  return (
    <SectionLayout className=" w-full relative    lg:flex flex-col ">
      <div className=" w-full h-full    ">
        <SwiperSlide_
          className="w-full h-full pt-20"
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((data, key) =>
            data.type === "viedo" ? (
              <SwiperSlide key={key}>
                <div className="w-full h-full">
                  <video
                    src={data.src}
                    className="w-full h-full object-cover "
                    autoPlay={true}
                    loop={true}
                    muted
                  />
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={key}>
                <div className="w-full h-full">
                  <img
                    src={data.src}
                    alt="img"
                    className="w-full h-full object-cover "
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </SwiperSlide_>
      </div>
      <SliderHeading heading="2D Animation" className="bg-[#000]" />
    </SectionLayout>
  );
};
