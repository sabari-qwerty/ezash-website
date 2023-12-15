import React from "react";
import { SectionLayout } from "../../../components/sectionLayout";
import { GraohicMainPage } from "../../../components/graphic";

const page = () => {
  return (
    <>
      <SectionLayout className="w-full h-[100dvh] flex justify-center items-center">
        <h1 className="lg:text-6xl text-4xl font-bold text-white">
          3D Modeling and Animation
        </h1>
      </SectionLayout>
      <GraohicMainPage />
    </>
  );
};

export default page;
