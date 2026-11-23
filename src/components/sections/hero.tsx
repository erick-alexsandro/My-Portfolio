"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-between overflow-hidden bg-black px-5 pt-5 pb-8 text-white md:px-7">
      <Image
        src="/images/hero.svg"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <h1
        aria-label={site.name}
        className="relative text-[17vw] leading-[0.85] font-semibold tracking-tighter whitespace-nowrap"
      >
        {site.wordmark}
      </h1>

      <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <p className="text-5xl leading-[0.95] font-medium tracking-tighter md:text-7xl">
          {site.tagline.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 * i,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </p>
        <div className="flex gap-2">
          <ButtonLink href="#projects">View projects</ButtonLink>
          <ButtonLink href="#about" variant="light">
            About
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
