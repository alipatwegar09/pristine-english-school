import "./globals.css";

import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import TopBar from "@/components/layout/topbar";
import Footer from "@/components/layout/Footer";

import { schoolData } from "@/data/school";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: schoolData.name,
    template: `%s | ${schoolData.name}`,
  },

  description: schoolData.mission,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <body className={`${jakarta.variable} antialiased`}>
        <TopBar />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}