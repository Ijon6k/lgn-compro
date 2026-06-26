import React from "react";
import { Container } from "@/components/ui/container";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-[#F7F3F0] py-20 lg:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">

          {/* LEFT: TITLE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A68164]"></div>
            <div className="pl-6">
              <h2 className="text-[#A68164] text-3xl font-medium tracking-wide uppercase mb-3">
                WHO WE ARE
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111315] uppercase tracking-tight leading-snug">
                AN INTEGRATED TECHNOLOGY<br className="hidden lg:block" /> COMPANY FOR AUTONOMOUS<br className="hidden lg:block" /> INNOVATION
              </h3>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:w-1/2 flex items-center h-full">
            <p className="text-base sm:text-2xl text-[#414244] leading-relaxed">
              Langit Global Nusantara (LGN) is an Indonesian technology company specializing in integrated autonomous systems and intelligent digital solutions. We design, develop, and integrate advanced technologies across air, land, and sea to help organizations improve efficiency, safety, and operational decision-making.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
