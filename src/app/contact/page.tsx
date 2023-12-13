import React from "react";
import { SectionLayout } from "../../../components/sectionLayout";
import { Contactfrom } from "../../../components/ContactFrom";

const page = () => {
  return (
    <SectionLayout className="flex flex-col space-x-4   pt-10 lg:pt-0 w-[90%] mx-auto">
      <div className="mx-auto w-4/5 flex flex-col lg:flex-row h-full ">
        <div className="w-1/2 h-full flex flex-col space-y-12 justify-center items-start">
          <h1 className="lg:text-6xl text-4xl font-bold text-white">
            Contact Me
          </h1>
          <p className="lg:text-xl text-lg font-medium text-white">
            {" "}
            Let's Work Together
          </p>
          <p className="lg:text-lg text-base text-white">
            If you'd like to discuss a project or ask me any questions, feel
            <br />
            free to contact me through the following channels:
          </p>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center ">
          <Contactfrom />
        </div>
      </div>
    </SectionLayout>
  );
};

export default page;
