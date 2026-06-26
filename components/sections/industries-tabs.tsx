"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { industriesData } from "@/data/industries";
import { contactUsLink } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function IndustriesTabs() {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && industriesData.some((ind) => ind.id === hash)) {
        setActiveTab(hash);
        const el = document.getElementById("use-cases");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Run on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeIndustry = industriesData.find((ind) => ind.id === activeTab) || industriesData[0];

  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-bg-canvas">
      <Container className="flex flex-col items-center">
        {/* HEADER */}
        <div className="max-w-3xl text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#B08A6B] uppercase tracking-tight mb-4">
            USE CASES ACROSS INDUSTRIES
          </h2>
          <p className="text-lg sm:text-xl text-[#414244] leading-relaxed">
            Enabling safer, smarter, and more efficient operations across diverse industries through integrated UAV, robotics, AI, and autonomous systems.
          </p>
        </div>

        {/* TABS CONTAINER */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-[#F7F3F0] p-1.5 rounded-lg border border-black/5">
          {industriesData.map((industry) => {
            const isActive = activeTab === industry.id;
            return (
              <button
                key={industry.id}
                type="button"
                onClick={() => setActiveTab(industry.id)}
                className={cn(
                  "px-4 sm:px-6 py-2.5 rounded-md text-sm sm:text-base font-medium transition-all duration-300",
                  isActive
                    ? "bg-[#D6C5B3] text-[#5A4332] shadow-sm"
                    : "text-[#6C6D6E] hover:text-[#414244] hover:bg-black/5"
                )}
              >
                {industry.title}
              </button>
            );
          })}
        </div>

        {/* ACTIVE CONTENT CARD */}
        <div className="w-full max-w-5xl bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row transition-opacity duration-500">
          {/* IMAGE */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto">
            <Image
              src={activeIndustry.imageUrl}
              alt={activeIndustry.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 p-6 sm:p-10 lg:p-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#A68164] mb-6">
              {activeIndustry.title}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-[#414244] leading-relaxed mb-10">
              {/* Using a custom description or falling back to the one in data. We will use a hardcoded style matching the mockup for demo if needed, but data.description is fine. */}
              Supporting {activeIndustry.title.toLowerCase()} industries with intelligent drone solutions that improve monitoring, operational efficiency, resource management, and situational awareness through real-time aerial data and insights.
            </p>
            <div className="mt-auto md:mt-4">
              <Button 
                href={contactUsLink.href}
                target="_blank"
                variant="secondary"
                className="!bg-white hover:!bg-white !border-[#b08a6b] !rounded-full px-8 py-2.5 [&_span]:!text-[#b08a6b]"
                icon={<i className="fi fi-rr-info -translate-y-[-1.5px]"></i>}
              >
                Request Project
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
