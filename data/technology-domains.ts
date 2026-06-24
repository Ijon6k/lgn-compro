export interface TechnologyDomain {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

// TODO: Replace placeholder images with actual LGN assets when available
export const technologyDomains: TechnologyDomain[] = [
  {
    id: "01",
    title: "Air Domain",
    description: "Mission-ready UAV platforms for surveillance, mapping, inspection, and aerial operations.",
    image: "/photos/solutionair.webp",
    href: "#product-lineup",
  },
  {
    id: "02",
    title: "Land Domain",
    description: "Autonomous ground systems for logistics, inspection, security, and robotic operations.",
    image: "/photos/solutionland.webp",
    href: "#product-lineup",
  },
  {
    id: "03",
    title: "Sea Domain",
    description: "Advanced marine robotics for underwater inspection, monitoring, and maritime missions.",
    image: "/photos/solutionsea.webp",
    href: "#product-lineup",
  },
  {
    id: "04",
    title: "Data & AI Domain",
    description: "AI-powered intelligence platforms for mission control, analytics, and operational insights.",
    image: "/photos/solutionai.webp",
    href: "#product-lineup",
  },
];
