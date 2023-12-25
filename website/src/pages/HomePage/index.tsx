import { FC } from "react";
import { Scroll } from "../../components/scroll";
import { SectionLayout } from "../../components/layout/SectionLayout";
import { SwiperSlide } from "swiper/react";

export const HomePage: FC = () => {
  return (
    <Scroll direction="vertical">
      <SwiperSlide>
        <SectionLayout className="bg-black"></SectionLayout>
      </SwiperSlide>
      <SwiperSlide>
        <SectionLayout className="bg-white"></SectionLayout>
      </SwiperSlide>
    </Scroll>
  );
};
