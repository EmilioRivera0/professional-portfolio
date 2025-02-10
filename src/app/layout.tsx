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
      <body className="mb-44 space-y-8 md:space-y-10">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
