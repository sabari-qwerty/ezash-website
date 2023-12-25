import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { HeadingWithBorder } from "../headingWithBorder";
import { SliderHeading } from "../SliderHeading";

export const ProductViedoRendering: FC = () => {
  return (
    <>
      <SectionLayout className="w-full relative flex flex-col bg-[#2e2f34] ">
        <div className="w-full h-full bg-black">
          <Swiper
            className="w-full h-full mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="w-full h-full">
                <video
                  src={
                    "https://video.wixstatic.com/video/c53520_4f656aa5b33a421d9ce686ad74fc74dc/1080p/mp4/file.mp4"
                  }
                  className="w-full h-full object-cover "
                  autoPlay={true}
                  loop={true}
                  muted
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <SliderHeading heading="Products Show Reel" />
      </SectionLayout>
    </>
  );
};
