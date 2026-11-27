"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as typeof window & { __lenis?: any }).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`hidden min-[860px]:block fixed z-50 top-5 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-1rem)] md:max-w-4xl transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="backdrop-blur-md bg-white/70 border border-black/10 shadow-sm px-4 sm:px-6 lg:px-9 py-3 rounded-full">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-tighter text-ink text-sm sm:text-base">erick</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
