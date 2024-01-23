import { FC } from "react";
import { SectionLayout } from "../sectionLayout";
import Image from "next/image";
import Link from "next/link";

export const ValorunSlide: FC = () => {
  return (
    <SectionLayout>
      <div className="w-full h-full  lg:grid grid-cols-2 bg-[#010101]">
        <div className="w-full h-full  flex justify-center items-center">
          <div className="w-4/5 h-4/5  flex justify-center overflow-hidden">
            <video
              src="https://video.wixstatic.com/video/c53520_aa5f165c8cf842049fe987c4f7fadf26/720p/mp4/file.mp4"
              muted
              loop
              className="w-2/5 contain"
              autoPlay
            />
          </div>
        </div>
        <div className="w-full h-full  flex justify-start items-center">
          <div className="w-4/5 h-4/5 flex flex-col items-center justify-center space-y-8 ">
            <div className="w-full">
              <div className="  text-5xl text-left text-white font-bold">
                Velorun
              </div>
            </div>
            <p className="text-left text-xl text-white">
              Velorun is the name of my first game for the mobile platform,
              which I created solely for testing purposes. I recreated the
              Chrome T-Rex game.in 3D, with very easy controls and a simple UI
              design, and I also published the game on playstore . You can also
              download and play on your Android devices from the Play Store.
            </p>
            <p className="text-left text-xl text-white w-full">
              YOU CAN DOWNLOAD AND PLAY THIS GAME WITH BELOW LINK
            </p>
            <Link href={"/playstore"}>
              <img
                src={
                  "https://static.wixstatic.com/media/c53520_578579f7b64e4b84aa35ab24f9d90299~mv2.png/v1/fill/w_220,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5a902dbf7f96951c82922875.png"
                }
                alt="img"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
// <SectionLayout className="">
//   <div className="w-full h-full grid grid-cols-2 gap-16">
//     <div className="w-full h-full  flex justify-center items-center ">
//       <div className="w-3/5 h-4/5 ">
//         <video
//           src="https://video.wixstatic.com/video/c53520_aa5f165c8cf842049fe987c4f7fadf26/720p/mp4/file.mp4"
//           muted
//           loop
//           className="w-full h-4/5 contain"
//           autoPlay
//         />
//       </div>
//     </div>
//     <div className="w-full h-full bg-black flex justify-center items-center">
//       <div className="w-full h-full  bg-white flex justify-center items-center">
//         a
//       </div>
//     </div>
//   </div>
// </SectionLayout>
