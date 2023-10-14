import Navbar from "@/components/navbar/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <body className=''>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
