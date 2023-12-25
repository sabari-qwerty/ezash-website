"use";
import { FC, ReactNode } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface prop {
  children?: ReactNode;
  direction?: "vertical" | "horizontal";
}

export const Scroll: FC<prop> = ({ children, direction = "vertical" }) => {
  return (
    <>
      <Swiper
        direction={direction}
        slidesPerView={1}
        mousewheel={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper "
      >
        {children}
      </Swiper>
    </>
  );
};
