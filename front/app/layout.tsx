'use client'

import { Inter} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import Header from "@/components/Header";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot> 
          <NextUIProvider>
            <Header />
            {children}
          </NextUIProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
