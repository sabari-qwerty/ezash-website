import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HeadingWithBorder } from "../headingWithBorder";
import Image from "next/image";

export const TeacherPainting: FC = () => {
  return (
    <SectionLayout className="w-full relative flex flex-col ">
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
                heading=" Texture Painting  "
                headingClass="text-6xl"
                className="space-y-8"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              background: "#34353A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" text-white relative "
          >
            <Image
              src={"/teacherpainting/1.jpg"}
              className="w-full h-full absolute top-0 "
              width={800}
              height={800}
              alt="img"
            />
            <div className="z-50 w-1/2 h-full flex flex-col "></div>
            <div className="z-50 w-1/2 h-full "></div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              background: "#34353A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" text-white"
          >
            <div className="w-full h-full bg-black flex ">
              <div className="w-1/2 h-full flex justify-center items-center ">
                <video
                  src={
                    "https://video.wixstatic.com/video/c53520_98bbbecd06ad4e1a8e73c969b73cfefc/720p/mp4/file.mp4"
                  }
                  className="w-1/2 h-1/2 object-cover border-2 "
                  autoPlay={true}
                  loop={true}
                  muted
                />
              </div>
              <div className="w-1/2 h-full flex justify-center items-center  group">
                <div className="h-[80%] inline-block group-hover:hidden">
                  <img
                    src={"/teacherpainting/group1/2.png"}
                    alt="img"
                    className="w-full h-full object-fill  "
                  />
                </div>
                <div className="h-[80%]  hidden group-hover:inline-block">
                  <img
                    src={"/teacherpainting/group1/1.png"}
                    alt="img"
                    className="w-full h-full object-fill "
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </SectionLayout>
  );
};
