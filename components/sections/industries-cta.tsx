import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { contactUsLink } from "@/data/navigation";

export function IndustriesCta() {
  return (
    <section className="py-16 lg:py-24 bg-bg-canvas">
      <Container>
        <div className="bg-[#947259] rounded-xl flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-20 gap-8 lg:gap-10 shadow-lg">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.2]">
              Ready to Transform<br className="hidden lg:block"/> Your Operations?
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-3/5 flex flex-col items-start text-left gap-6 lg:gap-8 lg:pl-10">
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed w-full text-justify hyphens-auto">
              Discover how LGN's autonomous technologies can improve efficiency, safety, and decision-making across your industry.
            </p>
            <Button 
              href={contactUsLink.href}
              target="_blank"
              variant="primary"
              className="!bg-transparent !bg-none !border-white/60 !text-white hover:!bg-white/10 hover:!border-white !rounded-full px-8 py-3"
              icon={<Image src="/Union.svg" alt="Partner Icon" width={20} height={20} />}
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
