import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ShoppingBag, Clock, MapPin, Award, Sparkles, ChefHat } from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";
import { menuItems } from "@/data/menu";
import QuickAddButton from "@/components/menu/QuickAddButton";

export default function HomePage() {
  const featuredDishes = menuItems.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
        {/* Background Image with Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/restaurant/hero.jpg"
            alt="Saffron & Ember coastal dining room and candlelit tables in Masaki"
            fill
            priority
            className="object-cover object-center brightness-[0.62] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-ivory/20 bg-charcoal/40 backdrop-blur-sm text-copper-light text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-copper" />
            <span>Contemporary Coastal Dining • Masaki</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Where Coastal Ocean Breezes Meet Flame & Spices
          </h1>

          <p className="text-base sm:text-lg text-ivory/85 font-light max-w-2xl mx-auto leading-relaxed">
            Welcome to Saffron & Ember. Inspired by the Swahili coast and the warm hospitality of Dar
            es Salaam, we pair wood-fired gastronomy with line-caught Indian Ocean seafood.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/order"
              className="w-full sm:w-auto px-8 py-4 bg-copper text-white hover:bg-copper-dark text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 shadow-lg flex items-center justify-center gap-2.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online (WhatsApp)</span>
            </Link>

            <Link
              href="/reservations"
              className="w-full sm:w-auto px-8 py-4 border border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 backdrop-blur-xs flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4 text-copper-light" />
              <span>Reserve a Table</span>
            </Link>
          </div>

          {/* Quick Info Badges */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-ivory/15 text-xs text-ivory/80 font-light">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-copper shrink-0" />
              <span>Plot 142 Kahama Rd, Masaki</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-copper shrink-0" />
              <span>Open Tue–Sun from 12:00 PM</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-copper shrink-0" />
              <span>Direct WhatsApp Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION & ATMOSPHERE */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Teaser */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-copper font-bold block">
                The Saffron & Ember Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
                An Ode to Ocean Waves, Charred Spices & Masaki Hospitality
              </h2>
              <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
                Nestled on the quiet, leafy perimeter of the Oysterbay Peninsula, Saffron & Ember was
                conceived to elevate contemporary dining in Dar es Salaam.
              </p>
              <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
                Our kitchen honors Tanzanian heritage: fragrant Zanzibar cloves, wild coastal tamarind,
                and morning-caught seafood delivered directly from the shores of Kunduchi and Kigamboni,
                kissed by open coconut-husk embers.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <Link
                  href="/story"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-copper transition-colors"
                >
                  <span>Explore Our Story</span>
                  <ArrowRight className="w-4 h-4 text-copper" />
                </Link>
                <span className="text-ivory-dark" aria-hidden="true">|</span>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-copper hover:text-copper-dark transition-colors"
                >
                  <span>View All Dishes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Atmosphere Double Photo Frame */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative h-80 sm:h-96 rounded-none overflow-hidden shadow-md">
                <Image
                  src="/images/restaurant/interior.jpg"
                  alt="Saffron & Ember warm dining room with architectural wood accents"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 text-white text-xs">
                  <span className="font-serif text-sm block">Interior Sanctuary</span>
                  <span className="text-ivory/80 text-[11px]">Intimate indoor dining & cocktail bar</span>
                </div>
              </div>

              <div className="relative h-80 sm:h-96 rounded-none overflow-hidden shadow-md sm:translate-y-6">
                <Image
                  src="/images/restaurant/seafood.jpg"
                  alt="Grilled seafood catch prepared with coastal butter and aromatics"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 text-white text-xs">
                  <span className="font-serif text-sm block">Daily Coastal Catch</span>
                  <span className="text-ivory/80 text-[11px]">Line-caught along the Tanzanian coastline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-20 bg-ivory-light border-y border-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-copper font-bold block mb-2">
                Curated Signatures
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Crafted by Fire & Tides
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-copper transition-colors"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4 text-copper" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((item) => (
              <article
                key={item.id}
                className="bg-ivory border border-ivory-dark/70 flex flex-col group hover:border-copper/40 hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden bg-ivory-dark">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.dietary && item.dietary.length > 0 && (
                    <span className="absolute top-3 left-3 bg-charcoal/85 backdrop-blur-xs text-white text-[10px] uppercase font-semibold px-2 py-0.5 tracking-wider">
                      {item.dietary[0]}
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg text-charcoal group-hover:text-copper transition-colors leading-snug">
                        {item.name}
                      </h3>
                    </div>
                    {item.swahiliSubname && (
                      <p className="text-[11px] text-olive font-medium italic">
                        {item.swahiliSubname}
                      </p>
                    )}
                    <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ivory-dark flex items-center justify-between">
                    <span className="font-serif text-base font-semibold text-charcoal">
                      {restaurantConfig.currency.format(item.price)}
                    </span>
                    <QuickAddButton item={item} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE & CRAFT SECTION */}
      <section className="py-20 lg:py-28 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[420px] lg:h-[480px] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/restaurant/drinks.jpg"
                alt="Signature Masaki botanical cocktails and tamarind spritz"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 border border-ivory/15 pointer-events-none" />
            </div>

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-copper-light font-bold block">
                The Coastal Cellar & Bar
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
                Artisanal Botanicals, Smoked Spices & Sunset Spritzes
              </h2>
              <p className="text-ivory/80 text-sm sm:text-base leading-relaxed font-light">
                Our mixologists honor coastal botanicals — infusing Zanzibar cloves, fresh lemongrass,
                wild hibiscus petals, and tropical tamarind into handcrafted cordials.
              </p>
              <p className="text-ivory/70 text-sm leading-relaxed font-light">
                Whether dining on our breezy ocean terrace under Masaki stars or relaxing at the copper
                bar, our cellar offers a thoughtfully curated selection of organic wines, coastal
                cocktails, and single-estate Kilimanjaro pour-over roasts.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="px-6 py-3.5 bg-copper text-white hover:bg-copper-dark text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
                >
                  Explore Drinks & Desserts
                </Link>
                <Link
                  href="/reservations"
                  className="px-6 py-3.5 border border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Book an Evening Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP ORDERING & RESERVATION CTA BANNER */}
      <section className="py-16 bg-olive-dark text-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-ivory/10 flex items-center justify-center text-copper-light">
            <ChefHat className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Experience Saffron & Ember at Home or at Our Table
          </h2>
          <p className="text-sm sm:text-base text-ivory/85 max-w-2xl mx-auto font-light leading-relaxed">
            Order online with instant WhatsApp coordination across Masaki and Oysterbay, or request
            your terrace table for an unforgettable coastal evening.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/order"
              className="w-full sm:w-auto px-8 py-3.5 bg-copper text-white hover:bg-copper-dark text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
            >
              Order Online via WhatsApp
            </Link>
            <Link
              href="/reservations"
              className="w-full sm:w-auto px-8 py-3.5 border border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Reserve Table (Masaki)
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS QUICK OVERVIEW */}
      <section className="py-16 bg-ivory border-t border-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-charcoal">
            <div className="border border-ivory-dark p-6 bg-ivory-light flex items-start gap-4">
              <MapPin className="w-6 h-6 text-copper shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg font-medium">Masaki Peninsula</h3>
                <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                  {restaurantConfig.address.full}
                </p>
                <a
                  href={restaurantConfig.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-copper hover:underline mt-2 inline-block font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="border border-ivory-dark p-6 bg-ivory-light flex items-start gap-4">
              <Clock className="w-6 h-6 text-copper shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg font-medium">Service Hours</h3>
                <p className="text-xs text-charcoal-muted mt-1">
                  {restaurantConfig.hours.weekdays}
                </p>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  {restaurantConfig.hours.weekends}
                </p>
                <p className="text-[11px] text-olive mt-1 italic">
                  {restaurantConfig.hours.kitchenCloses}
                </p>
              </div>
            </div>

            <div className="border border-ivory-dark p-6 bg-ivory-light flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-copper shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg font-medium">Cnsofts Demonstration</h3>
                <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                  Portfolio website built for Dar es Salaam hospitality brands looking for bespoke
                  design, seamless WhatsApp ordering, and mobile refinement.
                </p>
                <Link
                  href="/contact"
                  className="text-xs text-copper hover:underline mt-2 inline-block font-medium"
                >
                  Contact Agency & Inquiries →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
