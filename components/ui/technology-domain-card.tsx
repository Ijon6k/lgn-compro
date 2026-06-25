import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TechnologyDomainCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export function TechnologyDomainCard({
  id,
  title,
  description,
  image,
  href,
}: TechnologyDomainCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden group w-full flex flex-col justify-between p-8 sm:p-10 border border-border-default/20 min-h-[380px] sm:min-h-[423px] sm:max-w-[484px] sm:aspect-[484/423] mx-auto">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        {/* TODO: Replace with real LGN domain asset later */}
        <Image
          src={image}
          alt={`${title} background`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
        />
      </div>

      {/* 2. Image Overlay Layer (bg-black/20) */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* 3. Card Content (Top-Left) */}
      <div className="relative z-20 flex flex-col gap-3 text-left">
        <h3 className="text-2xl font-medium text-white tracking-tight">
          {id} {title}
        </h3>
        <p className="text-base sm:text-lg font-normal text-white/90 leading-relaxed max-w-[480px]">
          {description}
        </p>
      </div>

      {/* 4. CTA Button (Bottom-Left) */}
      <div className="relative z-20 self-start">
        <Link
          href={href}
          className="inline-flex items-center justify-center h-[42px] px-6 rounded-full border border-white text-sm font-medium text-white bg-transparent hover:bg-white/10 active:scale-[0.98] transition-all duration-300"
        >
          Explore &gt;
        </Link>
      </div>
    </div>
  );
}

export default TechnologyDomainCard;
