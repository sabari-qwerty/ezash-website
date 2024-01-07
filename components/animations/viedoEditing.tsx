import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SliderHeading } from "../SliderHeading";

const data = [
  {
    type: "viedo",
    src: "https://video.wixstatic.com/video/f88658_cdb724984b66424191571a10c847f1ee/1080p/mp4/file.mp4",
  },
];

export const ViedoEditing: FC = () => {
  return (
    <SectionLayout className=" w-full relative    lg:flex flex-col   ">
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
      <SliderHeading heading="Viedo Editing" invertColor />
    </SectionLayout>
  );
};
