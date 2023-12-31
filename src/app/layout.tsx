import { Zen_Maru_Gothic, Akaya_Telivigala, Jost } from "next/font/google";
import { ThemeProvider } from "@/components/core/providers/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/core/layout-components/navbar/navbar";

const zen = Zen_Maru_Gothic({ weight: "500", subsets: ["latin-ext"] });
const akaya = Akaya_Telivigala({ weight: "400", subsets: ["latin-ext"] });
const jost = Jost({ weight: "400", subsets: ["latin-ext"] });

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
      <body className={`${jost.className} antialiased`}>
        <Navbar />
        {children}
        {/* <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
        </ThemeProvider> */}
      </body>
    </html>
  );
}
