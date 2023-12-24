"use client";

import { HeroCard } from "../card/HeroCard";

const data = [
  {
    backgroundImage: "/card/2db.png",
    heroImage: "/card/2df.png",
    url: "/graphic",
  },
  {
    backgroundImage: "/card/3dB.png",
    heroImage: "/card/3df.png",
    url: "/modeling",
  },
  {
    backgroundImage: "/card/vidb.png",
    heroImage: "/card/vidf.png",
    url: "/game",
  },
  {
    backgroundImage: "/card/vrb.png",
    heroImage: "/card/vrf.png",
    url: "/animations",
  },
];

export const Portfolio = () => {
  return (
    <section className="py-16  w-full h-full  bg-[#34353A] flex justify-center items-center ">
      <div className="mx-auto w-[90%] flex justify-center items-center flex-col space-y-5">
        <h2 className="text-white font-bold text-4xl">Portfolio </h2>
        <p className="text-center font-light text-white text-lg">
          I&apos;m a paragraph. Click here to add your <br /> own text and edit
          me. It&apos;s easy.
        </p>
        <div className="grid grid-cols-4 gap-5">
          {data.map((data, key) => (
            <HeroCard
              key={key}
              backgroundImage={data.backgroundImage}
              heroImage={data.heroImage}
              url={data.url}
            />
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
