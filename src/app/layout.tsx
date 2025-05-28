import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import Image from "next/image";

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
        <header className="py-6 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 bg-blue-100 p-4 rounded-lg shadow-md">
              East West University CGPA Calculator
            </h1>
          </div>
        </header>
        <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="mt-auto py-6 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex gap-[24px] flex-wrap items-center justify-center">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/abrarShakhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                AbrarShakhi
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://portal.ewubd.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Portal
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://ewubd.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to ewubd.edu →
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
