"use client";
import { Autom } from "@/assets";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { link } from "fs";
import Link from "next/link";
import { FC } from "react";

const data = [
  {
    text: "Graphics & UI/UX Designs",
    className: "glow:hue-rotate-30 glow:saturate-200",
    link: "/graphic",
  },
  {
    text: "3D Modeling & Animation",
    className: "glow:hue-rotate-90 glow:saturate-200",
    link: "/modeling",
  },
  {
    text: "Video editing & 2D animations",
    className: "glow:-hue-rotate-30 glow:saturate-100 ",
    link: "/animations",
  },
  {
    text: "Game & VR Development",
    className: "glow:-hue-rotate-90 glow:saturate-150",
    link: "/game",
  },
];

export const Portfolio: FC = () => {
  return (
    <section className="py-16  bg-[#34353A] ">
      <div className="mx-auto w-[90%] flex justify-center items-center flex-col space-y-8">
        <h2 className="text-white font-extrabold text-4xl">Portfolio </h2>
        <p className="text-center font-light text-white text-lg">
          I'm a paragraph. Click here to add your <br /> own text and edit me.
          It's easy.
        </p>
        <div className="grid grid-cols-4 gap-5">
          {data.map((data, key) => (
            <GlowCapture key={key}>
              <Glow>
                <div
                  className={
                    "min-h-[500px] min-w-[320px]  bg-transparent    bg-[#2E2F34] glow:bg-red-700/20 glow:border-red-700 border rounded-xl text-white flex  flex-col space-y-8 border-white/10" +
                    data.className
                  }
                >
                  <div className="flex justify-center items-center">
                    <Autom className="text-9xl glow:text-glow/50" />
                  </div>
                  <span className=" glow:text-glow/50 text-white text-xl  text-center">
                    {data.text}
                  </span>
                  <Link
                    href={data.link}
                    className=" glow:bg-[#FC1D53] hue-rotate-60 glow:border-green-300/80 glow:text-slate-800 h-10 w-4/5 mx-auto bg-black flex justify-center items-center "
                  >
                    View More
                  </Link>
                </div>
              </Glow>
            </GlowCapture>
          ))}
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
