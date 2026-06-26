import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutJumbotron() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[calc(100vh-80px)] flex items-end justify-start overflow-hidden pb-16 lg:pb-24 pt-28 lg:pt-36">
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

      </div>

      <Container className="relative z-10">
        <div className="max-w-[789px] flex flex-col items-start gap-2 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.25] text-white tracking-tight uppercase animate-fade-in-up-1">
            ENGINEERING THE FUTURE OF AUTONOMOUS SOLUTION
          </h1>
          <p className="text-lg sm:text-2xl font-normal text-white/90 leading-[1.5] animate-fade-in-up-2">
            LGN delivers integrated autonomous technologies across air, land, and sea, combining intelligent hardware, software, and AI systems to solve complex operational challenges for government agencies, enterprises, and industrial sectors.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2 animate-fade-in-up-3">
            <Button
              href="#who-we-are"
              variant="primary"
              className="!rounded-full !bg-[#A68164] !border-none hover:!bg-[#8E6D54] !text-white px-8 py-3"
              icon={<i className="fi fi-rr-arrow-right translate-y-[2.5px]"></i>}
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
