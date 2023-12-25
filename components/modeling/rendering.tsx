import { FC } from "react";
import { HeadingWithBorder } from "../headingWithBorder";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SectionLayout } from "../sectionLayout";

const data = [
  {
    type: "viedo",
    src: "https://video.wixstatic.com/video/c53520_dab3ea7e05a84cd39539143de2a94214/1080p/mp4/file.mp4",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/c53520_bb11c8e33ec7436e8190f818ae61e798~mv2.png/v1/fill/w_1920,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c53520_bb11c8e33ec7436e8190f818ae61e798~mv2.png",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/c53520_fc4f2d8c728a4213b561f4e47df97fdf~mv2.png/v1/fill/w_1920,h_872,al_c,q_90,enc_auto/c53520_fc4f2d8c728a4213b561f4e47df97fdf~mv2.png",
  },
  {
    type: "viedo",
    src: "https://video.wixstatic.com/video/c53520_2e940e22127149278c33a68f2865ac0b/1080p/mp4/file.mp4",
  },
];

export const RenderingPage: FC = () => {
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
                  heading="Rendering"
                  headingClass="text-6xl"
                  className="space-y-8"
                />
              </div>
            </SwiperSlide>
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
      </SectionLayout>
    </>
  );
};
