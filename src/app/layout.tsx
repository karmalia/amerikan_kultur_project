import { Zen_Maru_Gothic } from "next/font/google";
import { ThemeProvider } from "@/components/core/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";

const zen = Zen_Maru_Gothic({ weight: "500", subsets: ["latin"] });

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
      <body className={zen.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
