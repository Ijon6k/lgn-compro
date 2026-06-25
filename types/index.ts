export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface CapabilityItem {
  id: string; // e.g. "01"
  title: string;
  description: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  ctaText?: string;
  ctaHref?: string;
  isDark?: boolean;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactItem {
  icon: string; // flaticon class e.g. 'fi fi-rr-whatsapp'
  label: string;
  value: string;
  href: string;
}
