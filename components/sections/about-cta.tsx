import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  return (
    <section className="relative overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-16">
      {/* Split Background */}
      <div className="absolute top-0 left-0 w-full h-[65%] lg:h-[70%] lg:bg-gray-100 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[35%] lg:h-[30%] bg-white z-0"></div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* LEFT: INDUSTRIES WE SERVE CARD */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-tr-xl rounded-tl-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col gap-6 transform lg:translate-y-8 border-b-[6px] border-[#A68164]">
              <h3 className="text-2xl sm:text-3xl font-medium text-[#111315]">
                <span className="text-[#A68164]">Industries</span> We Serve
              </h3>

              <ul className="flex flex-col gap-4">
                {[
                  "Agriculture",
                  "Marine",
                  "Construction & Logistic",
                  "Government Agencies",
                  "Defense",
                  "Energy & Mining"
                ].map((industry, index) => (
                  <li key={index} className="flex items-center gap-3 text-base sm:text-lg text-[#414244]">
                    <i className="fi fi-rr-arrow-small-right text-[#A68164]"></i>
                    {industry}
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Button
                  href="/industries#use-cases"
                  variant="primary"
                  className="!bg-[#A68164] !border-none hover:!bg-[#8E6D54] !text-white px-6 py-2.5 !rounded-sm"
                  icon={<i className="fi fi-rr-info translate-y-[2.5px] text-sm"></i>}
                >
                  Learn Use Case
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: CTA TEXT */}
          <div className="w-full lg:w-7/12 flex flex-col items-start gap-6 lg:-translate-y-40">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-[#A68164]">
              Let's Build Smarter<br /> <span className="text-[#A68164]">Operations Together</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed max-w-xl">
              From UAVs and robotics to AI-powered mission systems, LGN helps organizations deploy technology that delivers real operational impact.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
