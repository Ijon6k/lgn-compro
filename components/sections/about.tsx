"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function About() {
  const { ref, isRevealed } = useScrollReveal(0.05);

  return (
    <section ref={ref} id="about" className="py-24 lg:py-32 bg-bg-surface overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* IMAGE SIDE */}
          <div className={`lg:col-span-5 relative ml-6 mb-6 transition-all duration-1000 ease-out transform ${
            isRevealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            {/* Decorative Offset Background Layer (Light Beige) */}
            <div className="absolute top-6 -left-6 w-full h-full bg-bg-accent z-0" />

            {/* Main Image (Rectangular, no borders/shadows/radius) */}
            <div className="relative aspect-[3/4] w-full z-10">
              <Image
                src="/photos/home2.webp"
                alt="LGN Engineering Team collaborating on autonomous solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className={`lg:col-span-7 flex flex-col gap-8 lg:gap-10 transition-all duration-1000 ease-out transform delay-200 ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-normal tracking-tight text-text-primary uppercase leading-[1.5]">
                Bridging Global Innovation With Operational Excellence
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-lg sm:text-2xl font-regular text-text-secondary leading-[1.5]">
              <p>
                LGN delivers integrated autonomous systems, robotics, AI, and
                mission-critical engineering solutions for government and
                industrial operations.
              </p>
              <p>
                Through global technology partnerships and local engineering
                expertise, LGN helps organizations operate safer, smarter, and
                more efficiently across air, land, and sea.
              </p>
            </div>

            <div>
              <Button 
                href="#capabilities" 
                variant="primary" 
                size="lg" 
                icon={<i className="fi fi-rr-angle-small-down flex items-center justify-center"></i>}
              >
                Learn Our Values
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
