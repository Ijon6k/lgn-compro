import React from "react";
import { Button } from "@/components/ui/button";
import { contactUsLink } from "@/data/navigation";

export const metadata = {
  title: "404 Page Not Found | Langit Global Nusantara",
  description: "The page you are looking for is not found.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-text-primary px-6 py-12">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[600px] mx-auto text-center flex flex-col items-center gap-8 sm:gap-10">
        {/* Large 404 Text */}
        <div className="select-none">
          <span className="text-[100px] sm:text-[140px] font-semibold leading-none tracking-tighter text-brand-primary block">
            404
          </span>
        </div>

        {/* Header Text */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight uppercase text-text-primary leading-tight font-sans">
            Page Not Found
          </h1>
          <p className="text-base sm:text-xl font-normal text-text-secondary leading-relaxed max-w-[500px] mx-auto">
            The page you are looking for may have been moved, deleted, or is
            temporarily unavailable.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
            Back to Home
          </Button>
          <Button
            href={contactUsLink.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            target="_blank"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </main>
  );
}
