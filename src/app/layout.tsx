import { Zen_Maru_Gothic } from "next/font/google";
import { ThemeProvider } from "@/components/core/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";

const zen = Zen_Maru_Gothic({ weight: "500", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Amerikan Kültür Merkezi Portalı",
  description: "Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <body className={`${zen.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
