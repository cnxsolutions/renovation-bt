"use client";

import { useState } from "react";

interface AvantApresProps {
  avantSrc: string;
  apresSrc: string;
  alt: string;
  className?: string;
}

export function AvantApres({ avantSrc, apresSrc, alt, className = "" }: AvantApresProps) {
  const [showApres, setShowApres] = useState(false);

  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-xl ${className}`}>
      {/* Image Avant */}
      <img
        src={avantSrc}
        alt={`${alt} - Avant`}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          showApres ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Image Après */}
      <img
        src={apresSrc}
        alt={`${alt} - Après`}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          showApres ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Sélecteur */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        <button
          type="button"
          onClick={() => setShowApres(false)}
          aria-pressed={!showApres}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
            !showApres
              ? "bg-orange-700 text-white shadow-md"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          Avant
        </button>
        <button
          type="button"
          onClick={() => setShowApres(true)}
          aria-pressed={showApres}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
            showApres
              ? "bg-orange-700 text-white shadow-md"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          Après
        </button>
      </div>
    </div>
  );
}

interface SingleImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SingleImage({ src, alt, className = "" }: SingleImageProps) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-xl ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
