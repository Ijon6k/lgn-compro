import { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
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
    href: "/industries",
    children: [
      { label: "Agriculture & Marine", href: "/industries#use-cases" },
      { label: "Construction & Logistic", href: "/industries#use-cases" },
      { label: "Energy & Mining", href: "/industries#use-cases" },
      { label: "Government & Defense", href: "/industries#use-cases" },
      { label: "Public Safety", href: "/industries#use-cases" },
    ],
  },
];
export const contactUsLink = { label: "Contact Us", href: "https://wa.me/628211818566" };
