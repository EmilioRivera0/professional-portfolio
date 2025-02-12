import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/Header/Header";

{/* icon.svg source https://icones.js.org/collection/fa */}

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mb-60">
        {/* Background */}
        <div className="fixed -z-50 top-0 h-screen w-screen main-bg"></div>
        {/* Content */}
        <Header />
        <main className="mt-20 md:mt-24">{children}</main>
      </body>
    </html>
  );
}
