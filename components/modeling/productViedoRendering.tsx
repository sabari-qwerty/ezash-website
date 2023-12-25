import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { HeadingWithBorder } from "../headingWithBorder";

export const ProductViedoRendering: FC = () => {
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
                  heading="Product Viedo Rendering"
                  headingClass="text-6xl"
                  className="space-y-8"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-full">
                <video
                  src={
                    "https://video.wixstatic.com/video/c53520_4f656aa5b33a421d9ce686ad74fc74dc/1080p/mp4/file.mp4"
                  }
                  className="w-full h-full object-cover opacity-80"
                  autoPlay={true}
                  loop={true}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </SectionLayout>
    </>
  );
};
