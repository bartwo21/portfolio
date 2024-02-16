import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LeftBar from "@/components/leftbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bartwofolio",
  description: "Bartu Cakir Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeftBar />
        {children}
      </body>
    </html>
  );
}
