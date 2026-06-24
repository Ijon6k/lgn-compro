import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { capabilitiesData } from "@/data/capabilities";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-bg-accent">
      <Container className="flex flex-col gap-16">
        {/* HEADER */}
        <SectionHeading
          title={
            <span className="bg-[linear-gradient(90deg,#7F6048_0%,#B08A6B_100%)] bg-clip-text text-transparent">
              THE FOUNDATION OF EVERY MISSION
            </span>
          }
          subtitle="Four core capabilities that define how LGN bridges global technologies with local execution to deliver reliable, mission-ready solutions."
          className="max-w-[900px] mx-auto"
          titleClassName="text-4xl font-medium uppercase"
          subtitleClassName="text-2xl font-normal text-[#414244] leading-[1.5] mt-4"
        />

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {capabilitiesData.map((item) => (
            <div
              key={item.id}
              className="bg-bg-surface p-8 lg:p-10 flex flex-col justify-start items-start rounded-none w-full max-w-[285px] lg:h-[361px]"
            >
              {/* Card Header (Number with tight divider) */}
              <div className="border-b-[1.5px] border-brand-primary pb-1 mb-8 inline-block">
                <span className="text-5xl font-normal text-brand-primary leading-none">
                  {item.id}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold uppercase leading-[1.2]">
                  <span className="text-brand-primary">{item.title}</span>
                </h3>
                <p className="text-2xl font-normal text-[#414244] leading-[1.4]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
