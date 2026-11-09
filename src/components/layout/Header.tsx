"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu as MenuIcon, X, Calendar, ArrowRight } from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on route change without effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Subtle header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-ivory-dark/60 py-3.5"
          : "bg-ivory/90 backdrop-blur-sm border-b border-ivory-dark/40 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-charcoal group-hover:text-copper transition-colors">
              Saffron & Ember
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-olive font-medium -mt-0.5">
              Masaki • Dar es Salaam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors py-1 relative ${
                    isActive
                      ? "text-copper font-medium"
                      : "text-charcoal-light hover:text-copper"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-copper rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Cart */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Cart Trigger */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open shopping cart with ${totalCount} items`}
              className="relative p-2.5 rounded-full text-charcoal hover:text-copper hover:bg-ivory-dark/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-copper text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-in fade-in zoom-in-75">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Desktop Reserve CTA */}
            <Link
              href="/reservations"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal border border-charcoal/30 rounded-none hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5 text-copper" />
              <span>Reserve</span>
            </Link>

            {/* Primary Order Online CTA */}
            <Link
              href="/order"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-copper text-white hover:bg-copper-dark transition-all duration-200 shadow-sm"
            >
              <span>Order Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-md text-charcoal hover:text-copper hover:bg-ivory-dark/40 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-ivory-dark bg-ivory/98 px-6 pt-5 pb-8 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-serif py-2 border-b border-ivory-dark/50 flex items-center justify-between ${
                    isActive ? "text-copper font-medium" : "text-charcoal"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-copper" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/order"
              className="w-full text-center py-3 bg-copper text-white text-sm font-semibold tracking-wider uppercase rounded-none hover:bg-copper-dark transition-colors shadow-sm"
            >
              Order Online via WhatsApp
            </Link>
            <Link
              href="/reservations"
              className="w-full text-center py-3 border border-charcoal text-charcoal text-sm font-semibold tracking-wider uppercase rounded-none hover:bg-charcoal hover:text-white transition-colors"
            >
              Book a Table
            </Link>
          </div>

          <div className="pt-2 text-xs text-charcoal-muted text-center">
            <p>{restaurantConfig.address.full}</p>
            <p className="mt-1 text-copper">{restaurantConfig.contact.phoneDisplay}</p>
          </div>
        </div>
      )}
    </header>
  );
}
