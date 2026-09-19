import "./globals.css";

import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import TopBar from "@/components/layout/topbar";
import Footer from "@/components/layout/Footer";

import { schoolData } from "@/data/school";
import WhatsAppChat from "@/components/shared/WhatsAppChat";
import SchoolSchema from "@/components/seo/SchoolSchema";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
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
      className={`${nunito.variable} ${fredoka.variable}`}
    >
      <body className="font-[var(--font-nunito)] antialiased">
         <SchoolSchema />
        <TopBar />

        <Navbar />

        <main>{children}</main>

        <Footer />
         <WhatsAppChat />
      </body>
    </html>
  );
}