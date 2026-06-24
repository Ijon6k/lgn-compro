"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { TechnologyDomainCard } from "@/components/ui/technology-domain-card";
import { technologyDomains } from "@/data/technology-domains";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function TechnologyPortfolio() {
  const { ref, isRevealed } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white overflow-hidden relative">
      {/* Background Geometric Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-center bg-cover bg-no-repeat opacity-[0.15]"
        style={{ backgroundImage: "url('/pattern/patternsolution.svg')" }}
      />
      <Container className="max-w-[1440px] relative z-10">
        {/* Section Heading & Description */}
        <div className={`flex flex-col items-center text-center gap-6 mb-16 lg:mb-20 transition-all duration-1000 ease-out transform ${
          isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-brand-primary uppercase font-sans">
            EXPLORE OUR TECHNOLOGY PORTFOLIO
          </h2>
          <p className="text-xl sm:text-2xl font-normal text-neutral-700 leading-relaxed max-w-[700px] mx-auto">
            Discover LGN's autonomous technology portfolio across aerial, maritime,
            surveillance, logistics, and mission-support systems.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-[1008px] mx-auto">
          {technologyDomains.map((domain, index) => {
            // Calculate delay for staggered entry
            const delayClasses = [
              "delay-100",
              "delay-200",
              "delay-300",
              "delay-400"
            ];
            const delayClass = delayClasses[index % delayClasses.length];

            return (
              <div
                key={domain.id}
                className={`transition-all duration-1000 ease-out transform ${delayClass} ${
                  isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <TechnologyDomainCard
                  id={domain.id}
                  title={domain.title}
                  description={domain.description}
                  image={domain.image}
                  href={domain.href}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default TechnologyPortfolio;
