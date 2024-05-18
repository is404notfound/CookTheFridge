'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/query"

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
              <ApolloProvider client={client}>
                {children}
              </ApolloProvider>
          </NextUIProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
