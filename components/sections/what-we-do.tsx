"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { ProductCarousel } from "@/components/ui/product-carousel";
import { whatWeDoData } from "@/constants";

export function WhatWeDo() {
  return (
    <section className="py-20 lg:py-32 bg-bg-surface overflow-hidden">
      <Container className="flex flex-col items-center">
        {/* HEADER */}
        <div className="max-w-4xl text-center mb-12 lg:mb-16">
          <h2 className="text-[#A68164] text-3xl font-medium tracking-wide uppercase mb-3">
            WHAT WE DO
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111315] uppercase tracking-tight mb-6">
            INTEGRATED AUTONOMOUS SOLUTIONS<br className="hidden lg:block" /> FOR MODERN INDUSTRIES
          </h3>
          <p className="text-base sm:text-2xl text-[#414244] leading-relaxed">
            Rather than offering standalone products, LGN delivers integrated ecosystems
            <br />
            tailored to each operational requirement.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="w-full max-w-6xl mx-auto mt-4">
          <ProductCarousel products={whatWeDoData} variant="about-us" />
        </div>
      </Container>
    </section>
  );
}
