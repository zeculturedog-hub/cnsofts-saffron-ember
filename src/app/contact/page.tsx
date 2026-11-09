"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Dining Question",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-ivory min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-ivory-dark/60 text-copper text-xs font-semibold uppercase tracking-[0.2em]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Masaki, Dar es Salaam</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
            Connect & Find Us
          </h1>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
            We are situated on the tranquil perimeter of Masaki, minutes from the Sea Cliff hotel.
            Reach our concierge team for dining inquiries, event bookings, or directions.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: WhatsApp */}
          <div className="border border-ivory-dark bg-ivory-light p-8 space-y-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <h2 className="font-serif text-xl text-charcoal">Instant WhatsApp Concierge</h2>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              Chat directly with our reservations and takeaway team for fast assistance.
            </p>
            <a
              href={`https://wa.me/${restaurantConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors shadow-xs"
            >
              Open WhatsApp Chat
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="border border-ivory-dark bg-ivory-light p-8 space-y-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-copper/15 flex items-center justify-center text-copper">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl text-charcoal">Direct Telephone</h2>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              Call our host stand during restaurant opening hours for immediate queries.
            </p>
            <a
              href={`tel:${restaurantConfig.contact.phoneCallable}`}
              className="mt-auto px-5 py-2.5 bg-charcoal text-white text-xs font-semibold uppercase tracking-wider hover:bg-copper transition-colors"
            >
              {restaurantConfig.contact.phoneDisplay}
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="border border-ivory-dark bg-ivory-light p-8 space-y-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-olive/15 flex items-center justify-center text-olive">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl text-charcoal">Masaki Location</h2>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              {restaurantConfig.address.full}
            </p>
            <a
              href={restaurantConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 px-5 py-2.5 border border-charcoal text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-charcoal hover:text-white transition-colors"
            >
              <span>Google Maps Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Form & Operating Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-ivory-light border border-ivory-dark p-8 sm:p-10 space-y-6">
            <div className="border-b border-ivory-dark pb-4">
              <h2 className="font-serif text-2xl text-charcoal">Send Us an Inquiry</h2>
              <p className="text-xs text-charcoal-muted mt-1">
                For private celebrations, corporate dinners, or general inquiries.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-ivory border border-olive/30 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-olive mx-auto" />
                <h3 className="font-serif text-xl text-charcoal">Inquiry Received</h3>
                <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
                  Thank you for contacting Saffron & Ember. In this demonstration concept, inquiries
                  are previewed. For fast response, please reach us via WhatsApp!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 border border-charcoal text-xs uppercase font-semibold tracking-wider text-charcoal hover:bg-charcoal hover:text-white"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-charcoal mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Temu"
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-charcoal mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-charcoal mb-1">
                      Phone Number (+255)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+255 7XX XXX XXX"
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-charcoal mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                    >
                      <option>General Dining Question</option>
                      <option>Private Dining Suite Booking</option>
                      <option>Corporate Dinner or Event</option>
                      <option>Press / Agency Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-charcoal mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, preferred date, or inquiry..."
                    className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3.5 bg-copper text-white text-xs font-semibold uppercase tracking-widest hover:bg-copper-dark transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Operating Hours & Interactive Map Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-charcoal text-ivory p-8 space-y-6">
              <div className="flex items-center gap-2 text-copper-light text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>

              <div className="space-y-4 text-xs text-ivory/80">
                <div className="border-b border-charcoal-light pb-3">
                  <p className="font-semibold text-white text-sm">Tuesday to Thursday</p>
                  <p className="text-copper-light mt-0.5">12:00 PM – 11:00 PM</p>
                  <p className="text-ivory/60 mt-0.5">Lunch, Aperitivo & Dinner</p>
                </div>

                <div className="border-b border-charcoal-light pb-3">
                  <p className="font-semibold text-white text-sm">Friday to Sunday</p>
                  <p className="text-copper-light mt-0.5">12:00 PM – Midnight</p>
                  <p className="text-ivory/60 mt-0.5">Full Dining, Sunset Spritz & Late Bar</p>
                </div>

                <div>
                  <p className="font-semibold text-white text-sm">Mondays</p>
                  <p className="text-ivory/60 mt-0.5">Closed for culinary curation & inventory</p>
                </div>
              </div>
            </div>

            {/* Fictional Demonstration Notice */}
            <div className="border border-ivory-dark bg-ivory-light p-6 space-y-3">
              <div className="flex items-center gap-2 text-copper font-medium text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Demonstration Notice</span>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                This website is a demonstration concept developed by{" "}
                <strong className="text-charcoal font-medium">Cnsofts</strong> in Dar es Salaam to
                illustrate modern digital experiences for premium hospitality clients. Phone numbers
                and details can be updated directly in the configuration file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
