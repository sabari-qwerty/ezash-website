"use client";
import { FC } from "react";
import { SwiperSlide, Swiper as SwiperSlide_ } from "swiper/react";
import { SectionLayout } from "../sectionLayout";
import { HeadingWithBorder } from "../headingWithBorder";
import Image from "next/image";
import { SliderHeading } from "../SliderHeading";
import { Navigation } from "swiper/modules";

const data = [
  "https://static.wixstatic.com/media/a34826_9dd9c51720cc4f70830b1ffab5a2cfa9~mv2.png/v1/fill/w_1920,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_9dd9c51720cc4f70830b1ffab5a2cfa9~mv2.png",
  "https://static.wixstatic.com/media/a34826_a367043cdae849edaeb3c287c14c6f9b~mv2.png/v1/fill/w_1920,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_a367043cdae849edaeb3c287c14c6f9b~mv2.png ",
  "https://static.wixstatic.com/media/a34826_e39eb93af5484224bfaa96d4d1bc771e~mv2.png/v1/fill/w_1920,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_e39eb93af5484224bfaa96d4d1bc771e~mv2.png",
  "https://static.wixstatic.com/media/a34826_76ccd01a330c4bad84e93d548ceeb008~mv2.png/v1/fill/w_1920,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_76ccd01a330c4bad84e93d548ceeb008~mv2.png",
];

export const UiUxDesignSipwer: FC = () => {
  const slidNumber = [1, 2, 3, 4, 5];

  return (
    <SectionLayout className=" w-full relative     flex flex-col bg-[#2e2f34] ">
      <div className=" w-full h-full ">
        <SwiperSlide_
          className="w-full h-full "
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((data, key) => (
            <SwiperSlide
              key={key}
              style={{
                background: "#2E3034",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="w-full h-full flex justify-center items-center ">
                <div className="w-full h-full  flex justify-center items-center gap-5 bg-white ">
                  <div className="w-4/5 h-4/5  ">
                    <Image
                      alt="img"
                      src={data}
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
      <SliderHeading heading="UI UX Design" invertColor />
    </SectionLayout>
  );
};
