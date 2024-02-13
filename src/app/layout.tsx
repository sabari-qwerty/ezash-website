import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Ezash portfolio",
  description: "Here My Work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
