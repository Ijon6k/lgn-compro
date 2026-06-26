"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ProductCard } from "@/components/ui/product-card";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  href?: string;
}

interface ProductCarouselProps {
  products: CarouselItem[];
  variant?: "solution" | "about-us";
}

export function ProductCarousel({ products, variant = "solution" }: ProductCarouselProps) {
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
    <div className="relative w-full">
      {/* 1. Carousel Viewport */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex -ml-4 sm:-ml-6 lg:-ml-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] sm:pl-6 lg:flex-[0_0_33.333333%] lg:pl-8"
            >
              {variant === "about-us" ? (
                <div
                  className="relative w-full rounded-xl overflow-hidden shadow-lg group"
                  style={{ aspectRatio: "348/441" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col items-start text-left z-10 pointer-events-none">
                    <h4 className="text-2xl font-medium text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xl font-normal text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                <ProductCard
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  href={item.href || "#"}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Carousel Navigation Buttons */}
      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className={cn(
          "absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.95] flex items-center justify-center text-white shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
        )}
        aria-label="Previous slide"
      >
        <i className="fi fi-rr-angle-left flex items-center justify-center text-lg sm:text-xl font-bold" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className={cn(
          "absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.95] flex items-center justify-center text-white shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
        )}
        aria-label="Next slide"
      >
        <i className="fi fi-rr-angle-right flex items-center justify-center text-lg sm:text-xl font-bold" />
      </button>
    </div>
  );
}

export default ProductCarousel;
