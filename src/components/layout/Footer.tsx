import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory border-t border-charcoal-light/40">
      {/* Top Editorial Bar */}
      <div className="border-b border-charcoal-light/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-tight">
              Saffron & Ember
            </h2>
            <p className="text-olive-light text-sm tracking-widest uppercase mt-1">
              Contemporary Coastal Dining • Masaki, Dar es Salaam
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/reservations"
              className="px-6 py-3 border border-copper text-copper-light hover:bg-copper hover:text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200"
            >
              Reserve a Table
            </Link>
            <Link
              href="/order"
              className="px-6 py-3 bg-copper text-white hover:bg-copper-dark text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-sm"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Concept & Location */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-copper-light">
              Location & Haven
            </h3>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              Perched along the serene coastal edge of the Oysterbay Peninsula, Saffron & Ember pairs
              the vibrancy of Swahili coastal spices with flame-fired artisanal gastronomy.
            </p>
            <div className="flex items-start gap-2.5 text-xs text-ivory/70 pt-2">
              <MapPin className="w-4 h-4 text-copper shrink-0 mt-0.5" />
              <span>{restaurantConfig.address.full}</span>
            </div>
            <div>
              <a
                href={restaurantConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-copper-light hover:underline font-medium"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Dining Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-copper-light">
              Dining Hours
            </h3>
            <div className="space-y-3 text-sm text-ivory/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-copper shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-medium text-ivory">Dinner & Cocktails</p>
                  <p className="text-xs text-ivory/70">{restaurantConfig.hours.weekdays}</p>
                  <p className="text-xs text-ivory/70">{restaurantConfig.hours.weekends}</p>
                </div>
              </div>
              <p className="text-xs text-olive-light italic pt-1">
                {restaurantConfig.hours.kitchenCloses}
              </p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-copper-light">
              Experience
            </h3>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>
                <Link href="/menu" className="hover:text-copper-light transition-colors">
                  Seasonal Menu & Crudo
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-copper-light transition-colors">
                  Online Takeaway & Delivery
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-copper-light transition-colors">
                  Table Reservations
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-copper-light transition-colors">
                  Our Culinary Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-copper-light transition-colors">
                  Contact & Private Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Reservations */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-copper-light">
              Connect With Us
            </h3>
            <div className="space-y-3 text-xs text-ivory/80">
              <a
                href={`tel:${restaurantConfig.contact.phoneCallable}`}
                className="flex items-center gap-2.5 hover:text-copper-light transition-colors"
              >
                <Phone className="w-4 h-4 text-copper shrink-0" />
                <span>{restaurantConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${restaurantConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-copper-light transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-copper shrink-0" />
                <span>WhatsApp: {restaurantConfig.contact.whatsappDisplay}</span>
              </a>
              <a
                href={restaurantConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-copper-light transition-colors"
              >
                <svg
                  className="w-4 h-4 text-copper shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@cnsofts.tz / Instagram</span>
              </a>
            </div>

            <div className="pt-3 border-t border-charcoal-light/40">
              <span className="text-[11px] uppercase tracking-wider text-olive-light block mb-1">
                Agency Showcase
              </span>
              <p className="text-xs text-ivory/60 leading-relaxed">
                Engineered by{" "}
                <a
                  href={restaurantConfig.agency.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper-light underline underline-offset-2 hover:text-white"
                >
                  {restaurantConfig.agency.name}
                </a>{" "}
                to showcase modern digital hospitality solutions in Dar es Salaam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Agency Attribution */}
      <div className="border-t border-charcoal-light/40 py-6 text-xs text-ivory/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © 2026 {restaurantConfig.name}. Fictional concept created for
            demonstration purposes.
          </p>
          <div className="flex items-center gap-4 text-ivory/60">
            <span>Masaki, Oysterbay Peninsula</span>
            <span>•</span>
            <a
              href={restaurantConfig.agency.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper-light hover:text-white transition-colors"
            >
              Cnsofts Digital Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
