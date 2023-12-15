import React from "react";
import { SectionLayout } from "../../../components/sectionLayout";

const page = () => {
  return (
    <SectionLayout className="flex flex-col space-x-4   pt-10 lg:pt-0 w-[90%] mx-auto">
      <div className="mx-auto w-4/5 flex flex-col lg:flex-row h-full ">
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-8">
            <h1 className="lg:text-6xl text-4xl font-bold text-white">
              About Me
            </h1>
            <div className="lg:text-xl text-lg text-white">
              <p>
                Hi, my name is Ezash and I am a 3D artist and graphic designer
                with over 3 years of experience in the field. I am passionate
                about creating stunning visuals that bring ideas to life.
                Whether it&apos;s a product, a character, or an environment, I
                strive to deliver high-quality work that exceeds expectations. I
                believe that attention to detail and a strong work ethic are
                essential to producing great results. Thank you for visiting my
                portfolio and I hope to have the opportunity to work with you!
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div></div>
        </div>
      </div>
      <div></div>
    </SectionLayout>
  );
};

export default page;
