"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { solutionsData } from "@/data/solutions";

const systems = [
  {
    id: "air-systems",
    title: "Air Systems",
    description: "Advanced UAV platforms for surveillance, mapping, inspection, logistics, agriculture, and mission-critical aerial operations.",
    imageUrl: "/photos/homeair.webp",
  },
  {
    id: "marine-systems",
    title: "Marine Systems",
    description: "Advanced underwater robotic solutions for inspection, monitoring, and marine operations, delivering reliable performance in offshore, maritime, and critical infrastructure environments.",
    imageUrl: "/photos/homemarine.webp",
  },
  {
    id: "mission-security",
    title: "Mission & Security Systems",
    description: "Mission-critical surveillance and counter-drone solutions designed to protect critical infrastructure, enhance situational awareness, and support high-security operations.",
    imageUrl: "/photos/homesecurity.webp",
  },
  {
    id: "ai-integrated",
    title: "AI & Integrated Systems",
    description: "Mission-critical surveillance and counter-drone solutions designed to protect critical infrastructure, enhance situational awareness, and support high-security operations.",
    imageUrl: "/photos/homeai.webp",
  }
];

export function Solutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const portfolio = solutionsData.find((s) => s.id === "mission-ready-portfolio");

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % systems.length);
  };

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-bg-surface overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN: AIR SYSTEMS IMAGE CARD (CROSSFADING SLIDER) */}
          <Card
            variant="default"
            hoverable={true}
            className="lg:col-span-7 relative min-h-[480px] lg:min-h-[568px] overflow-hidden border border-border-default/40 rounded-md"
          >
            {systems.map((system, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={system.id}
                  className={`absolute inset-0 flex flex-col justify-end p-8 sm:p-12 group transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  {/* Image background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={system.imageUrl}
                      alt={system.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center scale-[1.05] transition-transform duration-1000 ease-premium group-hover:scale-[1.1]"
                    />
                  </div>

                  {/* Card text content */}
                  <div className="flex flex-col gap-4 relative z-10">
                    <h3 className="text-2xl sm:text-4xl font-medium text-text-inverse tracking-tight uppercase leading-tight">
                      {system.title}
                    </h3>
                    <p className="text-lg sm:text-2xl text-text-inverse/90 leading-[1.5] font-normal max-w-2xl">
                      {system.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Card>

          {/* RIGHT COLUMN: DARK CONTACT/PORTFOLIO INFO CARD */}
          {portfolio && (
            <Card
              variant="dark"
              hoverable={true}
              className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-12 lg:p-14 rounded-md min-h-[480px] lg:min-h-[568px]"
            >
              <div className="flex flex-col gap-6 lg:gap-8">
                <h3 className="text-2xl sm:text-4xl font-medium text-text-inverse tracking-tight leading-[1.3]">
                  {portfolio.title}
                </h3>
                <p className="text-lg sm:text-2xl text-text-inverse/85 leading-[1.5] font-normal">
                  {portfolio.description}
                </p>
              </div>

              <div className="mt-12 lg:mt-auto pt-4">
                {portfolio.ctaText && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    icon={<i className="fi fi-rr-info flex items-center justify-center"></i>}
                  >
                    {portfolio.ctaText}
                  </Button>
                )}
              </div>
            </Card>
          )}

        </div>
      </Container>
    </section>
  );
}
