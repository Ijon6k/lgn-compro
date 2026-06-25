"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ProductCard } from "@/components/ui/product-card";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "keepSnaps",
    loop: false, // Do not infinitely loop
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
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] sm:pl-6 lg:flex-[0_0_33.333333%] lg:pl-8"
            >
              <ProductCard
                id={product.id}
                title={product.title}
                image={product.image}
                href={product.href}
              />
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
