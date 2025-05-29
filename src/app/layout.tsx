import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";

import "./globals.css";

const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EWU/NSU CGPA Calculatpr",
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
        className={`${victorMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header>
          <div>
            <h1>East West University CGPA Calculator</h1>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
