import { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  {
    label: "Solution",
    href: "/solutions",
    children: [
      { label: "Air Domain", href: "/solutions#air" },
      { label: "Sea Domain", href: "/solutions#sea" },
      { label: "Land Domain", href: "/solutions#land" },
      { label: "Data & AI Domain", href: "/solutions#data-ai" },
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
    children: [
      { label: "Agriculture & Marine", href: "/#ind-agri-marine" },
      { label: "Construction & Logistic", href: "/#ind-construction-logistic" },
      { label: "Energy & Mining", href: "/#ind-energy-mining" },
      { label: "Government & Defense", href: "/#ind-gov-defense" },
      { label: "Public Safety", href: "/#ind-public-safety" },
    ],
  },
];
export const contactUsLink = { label: "Contact Us", href: "https://wa.me/628211818566" };
