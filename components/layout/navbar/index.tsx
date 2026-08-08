"use client";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Logo from "@/components/shared/logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Logo />

        <DesktopNav />

        <MobileNav />
      </div>
    </header>
  );
}