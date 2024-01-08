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
        <div id="app" className="desktop-only">
          {children}
        </div>
        <div
          id="app"
          className="mobile-only   w-full h-full  items-center justify-center"
        >
          <div className="w-full h-full flex justify-center items-center">
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
