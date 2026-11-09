"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { restaurantConfig } from "@/config/restaurant";

export default function StickyCartBar() {
  const pathname = usePathname();
  const { totalCount, grandTotal, openCart } = useCart();

  // Don't show sticky bar on /order page to avoid UI duplication
  if (totalCount === 0 || pathname === "/order") {
    return null;
  }

  return (
    <aside
      aria-label="Current Order Summary"
      className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-charcoal text-ivory border-t border-copper/30 px-4 py-3 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={openCart}
          className="flex items-center gap-2.5 text-left"
        >
          <div className="relative p-2 bg-copper/20 rounded-full text-copper-light">
            <ShoppingBag className="w-5 h-5 text-copper-light" />
            <span className="absolute -top-1 -right-1 bg-copper text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-ivory/70 block">
              {totalCount} {totalCount === 1 ? "Item" : "Items"}
            </span>
            <span className="font-serif text-sm font-semibold text-ivory">
              {restaurantConfig.currency.format(grandTotal)}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ivory-dark hover:text-white"
          >
            Review
          </button>
          <Link
            href="/order"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-copper text-white text-xs font-semibold uppercase tracking-wider hover:bg-copper-dark transition-colors"
          >
            <span>Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
