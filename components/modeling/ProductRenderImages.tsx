import { FC } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { SectionLayout } from "../sectionLayout";
import { SliderHeading } from "../SliderHeading";

const data = [
  "https://static.wixstatic.com/media/a34826_38018aeebd814d6a8762d721fc1c0b8d~mv2.png/v1/fill/w_773,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a34826_38018aeebd814d6a8762d721fc1c0b8d~mv2.png",
  "https://static.wixstatic.com/media/a34826_d79d09d49da64f73bfa10cd0e7591e7a~mv2.png/v1/fill/w_773,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a34826_d79d09d49da64f73bfa10cd0e7591e7a~mv2.png",
  "https://static.wixstatic.com/media/a34826_27f406815e20445da212f7b3b3b2fd92~mv2.webp",
  "https://static.wixstatic.com/media/a34826_3fcd0d60d4d84aae8f2d9822dbaf0c76~mv2.png/v1/fill/w_773,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a34826_3fcd0d60d4d84aae8f2d9822dbaf0c76~mv2.png",
  "https://static.wixstatic.com/media/a34826_e3be2aadc2794426bd4afab1bf983851~mv2.png/v1/fill/w_773,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a34826_e3be2aadc2794426bd4afab1bf983851~mv2.png",
];
export const ProductRenderImages: FC = () => {
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
        <SliderHeading heading="Product Render Images" />
      </SectionLayout>
    </>
  );
};
