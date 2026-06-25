import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { Capabilities } from "@/components/sections/capabilities";
import { Solutions } from "@/components/sections/solutions";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <GradientDivider />
        <Capabilities />
        <Solutions />
      </main>
      <Footer />
    </>
  );
}
