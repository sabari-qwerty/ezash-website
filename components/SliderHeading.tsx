import { FC } from "react";
import { HeadingWithBorder } from "./headingWithBorder";
import cn from "../utility/css/cn";

interface prop {
  heading?: string;
  className?: string;
  invertColor?: boolean;
}

export const SliderHeading: FC<prop> = ({
  heading,
  className,
  invertColor,
}) => {
  return (
    <div
      className={cn(
        `w-full  h-20 absolute top-0 z-50 ${
          invertColor ? "parimary-color" : "secoundery-coloer"
        } ${className}  `
      )}
    >
      <div className="w-[90%] mx-auto h-full flex items-center">
        <HeadingWithBorder
          heading={heading}
          className="lg:py-2 space-y-2"
          headingClass="text-xl"
        />
      </div>
    </div>
  );
};
