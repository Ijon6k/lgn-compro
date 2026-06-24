import React from "react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  href: string;
}

export function ProductCard({ id, title, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col items-center justify-between p-6 sm:p-8 w-full aspect-square border border-border-default/10">
      {/* Product Image Wrapper */}
      <div className="relative w-full flex-1 min-h-[150px] sm:min-h-[200px] flex items-center justify-center">
        {/* TODO: Replace with actual LGN product image */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain object-center"
          draggable={false}
        />
      </div>

        {/* Product Title */}
        <div className="pt-4 sm:pt-6 pb-1">
          <h3 className="text-lg sm:text-2xl font-medium text-neutral-900 text-center tracking-tight leading-tight">
            {title}
          </h3>
        </div>
      </div>
  );
}

export default ProductCard;
