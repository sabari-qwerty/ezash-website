import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { SliderHeading } from "../SliderHeading";
import Image from "next/image";
const data = [
  "https://static.wixstatic.com/media/a34826_d1d39eeb2bd641bbb166ed9505ed60b1~mv2.png/v1/fill/w_1093,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_d1d39eeb2bd641bbb166ed9505ed60b1~mv2.png",
  "https://static.wixstatic.com/media/a34826_86a545cb07764fdcb5b0636213e1203e~mv2.png/v1/fill/w_547,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_86a545cb07764fdcb5b0636213e1203e~mv2.png",
  "https://static.wixstatic.com/media/a34826_7c2c215fb57244448fa560de7e751b89~mv2.png/v1/fill/w_1459,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_7c2c215fb57244448fa560de7e751b89~mv2.png",
  "https://static.wixstatic.com/media/a34826_6751417e0ecb4abaa7aa351f0c3d2a8a~mv2.png/v1/fill/w_820,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_6751417e0ecb4abaa7aa351f0c3d2a8a~mv2.png",
  "https://static.wixstatic.com/media/a34826_43882202974146a6b9c99fe7657b9cfe~mv2.png/v1/fill/w_1458,h_820,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a34826_43882202974146a6b9c99fe7657b9cfe~mv2.png",
];

export const ListingImages: FC = () => {
  return (
    <>
      <SectionLayout className=" w-full relative    flex flex-col ">
        <div className=" w-full h-full    ">
          <Swiper
            className="w-full h-full pt-20"
            navigation={true}
            modules={[Navigation]}
          >
            {data.map((data, key) => (
              <SwiperSlide
                key={key}
                style={{
                  background: "#34353A",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="w-full h-full flex justify-center items-center ">
                  <div className="w-full h-full  flex justify-center items-center gap-5">
                    <div className="w-4/5 h-4/5">
                      <Image
                        alt="img"
                        src={data}
                        width={800}
                        height={800}
                        className="w-full h-full contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <SliderHeading heading="Listing Images" className="bg-[#000]" />
      </SectionLayout>
    </>
  );
};
