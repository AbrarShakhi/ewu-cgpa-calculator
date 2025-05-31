import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import FooterToggle from "./components/FooterToggle";

import "./globals.css";
import "./style.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EWU/NSU CGPA Calculator",
  description: "An unofficial site to calculate East West University CGPA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <header>
          <div>
            <Link className="header-link" href="/">
              East West University CGPA Calculator
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <FooterToggle />
      </body>
    </html>
  );
}
