import { FooterColumn, ContactItem } from "@/types";

export const footerContactInfo: ContactItem[] = [
  {
    icon: "fi fi-brands-whatsapp",
    label: "WhatsApp",
    value: "+62 821-1818-566",
    href: "https://wa.me/628211818566",
  },
  {
    icon: "fi fi-rr-envelope",
    label: "Inquiries",
    value: "hello@lgn.id",
    href: "",
  },
  {
    icon: "fi fi-rr-marker",
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "https://maps.google.com/?q=Jakarta,+Indonesia",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "OUR SOLUTIONS",
    links: [
      { label: "Air Domain", href: "/solutions#air" },
      { label: "Sea Domain", href: "/solutions#sea" },
      { label: "Land Domain", href: "/solutions#land" },
      { label: "Data & AI Domain", href: "/solutions#data-ai" },
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      { label: "Agriculture & Marine", href: "/#ind-agri-marine" },
      { label: "Construction & Logistic", href: "/#ind-construction-logistic" },
      { label: "Energy & Mining", href: "/#ind-energy-mining" },
      { label: "Government & Defense", href: "/#ind-gov-defense" },
      { label: "Public Safety", href: "/#ind-public-safety" },
    ],
  },
  {
    title: "SOCIAL MEDIA",
    links: [
      { label: "Instagram", href: "" },
      { label: "LinkedIn", href: "" },
    ],
  },
];
