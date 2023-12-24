import Image from "next/image";
import { CommanLayout } from "../../components/CommanLayout";
import { SectionLayout } from "../../components/sectionLayout";
import { HeroPage } from "../../components/home/HeroPage";
import { Portfolio } from "../../components/home/Portfolio";
import { HomePageSwiper } from "../../components/home";
import { GraohicMainPage } from "../../components/graphic";

export default function Home() {
  return (
    // <GraohicMainPage />
    <HomePageSwiper />
    // <div>
    //   <HeroPage />
    //   <Portfolio />
    // </div>
  );
}
