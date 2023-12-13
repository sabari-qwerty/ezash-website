import Image from "next/image";
import { CommanLayout } from "../../components/CommanLayout";
import { SectionLayout } from "../../components/sectionLayout";
import { HeroPage } from "../../components/home/HeroPage";
import { Portfolio } from "../../components/home/Portfolio";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Portfolio />
    </div>
  );
}
