"use client";

import { HeroCard } from "../card/HeroCard";

const data = [
  {
    text: "Graphics &amp UI/UX Designs",
    className: "glow:hue-rotate-30 glow:saturate-200",
    link: "/graphic",
  },
  {
    text: "3D Modeling &amp Animation",
    className: "glow:hue-rotate-90 glow:saturate-200",
    link: "/modeling",
  },
  {
    text: "Video editing &amp 2D animations",
    className: "glow:-hue-rotate-30 glow:saturate-100 ",
    link: "/animations",
  },
  {
    text: "Game &amp VR Development",
    className: "glow:-hue-rotate-90 glow:saturate-150",
    link: "/game",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-16  bg-[#34353A] ">
      <div className="mx-auto w-[90%] flex justify-center items-center flex-col space-y-5">
        <h2 className="text-white font-bold text-4xl">Portfolio </h2>
        <p className="text-center font-light text-white text-lg">
          I&apos;m a paragraph. Click here to add your <br /> own text and edit
          me. It&apos;s easy.
        </p>
        <div className="grid grid-cols-4 gap-5">
          <HeroCard />
          <HeroCard />

          <HeroCard />
          <HeroCard />
        </div>
      </div>
    </section>
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
