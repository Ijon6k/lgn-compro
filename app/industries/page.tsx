import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { IndustriesTabs } from "@/components/sections/industries-tabs";
import { IndustriesCta } from "@/components/sections/industries-cta";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import industriesJumbotron from "@/public/photos/industriesJumbotron.webp";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-canvas">
      <Navbar />
      <main className="flex-1 w-full">
        {/* JUMBOTRON HERO */}
        <section className="relative min-h-[calc(100vh-84px)] flex items-center justify-start overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src={industriesJumbotron}
              alt="Industries Hero Image"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <Container className="relative z-10 mt-16 lg:mt-24">
            <div className="max-w-[789px] flex flex-col items-start gap-6 lg:gap-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.25] text-white tracking-tight uppercase">
                DRIVING INNOVATION ACROSS CRITICAL INDUSTRIES
              </h1>
              <p className="text-lg sm:text-2xl font-normal text-white/90 leading-[1.5]">
                Advanced UAV, robotics, and autonomous solutions designed to enhance operational efficiency, infrastructure management, public safety, and environmental sustainability across industrial and government sectors.
              </p>
            </div>
          </Container>
        </section>

        {/* EMPOWERING EVERY INDUSTRIES SECTION */}
        <section className="bg-[#F7F3F0] py-16 lg:py-32 overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* LEFT: IMAGES */}
              <div className="lg:col-span-7 relative flex justify-center items-center gap-4 sm:gap-6 w-full mt-10 lg:mt-0">
                {/* Image 1 (Left, taller, shifted up slightly) */}
                <div className="relative w-1/2 aspect-[222/465] transform -translate-y-8 lg:-translate-y-12 shadow-xl animate-fade-in-up-1">
                  <Image
                    src="/photos/industries/Frame 1261157769.webp"
                    alt="Drone Operator"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Image 2 (Right, shifted down slightly) */}
                <div className="relative w-1/2 aspect-[222/465] transform translate-y-8 lg:translate-y-12 shadow-xl animate-fade-in-up-2">
                  <Image
                    src="/photos/industries/Frame 1261157770.webp"
                    alt="Discussion"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT: CONTENT */}
              <div className="lg:col-span-5 flex flex-col items-start gap-6 lg:gap-8 pt-10 lg:pt-0 lg:pl-10 animate-fade-in-up-3">
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.25] text-[#111315] uppercase tracking-tight">
                  Empowering Every Industries With Autonomous Solutions
                </h1>
                <p className="text-lg lg:text-xl font-normal text-[#414244] leading-[1.6]">
                  From agriculture and energy to defense, logistics, and public safety, LGN delivers integrated autonomous solutions that address real-world operational challenges through innovation, reliability, and intelligent data.
                </p>
                <Button
                  href="#use-cases"
                  variant="primary"
                  className="!rounded-sm !bg-[#b08a6b] !border-none hover:!bg-[#a07e61] !text-white px-8 py-3"
                  icon={<i className="fi fi-rr-info -translate-y-[-2.5px]"></i>}
                >
                  Explore Use Case
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <IndustriesTabs />
        <IndustriesCta />
      </main>
      <Footer />
    </div>
  );
}
