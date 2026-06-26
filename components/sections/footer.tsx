import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerColumns, footerContactInfo } from "@/data/footer";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer id="contact" className="bg-bg-surface border-t border-border-default pt-16 pb-8 sm:pt-24 sm:pb-12 overflow-hidden">
      <Container className="flex flex-col gap-10 sm:gap-16">
        {/* TOP CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-12 lg:gap-16 items-start">

          {/* COLUMN 1: CONTACT INFORMATION (40% width) */}
          <div className="md:col-span-4 flex flex-col gap-6 sm:gap-10 md:border-r border-border-default pr-0 md:pr-12 lg:pr-16">
            <h3 className="text-lg sm:text-2xl font-semibold text-brand-primary uppercase">
              CONTACT INFORMATION
            </h3>

            <div className="flex flex-col gap-5 sm:gap-8">
              {footerContactInfo.map((item) => {
                const isLink = item.href && item.href !== "";
                const className = cn(
                  "flex items-center gap-3 sm:gap-4 text-sm sm:text-xl font-normal text-[var(--pr-bg-500)] rounded",
                  isLink ? "hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary" : "cursor-default"
                );
                
                const inner = (
                  <>
                    <i className={`${item.icon} text-lg sm:text-2xl leading-none flex-shrink-0 text-brand-primary`} />
                    <span>
                      {item.label}: {item.value}
                    </span>
                  </>
                );

                if (isLink) {
                  const isExternal = item.href.startsWith("http");
                  if (isExternal) {
                    return (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                        {inner}
                      </a>
                    );
                  }
                  return (
                    <Link key={item.label} href={item.href} className={className}>
                      {inner}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className={className}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMNS 2, 3, 4: LINK SECTIONS (60% width split into three columns = 20% each) */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-8 pl-0 md:pl-8 lg:pl-16">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6 sm:gap-10">
                <h3 className="text-sm sm:text-xl font-semibold text-neutral-900 uppercase">
                  {col.title}
                </h3>

                <ul className="flex flex-col gap-4 sm:gap-8">
                  {col.links.map((link) => {
                    const isLink = link.href && link.href !== "";
                    const className = cn(
                      "text-sm sm:text-xl font-normal text-[var(--pr-bg-500)]",
                      isLink ? "hover:opacity-80 transition-opacity duration-150" : "opacity-80 cursor-default"
                    );

                    let content;
                    if (isLink) {
                      const isExternal = link.href.startsWith("http");
                      if (isExternal) {
                        content = (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                            {link.label}
                          </a>
                        );
                      } else {
                        content = (
                          <Link href={link.href} className={className}>
                            {link.label}
                          </Link>
                        );
                      }
                    } else {
                      content = <span className={className}>{link.label}</span>;
                    }

                    return (
                      <li key={link.label}>
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="border-t border-border-default pt-6 mt-4 sm:pt-8 sm:mt-8 flex items-center justify-center">
          <p className="text-sm sm:text-xl font-normal text-[var(--pr-bg-500)] text-center">
            Copyright @ Langit Global Nusantara {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
