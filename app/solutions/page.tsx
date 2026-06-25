import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SolutionHero } from "@/components/sections/solution-hero";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { TechnologyPortfolio } from "@/components/sections/technology-portfolio";
import { ProductLineup } from "@/components/sections/product-lineup";

export const metadata = {
  title: "Technology Solutions | LGN Autonomous Systems",
  description:
    "Explore LGN's portfolio of autonomous systems, UAV technologies, robotics platforms, AI-enabled operations, and mission-support solutions designed for complex operational environments.",
  openGraph: {
    title: "Technology Solutions | LGN Autonomous Systems",
    description:
      "Explore LGN's portfolio of autonomous systems, UAV technologies, robotics platforms, AI-enabled operations, and mission-support solutions designed for complex operational environments.",
  },
  twitter: {
    title: "Technology Solutions | LGN Autonomous Systems",
    description:
      "Explore LGN's portfolio of autonomous systems, UAV technologies, robotics platforms, AI-enabled operations, and mission-support solutions designed for complex operational environments.",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg-canvas">
        <SolutionHero />
        <GradientDivider id="solutions-content" />
        <TechnologyPortfolio />
        <ProductLineup />
      </main>
      <Footer />
    </>
  );
}
