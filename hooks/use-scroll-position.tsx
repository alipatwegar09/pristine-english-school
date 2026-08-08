"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page has scrolled past `threshold` pixels.
 * Used to trigger the glassmorphism state on the sticky navbar.
 */
export function useScrollPosition(threshold: number = 16): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}