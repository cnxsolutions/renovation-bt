"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { navigation } from "@/data/navigation";
import { BUSINESS } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            type="button"
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            onClick={onClose}
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1" aria-label="Navigation mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-500"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
