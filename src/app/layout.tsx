import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Ezash poortfolio",
  description: "here my worke",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="app" className="hidden lg:inline-block">
          {children}
        </div>
        <div
          id="app"
          className=" flex lg:hidden   w-full h-full  items-center justify-center bg-white"
        >
          <div className="w-[90%] h-[90%] flex justify-center items-center">
            <Image
              src={"/web-mobile.png"}
              width={360}
              height={360}
              alt="test"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
