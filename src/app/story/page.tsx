import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Flame, Anchor, HeartHandshake } from "lucide-react";

export default function StoryPage() {
  return (
    <div className="bg-ivory min-h-screen py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-ivory-dark/60 text-copper text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage & Spirit</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
            The Saffron & Ember Story
          </h1>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
            Born from a deep reverence for the Tanzanian coastline, ancient monsoon trade winds, and
            the timeless ritual of wood-fired hospitality.
          </p>
        </div>

        {/* Large Visual Feature */}
        <div className="relative h-[400px] lg:h-[550px] w-full overflow-hidden shadow-lg border border-ivory-dark">
          <Image
            src="/images/restaurant/hero.jpg"
            alt="Saffron & Ember coastal ambiance"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-xl">
            <span className="text-xs uppercase tracking-widest text-copper-light font-semibold block mb-1">
              Masaki Peninsula, Dar es Salaam
            </span>
            <p className="font-serif text-2xl sm:text-3xl leading-snug">
              &ldquo;Food is an act of memory, celebration, and shared light.&rdquo;
            </p>
          </div>
        </div>

        {/* Story Narrative 1: The Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-copper font-bold block">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
              Where Ancient Spice Routes Meet Modern Coastal Elegance
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
              For centuries, the Swahili coast was shaped by the dhows carrying cardamom, cinnamon, and
              precious saffron across the Indian Ocean. In Dar es Salaam, this culinary crossroads
              created one of the richest, most aromatic food cultures in the world.
            </p>
            <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
              <strong>Saffron & Ember</strong> was founded to honor this storied legacy through a
              contemporary lens. We discarded heavy, dated dining clichés in favor of luminous open
              spaces, warm neutral tones, organic linens, and food that speaks of salt, smoke, and
              soil.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-96 overflow-hidden shadow-md">
            <Image
              src="/images/restaurant/pasta.jpg"
              alt="Handmade crab pasta dish"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="bg-ivory-light border border-ivory-dark p-8 sm:p-14">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">Our Culinary Pillars</h3>
            <p className="text-xs text-charcoal-muted">
              Three convictions guide every menu created at our Masaki hearth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-ivory-dark bg-ivory p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-copper/15 flex items-center justify-center text-copper">
                <Anchor className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-charcoal">Ocean Respect</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                We collaborate directly with local artisanal fishermen in Kunduchi and Bagamoyo. We
                serve only sustainable, line-caught catches harvested within hours of service.
              </p>
            </div>

            <div className="border border-ivory-dark bg-ivory p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-copper/15 flex items-center justify-center text-copper">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-charcoal">The Living Hearth</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                Coconut charcoal, dry mangrove embers, and hardwood smoke imbue our meats, poultry,
                and crustacea with a nuanced warmth unmatched by conventional gas ranges.
              </p>
            </div>

            <div className="border border-ivory-dark bg-ivory p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-copper/15 flex items-center justify-center text-copper">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg text-charcoal">Swahili Hospitality</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                True coastal hospitality (ukarimu) is unhurried, warm, and attentive. Every guest is
                welcomed as if stepping into an intimate seaside sanctuary.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 pt-4">
          <h3 className="font-serif text-3xl text-charcoal">Be Part of the Evening</h3>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto">
            Reserve your table or order online for WhatsApp coordination to your home in Masaki or
            Oysterbay.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="px-6 py-3 bg-copper text-white text-xs font-semibold uppercase tracking-widest hover:bg-copper-dark transition-colors"
            >
              Explore Menu
            </Link>
            <Link
              href="/reservations"
              className="px-6 py-3 border border-charcoal text-charcoal text-xs font-semibold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
