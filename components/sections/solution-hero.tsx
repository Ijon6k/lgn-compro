import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SolutionHero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[98vh] flex items-center justify-start overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-bg-dark text-text-inverse">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Replace with actual LGN hero image */}
        <Image
          src="/photos/solutionhero.webp"
          alt="Integrated Autonomous Solutions"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
      </div>

      {/* 2. Horizontal Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* 3. Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center">
        <div className="max-w-[1100px] flex flex-col items-start gap-2 text-left mt-12">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight uppercase font-sans tracking-tight animate-fade-in-up-1">
            INTEGRATED AUTONOMOUS
            <br />
            SOLUTIONS ACROSS AIR, LAND,
            <br />
            SEA, AND DATA
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-2xl font-normal text-white leading-relaxed max-w-[1000px] animate-fade-in-up-2">
            LGN delivers integrated UAV, robotics, AI, and mission-critical technology
            <br className="hidden sm:inline" />
            solutions across air, land, sea, and data domains.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up-3">
            <Button
              href="#solutions-content"
              variant="primary"
              className="h-[50px] px-8 text-base font-medium text-white bg-brand-gradient hover:brightness-[1.05]"
              icon={
                <i className="fi fi-rr-info flex items-center justify-center text-sm" />
              }
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}

export default SolutionHero;
