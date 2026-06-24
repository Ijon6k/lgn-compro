"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { navigationLinks, contactUsLink } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Monitor scroll position to add header shadow/backdrop changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on hash link click
  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="sticky top-0 left-0 right-0 w-full bg-bg-surface border-b border-border-default shadow-sm h-[84px] flex items-center z-50"
    >
      <Container className="flex items-center justify-between">
        {/* LOGO */}
        <Link href="#home" className="flex items-center group focus-visible:outline-none">
          <img
            src="/logo/logolgn.svg"
            alt="LGN Logo"
            className="h-10 w-auto scale-[2.8] origin-left transition-transform duration-300 group-hover:scale-[2.9]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigationLinks.map((link) => {
            const hasChildren = link.children && link.children.length > 0;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasChildren && setActiveDropdown(link.label)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-base font-medium text-black rounded-full hover:bg-bg-subtle transition-all duration-200",
                    activeDropdown === link.label && "bg-bg-subtle text-black"
                  )}
                >
                  {link.label}
                  {hasChildren && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {hasChildren && (
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 rounded-xl bg-bg-surface border border-border-default shadow-lg p-2 transition-all duration-300 origin-top transform z-dropdown",
                      activeDropdown === link.label
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    )}
                  >
                    {link.children?.map((subLink) => (
                      <a
                        key={subLink.label}
                        href={subLink.href}
                        className="block px-4 py-2.5 text-sm font-medium text-black/80 rounded-lg hover:bg-bg-subtle hover:text-black transition-all duration-150"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA CONTACT */}
        <div className="hidden lg:block">
          <Button href={contactUsLink.href} variant="primary" size="md">
            {contactUsLink.label}
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-text-primary rounded-full hover:bg-bg-subtle focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* MOBILE DRAWER */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-bg-canvas z-overlay lg:hidden flex flex-col transition-all duration-300 ease-premium transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-5">
            {navigationLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              return (
                <div key={link.label} className="border-b border-border-default pb-4">
                  <a
                    href={link.href}
                    onClick={handleMobileLinkClick}
                    className="text-base font-semibold text-text-primary hover:text-text-brand"
                  >
                    {link.label}
                  </a>

                  {hasChildren && (
                    <div className="mt-3 pl-4 flex flex-col gap-2.5 border-l-2 border-border-accent">
                      {link.children?.map((subLink) => (
                        <a
                          key={subLink.label}
                          href={subLink.href}
                          onClick={handleMobileLinkClick}
                          className="text-sm font-medium text-text-secondary hover:text-text-primary"
                        >
                          {subLink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 pb-12">
            <Button
              href={contactUsLink.href}
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleMobileLinkClick}
            >
              {contactUsLink.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
