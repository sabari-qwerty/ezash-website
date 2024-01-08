import Image from "next/image";
import { CommanLayout } from "../../components/CommanLayout";
import { SectionLayout } from "../../components/sectionLayout";
import { HeroPage } from "../../components/home/HeroPage";
import { Portfolio } from "../../components/home/Portfolio";
import { HomePageSwiper } from "../../components/home";
import { GraohicMainPage } from "../../components/graphic";

export default function Home() {
  return (
    <>
      <div className="w-full h-full hidden lg:inline-block">
        <HomePageSwiper className="" />
      </div>
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex justify-center items-center">
          <Image src={"/web-mobile.png"} width={320} height={320} alt="img" />
        </div>
      </div>
    </>
  );
}
