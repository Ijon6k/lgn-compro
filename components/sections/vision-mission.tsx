import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function VisionMission() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <Container className="flex flex-col items-center">
        {/* HEADER */}
        <div className="max-w-3xl text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111315] uppercase tracking-tight mb-6">
            OUR VISION AND MISSION
          </h2>
          <p className="text-base sm:text-lg text-[#414244] leading-relaxed">
            Driving innovation through autonomous technology while empowering industries<br className="hidden lg:block"/> with smarter, safer, and more efficient solutions.
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6 lg:gap-8">
          
          {/* VISION CARD */}
          <div className="relative w-full md:w-1/2 p-8 lg:p-10 rounded-xl border border-[#D6C5B3] bg-white overflow-hidden group hover:border-[#A68164] transition-colors duration-300">
            <h3 className="text-2xl lg:text-3xl font-normal text-[#A68164] mb-4">
              Vision
            </h3>
            <p className="text-base lg:text-lg text-[#414244] leading-relaxed relative z-10">
              To be recognize as a Market leader in multi domain Autonomous system and Leading edge Technology in Indonesia
            </p>
            {/* Decorative Icon Background */}
            <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-110">
              {/* Decorative Icon */}
              <i className="fi fi-rr-bulb text-[160px] text-[#A68164]"></i>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="relative w-full md:w-1/2 p-8 lg:p-10 rounded-xl border border-[#D6C5B3] bg-white overflow-hidden group hover:border-[#A68164] transition-colors duration-300">
            <h3 className="text-2xl lg:text-3xl font-normal text-[#A68164] mb-4">
              Mission
            </h3>
            <p className="text-base lg:text-lg text-[#414244] leading-relaxed relative z-10">
              To become number one solution partner of identity, tailor-made and solution of Technology that will Impactful to Indonesian Society
            </p>
            {/* Decorative Icon Background */}
            <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-110">
              <i className="fi fi-rr-target text-[160px] text-[#A68164]"></i>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
