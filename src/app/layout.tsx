import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LeftBar from "@/app/components/leftbar";
import { ContextProvider } from "./context/store";

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
        <ContextProvider>
          <LeftBar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
