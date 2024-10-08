import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Clouds from "./components/clouds";

import LeftBar from "@/app/components/leftbar";
import { ContextProvider } from "./context/store";
import AnimatedColors from "./components/animatedColors";
import Stars from "./components/stars";
import { ShootingStar } from "./components/fallingStar";

const inter = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bartu | Personal Portfolio",
  description: "Bartu Cakir Portfolio",
  icons: {
    icon: ["/favicon.ico"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ContextProvider>
          <Clouds />
          <Stars />
          <ShootingStar />
          <LeftBar />
          {children}
          <AnimatedColors />
        </ContextProvider>
      </body>
    </html>
  );
}
