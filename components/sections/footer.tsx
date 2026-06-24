import React from "react";
import { Container } from "@/components/ui/container";
import { footerColumns, footerContactInfo } from "@/data/footer";

export function Footer() {
  return (
    <footer id="contact" className="bg-bg-surface border-t border-border-default pt-24 pb-12 overflow-hidden">
      <Container className="flex flex-col gap-16">
        {/* TOP CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12 lg:gap-16 items-start">

          {/* COLUMN 1: CONTACT INFORMATION (40% width) */}
          <div className="md:col-span-4 flex flex-col gap-10 md:border-r border-border-default pr-4 md:pr-12 lg:pr-16">
            <h3 className="text-2xl font-semibold text-brand-primary uppercase">
              CONTACT INFORMATION
            </h3>

            <div className="flex flex-col gap-8">
              {footerContactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 text-xl font-normal text-[var(--pr-bg-500)] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded"
                >
                  <i className={`${item.icon} text-2xl leading-none flex-shrink-0 text-brand-primary`} />
                  <span>
                    {item.label}: {item.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNS 2, 3, 4: LINK SECTIONS (60% width split into three columns = 20% each) */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 pl-0 md:pl-8 lg:pl-16">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-10">
                <h3 className="text-xl font-semibold text-neutral-900 uppercase">
                  {col.title}
                </h3>

                <ul className="flex flex-col gap-8">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-xl font-normal text-[var(--pr-bg-500)] hover:opacity-80 transition-opacity duration-150"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="border-t border-border-default pt-8 mt-8 flex items-center justify-center">
          <p className="text-xl font-normal text-[var(--pr-bg-500)] text-center">
            Copyright @ Langit Global Nusantara {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
