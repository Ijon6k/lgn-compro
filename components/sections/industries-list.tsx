import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { industriesData } from "@/data/industries";
import { cn } from "@/lib/utils";

export function IndustriesList() {
  return (
    <section className="py-20 lg:py-32 bg-bg-canvas">
      <Container className="flex flex-col gap-24 lg:gap-40">
        {industriesData.map((industry, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={industry.id}
              id={industry.id}
              className="group flex flex-col lg:flex-row items-center gap-12 lg:gap-20 scroll-mt-32"
            >
              {/* IMAGE WRAPPER */}
              <div
                className={cn(
                  "w-full lg:w-1/2 relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-square bg-bg-subtle",
                  !isEven && "lg:order-last"
                )}
              >
                <Image
                  src={industry.imageUrl}
                  alt={industry.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>

              {/* CONTENT WRAPPER */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-primary"></div>
                  <span className="text-sm font-bold tracking-widest uppercase text-text-brand">
                    Industry Sector
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-text-primary tracking-tight uppercase leading-[1.3] mb-6">
                  {industry.title}
                </h2>
                
                <p className="text-lg sm:text-2xl font-normal text-[#414244] leading-[1.5] mb-8">
                  {industry.description}
                </p>

                {industry.features && industry.features.length > 0 && (
                  <ul className="flex flex-col gap-4 mb-10 w-full">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-bg-accent text-brand-primary flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg font-normal text-[#414244]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {industry.ctaText && (
                  <Button href={industry.ctaHref || "#contact"} variant="secondary" size="lg">
                    {industry.ctaText}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
