import { FC } from "react";
import cn from "../utility/css/cn";

interface prop {
  className?: string;
  heading?: string;
  headingClass?: string;
}

export const HeadingWithBorder: FC<prop> = ({
  className,
  heading,
  headingClass,
}) => {
  return (
    <div
      className={cn(`w-fit lg:py-16 py-4 flex flex-col space-y-4 ${className}`)}
    >
      <h2 className={`text-3xl font-bold text-white ${headingClass}`}>
        {heading}
      </h2>
      <div className="border-b-8 border-[#294E8F] w-1/4 rounded"></div>
    </div>
  );
};
