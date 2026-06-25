import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutJumbotron() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[calc(100vh-80px)] flex items-center justify-start overflow-hidden py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/about/jumbotronAbout.webp"
          alt="About Us Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl flex flex-col items-start gap-6 lg:gap-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.25] text-white tracking-tight uppercase">
            ENGINEERING THE FUTURE OF AUTONOMOUS SOLUTION
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-normal text-white/90 leading-relaxed">
            LGN delivers integrated autonomous technologies across air, land, and sea, combining intelligent hardware, software, and AI systems to solve complex operational challenges for government agencies, enterprises, and industrial sectors.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 animate-fade-in-up-3">
            <Button
              href="#who-we-are"
              variant="primary"
              className="!rounded-full !bg-[#A68164] !border-none hover:!bg-[#8E6D54] !text-white px-8 py-3"
              icon={<i className="fi fi-rr-arrow-right -translate-y-[1px]"></i>}
            >
              Learn More
            </Button>
            <Button
              href="https://wa.me/628211818566"
              target="_blank"
              variant="secondary"
              className="!rounded-full !bg-transparent !border !border-white/60 !text-white hover:!bg-white/10 hover:!border-white px-8 py-3 [&_span]:!text-white"
              icon={<Image src="/Union.svg" alt="Contact Icon" width={18} height={18} />}
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
