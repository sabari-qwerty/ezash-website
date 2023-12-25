import type { Metadata } from "next";
import "./globals.css";
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
      <body>{children}</body>
    </html>
  );
}
