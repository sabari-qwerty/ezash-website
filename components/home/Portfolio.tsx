"use client";

import { GameIcon, GrapichIcon, ThreedmodelingIcon, ViedoIcon } from "@/assets";
import { HeroCard } from "../card/HeroCard";
import { SectionLayout } from "../sectionLayout";

const data = [
  {
    backgroundImage: <GrapichIcon className="text-8xl" />,
    heading: (
      <>
        Graphics & <br /> UI/UX Designs
      </>
    ),
    url: "/graphic",
  },
  {
    backgroundImage: <ThreedmodelingIcon className="text-8xl" />,
    heading: (
      <>
        3D Modeling & <br /> Animation
      </>
    ),

    url: "/modeling",
  },
  {
    backgroundImage: <GameIcon className="text-8xl" />,
    heading: (
      <>
        Video editing & <br /> 2D animations
      </>
    ),

    url: "/animations",
  },
  {
    backgroundImage: <ViedoIcon className="text-8xl" />,
    heading: (
      <>
        Game & VR <br /> Development
      </>
    ),

    url: "/game",
  },
];

export const Portfolio = () => {
  return (
    <SectionLayout className="py-16  w-full h-full  bg-[#34353A] flex justify-center items-center overflow-auto">
      <div className="mx-auto w-[90%] flex justify-center items-center flex-col space-y-8">
        <h2 className="text-white font-bold text-4xl">Portfolio </h2>

        <div className="grid lg:grid-cols-4  grid-cols-2 overflow-auto  py-4  gap-5">
          {data.map((data, key) => (
            <HeroCard
              key={key}
              backgroundImage={data.backgroundImage}
              heading={data.heading}
              url={data.url}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
{
  /* <div className="w-full grid grid-cols-4"></div>; */
}
{
  /* <GlowCapture>
<Glow>
  <div className="p-4  bg-transparent glow:bg-red-300/20 glow:border-red-300 border rounded-xl">
    <span className="text-black glow:text-glow/50">
      This will glow purple when the mouse is passed over
    </span>
  </div>
</Glow>
</GlowCapture> */
}
