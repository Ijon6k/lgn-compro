"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ProductCarousel } from "@/components/ui/product-carousel";
import { products } from "@/data/products";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ProductLineup() {
  const { ref, isRevealed } = useScrollReveal(0.05);

  return (
    <section ref={ref} id="product-lineup" className="relative py-24 lg:py-32 overflow-hidden bg-bg-dark text-text-inverse scroll-mt-32">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Replace with actual LGN background image */}
        <Image
          src="/photos/solutionproduct.webp"
          alt="LGN product lineup background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Black Overlay (75%) */}
      <div className="absolute inset-0 bg-black/75 z-10 pointer-events-none" />

      {/* 3. Section Content */}
      <Container className="relative z-20 max-w-[1440px] flex flex-col gap-12 sm:gap-16">
        {/* Header and Description */}
        <div className={`flex flex-col gap-6 text-left max-w-[1100px] transition-all duration-1000 ease-out transform ${
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white uppercase font-sans">
            OUR PRODUCT LINE UP
          </h2>
          <p className="text-lg sm:text-2xl font-normal text-white/90 leading-relaxed">
            Explore our portfolio of mission-ready autonomous platforms engineered
            to deliver reliable performance across air, land, sea, and integrated
            intelligence operations.
          </p>
        </div>

        {/* Carousel */}
        <div className={`w-full transition-all duration-1000 ease-out transform delay-200 ${
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <ProductCarousel products={products} />
        </div>

        {/* Bottom CTA Area */}
        <div className={`pt-2 sm:pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-1000 ease-out transform delay-300 ${
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              Interested in one of our solutions?
            </h4>
            <p className="text-base sm:text-xl font-normal text-white/80">
              Let's discuss the right autonomous technology for your mission.
            </p>
          </div>
          <div className="self-start md:self-auto">
            <a
              href="https://wa.me/628211818566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[50px] px-8 rounded-full border border-white text-base font-medium text-white bg-transparent hover:bg-white/10 active:scale-[0.98] transition-all duration-300 gap-2.5"
            >
              <span>Get in Touch</span>
              <i className="fi fi-rr-phone-call flex items-center justify-center text-sm" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductLineup;
