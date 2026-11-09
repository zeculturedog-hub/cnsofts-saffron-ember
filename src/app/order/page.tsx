"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Truck,
  Store,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { restaurantConfig } from "@/config/restaurant";
import { generateWhatsAppOrderUrl } from "@/utils/whatsapp";

export default function OrderPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    grandTotal,
    orderType,
    setOrderType,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("+255 ");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (items.length === 0) {
      setErrorMsg("Your basket is empty. Please add items from our menu first.");
      return;
    }

    if (!customerName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    const cleanPhone = customerPhone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 9) {
      setErrorMsg("Please provide a valid phone number (e.g. +255 7XX XXX XXX).");
      return;
    }

    if (orderType === "delivery" && !deliveryAddress.trim()) {
      setErrorMsg("Please provide a delivery address or landmark in Masaki/Oysterbay.");
      return;
    }

    const whatsappUrl = generateWhatsAppOrderUrl(
      items,
      subtotal,
      deliveryFee,
      grandTotal,
      {
        fullName: customerName,
        phone: customerPhone,
        orderType,
        deliveryAddress: orderType === "delivery" ? deliveryAddress : undefined,
        specialNotes,
      }
    );

    // Open WhatsApp in new tab / application
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-ivory min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-copper font-bold block">
            Direct Kitchen Coordination
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-charcoal tracking-tight">
            Order Online via WhatsApp
          </h1>
          <p className="text-charcoal-muted text-sm sm:text-base max-w-2xl font-light">
            Review your basket, select takeaway pickup or coastal delivery in Dar es Salaam, and
            submit your order directly to our WhatsApp service team.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="border border-ivory-dark bg-ivory-light p-12 text-center max-w-2xl mx-auto space-y-5">
            <div className="w-16 h-16 rounded-full bg-ivory-dark/40 flex items-center justify-center mx-auto text-charcoal-muted">
              <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif text-2xl text-charcoal">Your basket is currently empty</h2>
              <p className="text-xs text-charcoal-muted max-w-md mx-auto">
                Explore our wood-fired catches, flame-kissed poultry, handmade pastas, and coastal
                desserts.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-copper text-white text-xs font-semibold uppercase tracking-widest hover:bg-copper-dark transition-colors"
            >
              <span>Explore The Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Cart Items Review */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border border-ivory-dark bg-ivory-light p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-ivory-dark pb-4">
                  <h2 className="font-serif text-xl text-charcoal">
                    Order Items ({items.length})
                  </h2>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-charcoal-muted hover:text-red-600 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="divide-y divide-ivory-dark/70">
                  {items.map((item) => (
                    <div key={item.menuItem.id} className="py-4 flex gap-4 items-center">
                      <div className="relative w-20 h-20 shrink-0 bg-ivory-dark overflow-hidden">
                        <Image
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-base text-charcoal font-medium">
                            {item.menuItem.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeItem(item.menuItem.id)}
                            aria-label={`Remove ${item.menuItem.name}`}
                            className="text-charcoal-muted hover:text-red-600 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-charcoal-muted line-clamp-1 mt-0.5">
                          {item.menuItem.description}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="inline-flex items-center border border-ivory-dark bg-ivory">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.menuItem.id, item.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="p-1.5 hover:bg-ivory-dark transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-xs font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.menuItem.id, item.quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="p-1.5 hover:bg-ivory-dark transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="font-serif text-base font-semibold text-charcoal">
                              {restaurantConfig.currency.format(
                                item.menuItem.price * item.quantity
                              )}
                            </span>
                            <span className="text-[11px] text-charcoal-muted block">
                              {restaurantConfig.currency.format(item.menuItem.price)} each
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-right">
                  <Link
                    href="/menu"
                    className="text-xs text-copper hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>+ Add more items from menu</span>
                  </Link>
                </div>
              </div>

              {/* Order Mode Toggle */}
              <div className="border border-ivory-dark bg-ivory-light p-6 space-y-4">
                <h3 className="font-serif text-lg text-charcoal">Choose Fulfillment Method</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setOrderType("pickup")}
                    className={`p-4 border text-left transition-all flex items-start gap-3 ${
                      orderType === "pickup"
                        ? "border-charcoal bg-charcoal text-white shadow-sm"
                        : "border-ivory-dark bg-ivory hover:border-charcoal/40 text-charcoal"
                    }`}
                  >
                    <Store className="w-5 h-5 shrink-0 mt-0.5 text-copper-light" />
                    <div>
                      <p className="text-sm font-semibold">Takeaway Pickup</p>
                      <p
                        className={`text-xs mt-1 ${
                          orderType === "pickup" ? "text-ivory/80" : "text-charcoal-muted"
                        }`}
                      >
                        Collect at restaurant counter in Masaki. Ready in ~20-30 mins.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType("delivery")}
                    className={`p-4 border text-left transition-all flex items-start gap-3 ${
                      orderType === "delivery"
                        ? "border-charcoal bg-charcoal text-white shadow-sm"
                        : "border-ivory-dark bg-ivory hover:border-charcoal/40 text-charcoal"
                    }`}
                  >
                    <Truck className="w-5 h-5 shrink-0 mt-0.5 text-copper-light" />
                    <div>
                      <p className="text-sm font-semibold">
                        Masaki Delivery (+TZS 5,000)
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          orderType === "delivery" ? "text-ivory/80" : "text-charcoal-muted"
                        }`}
                      >
                        Delivery across Masaki, Oysterbay & Sea Cliff areas.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Checkout Details Form & WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-6">
              <form
                onSubmit={handleSubmitOrder}
                className="border border-ivory-dark bg-ivory-light p-6 space-y-6 shadow-sm sticky top-28"
              >
                <div className="border-b border-ivory-dark pb-3">
                  <h2 className="font-serif text-xl text-charcoal">Delivery & Contact Details</h2>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Required for your WhatsApp order routing
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-4 text-xs">
                  <div>
                    <label
                      htmlFor="customerName"
                      className="block font-semibold uppercase tracking-wider text-charcoal mb-1"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Amani Mwamba"
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="customerPhone"
                      className="block font-semibold uppercase tracking-wider text-charcoal mb-1"
                    >
                      WhatsApp Phone Number (Tanzania +255) *
                    </label>
                    <input
                      id="customerPhone"
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+255 7XX XXX XXX"
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper"
                    />
                  </div>

                  {orderType === "delivery" && (
                    <div>
                      <label
                        htmlFor="deliveryAddress"
                        className="block font-semibold uppercase tracking-wider text-charcoal mb-1"
                      >
                        Delivery Address / Landmark (Masaki / Oysterbay) *
                      </label>
                      <textarea
                        id="deliveryAddress"
                        required
                        rows={2}
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="e.g. Plot 24 Chole Road, near Sea Cliff Hotel, Masaki"
                        className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper resize-none"
                      />
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="specialNotes"
                      className="block font-semibold uppercase tracking-wider text-charcoal mb-1"
                    >
                      Special Instructions or Dietary Preferences (Optional)
                    </label>
                    <textarea
                      id="specialNotes"
                      rows={2}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Extra chili sauce, pack utensils, cutlery..."
                      className="w-full px-3.5 py-2.5 bg-ivory border border-ivory-dark text-xs text-charcoal focus:outline-none focus:border-copper resize-none"
                    />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-ivory-dark pt-4 space-y-2 text-xs text-charcoal">
                  <div className="flex justify-between">
                    <span className="text-charcoal-muted">Items Subtotal</span>
                    <span className="font-medium">{restaurantConfig.currency.format(subtotal)}</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between">
                      <span className="text-charcoal-muted">Masaki Delivery Fee</span>
                      <span className="font-medium">
                        {restaurantConfig.currency.format(deliveryFee)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-semibold pt-2 border-t border-ivory-dark">
                    <span>Estimated Total</span>
                    <span className="text-copper font-serif text-lg">
                      {restaurantConfig.currency.format(grandTotal)}
                    </span>
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <div className="p-3 bg-ivory border border-ivory-dark space-y-1.5 text-[11px] text-charcoal-muted">
                  <div className="flex items-center gap-1.5 text-charcoal font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-olive" />
                    <span>How WhatsApp Ordering Works:</span>
                  </div>
                  <p className="leading-relaxed">
                    1. Clicking will launch WhatsApp pre-filled with your items and address.
                  </p>
                  <p className="leading-relaxed">
                    2. Our hospitality team manually verifies preparation time and coordinates delivery.
                  </p>
                  <p className="leading-relaxed">
                    3. No online card details entered. Payment is made upon delivery/pickup via M-Pesa, Airtel Money, or cash.
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
