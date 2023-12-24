import type { Metadata } from "next";
import "./globals.css";
import { CommanLayout } from "../../components/CommanLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
