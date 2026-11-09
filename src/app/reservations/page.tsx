"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Users, Clock, MessageCircle, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";
import { generateWhatsAppReservationUrl } from "@/utils/whatsapp";

const timeSlots = [
  "12:30 PM (Lunch)",
  "01:00 PM (Lunch)",
  "01:30 PM (Lunch)",
  "02:00 PM (Lunch)",
  "06:00 PM (Sunset Dinner)",
  "06:30 PM (Dinner)",
  "07:00 PM (Dinner)",
  "07:30 PM (Dinner)",
  "08:00 PM (Dinner)",
  "08:30 PM (Dinner)",
  "09:00 PM (Late Dinner)",
];

const seatingAreas = [
  "Ocean Terrace (Open-Air Coastal Breeze)",
  "Main Dining Sanctuary (Intimate Wood & Ember)",
  "Chef's Counter & Cellar Bar",
  "Private Dining Suite (Subject to minimum spend)",
];

export default function ReservationsPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+255 ");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("2026-11-10");
  const [time, setTime] = useState(timeSlots[4]);
  const [seatingArea, setSeatingArea] = useState(seatingAreas[0]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim()) {
      setErrorMsg("Please enter your name for the reservation.");
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 9) {
      setErrorMsg("Please provide a valid phone number (e.g. +255 7XX XXX XXX).");
      return;
    }

    if (!date) {
      setErrorMsg("Please select a reservation date.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    if (date < currentDate) {
      setErrorMsg("Reservation date cannot be in the past. Please choose a future date.");
      return;
    }

    const whatsappUrl = generateWhatsAppReservationUrl({
      fullName,
      phone,
      email: email.trim() || undefined,
      guests,
      date,
      time,
      seatingArea,
      specialRequests: specialRequests.trim() || undefined,
    });

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-ivory min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-ivory-dark/60 text-copper text-xs font-semibold uppercase tracking-[0.2em]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight">
            Reserve Your Coastal Table
          </h1>
          <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
            Join us on the Oysterbay Peninsula for candlelit coastal dining, flame-grilled catches,
            and sunset cocktails over the Indian Ocean.
          </p>
        </div>

        {/* Main Grid: Form + Experience Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-ivory-light border border-ivory-dark p-6 sm:p-10 shadow-sm space-y-8">
            <div className="border-b border-ivory-dark pb-4 space-y-1">
              <h2 className="font-serif text-2xl text-charcoal">Reservation Request Form</h2>
              <p className="text-xs text-charcoal-muted">
                Please complete your preferences. Your request will be forwarded via WhatsApp for
                host confirmation.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Fatma Al-Harthy"
                    className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                  >
                    Phone / WhatsApp (+255) *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+255 7XX XXX XXX"
                    className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  Email Address (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                />
              </div>

              {/* Booking Specifics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                  >
                    Guests *
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                    <Users className="w-3.5 h-3.5 text-charcoal-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                  >
                    Date *
                  </label>
                  <input
                    id="date"
                    type="date"
                    min="2026-11-09"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                  >
                    Time Slot *
                  </label>
                  <div className="relative">
                    <select
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper appearance-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <Clock className="w-3.5 h-3.5 text-charcoal-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Seating Preference */}
              <div className="pt-2">
                <label
                  htmlFor="seatingArea"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  Seating Area Preference
                </label>
                <select
                  id="seatingArea"
                  value={seatingArea}
                  onChange={(e) => setSeatingArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                >
                  {seatingAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                >
                  Special Occasion or Dietary Notes
                </label>
                <textarea
                  id="specialRequests"
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Birthday anniversary celebration, window table preferred, dairy allergy..."
                  className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper resize-none"
                />
              </div>

              {/* Disclaimer Notice */}
              <div className="p-4 bg-copper/10 border-l-3 border-copper text-xs text-charcoal space-y-1.5">
                <div className="font-semibold text-copper-dark flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Important Reservation Notice</span>
                </div>
                <p className="text-[11px] text-charcoal-muted leading-relaxed">
                  Submitting this form does <strong>NOT</strong> instantly confirm your table. Your
                  request is immediately routed to our reservations manager on WhatsApp. Your booking
                  is secured only once you receive a direct WhatsApp confirmation message from our team.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit Reservation Request via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: Atmosphere & Policies */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative h-80 w-full overflow-hidden shadow-md">
              <Image
                src="/images/restaurant/interior.jpg"
                alt="Saffron & Ember dining table setting"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="bg-ivory-light border border-ivory-dark p-6 space-y-5">
              <h3 className="font-serif text-xl text-charcoal">Hospitality & Dining Policy</h3>
              <ul className="space-y-3 text-xs text-charcoal-muted">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>
                    <strong>Grace Period:</strong> Tables are held for 20 minutes past reserved time
                    before release.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>
                    <strong>Large Parties:</strong> Parties of 8 or more require a pre-selected
                    family-style tasting menu.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>
                    <strong>Dress Code:</strong> Smart casual coastal attire is warmly welcomed.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Inquiries:</strong> Reach our concierge at{" "}
                    <a
                      href={`tel:${restaurantConfig.contact.phoneCallable}`}
                      className="text-copper hover:underline font-semibold"
                    >
                      {restaurantConfig.contact.phoneDisplay}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
