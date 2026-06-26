"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { whatWeDoData } from "@/constants";

export function WhatWeDo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const updateButtonsState = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtonsState();
    emblaApi.on("select", updateButtonsState);
    emblaApi.on("reInit", updateButtonsState);
  }, [emblaApi, updateButtonsState]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-bg-surface overflow-hidden">
      <Container className="flex flex-col items-center">
        {/* HEADER */}
        <div className="max-w-3xl text-center mb-12 lg:mb-16">
          <h2 className="text-[#A68164] text-lg font-medium tracking-wide uppercase mb-3">
            WHAT WE DO
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111315] uppercase tracking-tight mb-6">
            INTEGRATED AUTONOMOUS SOLUTIONS<br className="hidden lg:block"/> FOR MODERN INDUSTRIES
          </h3>
          <p className="text-base sm:text-lg text-[#414244] leading-relaxed">
            Rather than offering standalone products, LGN delivers integrated ecosystems<br className="hidden lg:block"/> tailored to each operational requirement.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative w-full max-w-6xl mx-auto mt-4">
          {/* Carousel Viewport */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6 lg:-ml-8">
              {whatWeDoData.map((item) => (
                <div
                  key={item.id}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] sm:pl-6 lg:flex-[0_0_33.333333%] lg:pl-8"
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col items-start text-left z-10 pointer-events-none">
                      <h4 className="text-lg lg:text-xl font-medium text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className={cn(
              "absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.95] flex items-center justify-center text-white shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
            )}
            aria-label="Previous"
          >
            <i className="fi fi-rr-angle-left text-lg sm:text-xl font-bold flex items-center justify-center" />
          </button>
          
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className={cn(
              "absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.95] flex items-center justify-center text-white shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
            )}
            aria-label="Next"
          >
            <i className="fi fi-rr-angle-right text-lg sm:text-xl font-bold flex items-center justify-center" />
          </button>
        </div>
      </Container>
    </section>
  );
}
