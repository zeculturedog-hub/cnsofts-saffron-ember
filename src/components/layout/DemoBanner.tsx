"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, X, ExternalLink } from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Portfolio Demonstration Notice"
      className="bg-charcoal text-ivory text-xs border-b border-charcoal-light/60 py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center justify-center bg-copper/20 text-copper-light p-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-copper-light" />
          </span>
          <p className="font-normal text-ivory/90">
            <span className="font-medium text-white">Portfolio Concept Demonstration:</span>{" "}
            Fictional restaurant created by{" "}
            <strong className="text-copper-light">{restaurantConfig.agency.name}</strong> for dining
            brands in Dar es Salaam.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-xs">
          <Link
            href="/order"
            className="text-ivory-dark hover:text-copper-light underline underline-offset-2 transition-colors"
          >
            WhatsApp ordering active
          </Link>
          <span className="text-charcoal-muted" aria-hidden="true">•</span>
          <a
            href={restaurantConfig.agency.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-copper-light hover:text-white transition-colors"
          >
            <span>Cnsofts Agency</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-ivory-dark/60 hover:text-white ml-1 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
