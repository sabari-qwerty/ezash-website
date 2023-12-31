import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HeadingWithBorder } from "../headingWithBorder";
import { SliderHeading } from "../SliderHeading";

const data = [
  {
    type: "viedo",
    src: "https://video.wixstatic.com/video/f88658_fc6e4674a619432ca015dd340df34175/1080p/mp4/file.mp4",
  },
  {
    type: "image",
    src: "/sculpting/SCU1.png",
  },
  {
    type: "image",
    src: "/sculpting/SCU2.png",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/f88658_c7771da7d07944d48f8533ad18a3ef95~mv2.webp",
  },
  {
    type: "image",
    src: "/sculpting/apj.png",
  },
];

export const Sculpting: FC = () => {
  return (
    <>
      <SectionLayout className="w-full relative flex flex-col bg-[#2e2f34]">
        <div className="w-full h-full bg-black">
          <Swiper
            className="w-full h-full mySwiper"
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
          </Swiper>
        </div>
        <SliderHeading heading="Sculpting" />
      </SectionLayout>
    </>
  );
};
