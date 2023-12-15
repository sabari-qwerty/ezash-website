import React from "react";
import { GraohicMainPage } from "../../../components/graphic";
import { SectionLayout } from "../../../components/sectionLayout";

const page = () => {
  return (
    <div>
      <SectionLayout className="w-full h-[100dvh] flex justify-center items-center">
        <h1 className="lg:text-6xl text-4xl font-bold text-white">
          Graphics and UI/UX Designs
        </h1>
      </SectionLayout>
      <GraohicMainPage />
    </div>
  );
};

export default page;
