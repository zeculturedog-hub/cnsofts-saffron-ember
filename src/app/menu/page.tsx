"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShoppingBag, Search } from "lucide-react";
import { menuItems, menuCategories, MenuCategory } from "@/data/menu";
import { restaurantConfig } from "@/config/restaurant";
import QuickAddButton from "@/components/menu/QuickAddButton";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.swahiliSubname &&
          item.swahiliSubname.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-ivory min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-ivory-dark/60 text-copper text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seasonal Dining & Crudo</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
            The Saffron & Ember Menu
          </h1>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
            A coastal culinary journey celebrating the Indian Ocean shores of Dar es Salaam,
            fragrant spice gardens of Zanzibar, and wood-fired mastery.
          </p>

          <div className="p-3 bg-ivory-light border border-ivory-dark inline-block text-xs text-charcoal-muted max-w-xl">
            <span className="font-medium text-copper">Demonstration Menu:</span> All items,
            descriptions, and prices in Tanzanian Shillings (TZS) represent a realistic concept for
            Masaki dining.
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-ivory-dark pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? "bg-charcoal text-white border-charcoal shadow-sm"
                    : "bg-ivory text-charcoal-light border-ivory-dark hover:border-charcoal/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full pl-9 pr-4 py-2 bg-ivory-light border border-ivory-dark text-xs text-charcoal placeholder:text-charcoal-muted/70 focus:outline-none focus:border-copper"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <p className="font-serif text-xl text-charcoal">No dishes match your search.</p>
            <p className="text-xs text-charcoal-muted">
              Try adjusting your search terms or clearing the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-copper text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-ivory-light border border-ivory-dark flex flex-col group hover:border-copper/40 hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-ivory-dark">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {item.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="bg-charcoal/85 backdrop-blur-xs text-white text-[10px] uppercase font-semibold px-2 py-0.5 tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.preparationTime && (
                    <span className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-xs text-ivory text-[10px] px-2 py-0.5">
                      ⏱ {item.preparationTime}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl text-charcoal group-hover:text-copper transition-colors leading-snug">
                      {item.name}
                    </h3>
                    {item.swahiliSubname && (
                      <p className="text-xs text-olive font-medium italic">
                        {item.swahiliSubname}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ivory-dark flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-charcoal-muted block">
                        Price
                      </span>
                      <span className="font-serif text-lg font-semibold text-charcoal">
                        {restaurantConfig.currency.format(item.price)}
                      </span>
                    </div>

                    <QuickAddButton item={item} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Order CTA */}
        <div className="mt-16 p-8 bg-charcoal text-ivory flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-copper">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl text-white">Ordering for Takeaway or Delivery?</h3>
            <p className="text-xs text-ivory/70 max-w-xl font-light">
              We pack orders with insulated eco-friendly packaging to retain wood-fired flavor.
              Direct WhatsApp coordination to your Masaki or Oysterbay residence.
            </p>
          </div>
          <Link
            href="/order"
            className="shrink-0 px-6 py-3.5 bg-copper text-white text-xs font-bold uppercase tracking-widest hover:bg-copper-dark transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Complete Order</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
