import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { AboutJumbotron } from "@/components/sections/about-jumbotron";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { VisionMission } from "@/components/sections/vision-mission";
import { AboutCta } from "@/components/sections/about-cta";

export const metadata = {
  title: "About Us | LGN",
  description: "Engineering the future of autonomous solutions. Discover who we are, what we do, and our vision and mission.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-canvas">
      <Navbar />
      <main className="flex-1 w-full lg:pb-20">
        <AboutJumbotron />
        <WhoWeAre />
        <WhatWeDo />
        <VisionMission />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
