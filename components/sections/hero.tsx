import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-[calc(100vh-80px)] flex items-center justify-start overflow-hidden py-16 lg:py-24"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/homehero2.webp"
          alt="LGN autonomous drone operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

      </div>

      <Container className="relative z-10 mt-24 lg:mt-40">
        <div className="max-w-[789px] flex flex-col items-start gap-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.25] text-white tracking-tight uppercase animate-fade-in-up-1">
            Engineering Mission-Ready
            <br />
            Autonomous Solutions
          </h1>
          <p className="text-lg sm:text-2xl font-normal text-white/90 leading-[1.5] animate-fade-in-up-2">
            Integrating UAV platforms, marine robotics, AI, and mission systems
            for government and industrial operations.
          </p>
          <div className="animate-fade-in-up-3">
            <Button
              href="#about"
              variant="primary"
              size="lg"
              icon={<i className="fi fi-rr-info flex items-center justify-center"></i>}
            >
              Learn Our Solutions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
