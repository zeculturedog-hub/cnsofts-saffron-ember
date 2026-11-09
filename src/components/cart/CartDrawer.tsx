"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { restaurantConfig } from "@/config/restaurant";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    grandTotal,
    orderType,
    setOrderType,
  } = useCart();

  const dialogRef = useRef<HTMLDialogElement>(null);

  // Synchronize modal state with native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isCartOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isCartOpen]);

  // Handle native Esc or cancel event
  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    closeCart();
  };

  // Close when clicking backdrop (light dismiss)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (dialog && e.target === dialog) {
      closeCart();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-labelledby="cart-title"
      className="m-0 p-0 ml-auto h-full max-h-none w-full max-w-md bg-transparent backdrop:bg-charcoal/60 backdrop:backdrop-blur-sm fixed right-0 top-0 z-50 text-charcoal outline-none overflow-hidden"
    >
      <div className="h-full bg-ivory flex flex-col shadow-2xl border-l border-ivory-dark">
        {/* Header */}
        <div className="px-6 py-5 border-b border-ivory-dark flex items-center justify-between bg-ivory-light">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-copper" />
            <h2 id="cart-title" className="font-serif text-xl font-medium tracking-tight text-charcoal">
              Your Order Basket
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1.5 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-ivory-dark/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Type Toggle */}
        <div className="px-6 py-3 bg-ivory border-b border-ivory-dark/60">
          <div className="flex rounded-none p-1 bg-ivory-dark/40 border border-ivory-dark text-xs font-semibold uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setOrderType("pickup")}
              className={`flex-1 py-1.5 text-center transition-all ${
                orderType === "pickup"
                  ? "bg-charcoal text-white shadow-xs"
                  : "text-charcoal-light hover:text-charcoal"
              }`}
            >
              Takeaway / Pickup
            </button>
            <button
              type="button"
              onClick={() => setOrderType("delivery")}
              className={`flex-1 py-1.5 text-center transition-all ${
                orderType === "delivery"
                  ? "bg-charcoal text-white shadow-xs"
                  : "text-charcoal-light hover:text-charcoal"
              }`}
            >
              Delivery (+TZS 5,000)
            </button>
          </div>
          {orderType === "delivery" && (
            <p className="text-[11px] text-olive-dark mt-1 text-center">
              Available across Masaki, Oysterbay & Sea Cliff areas
            </p>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-ivory-dark/40 flex items-center justify-center text-charcoal-muted">
                <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-lg text-charcoal">Your basket is empty</p>
                <p className="text-xs text-charcoal-muted max-w-xs">
                  Explore our flame-grilled specialties, coastal seafood, and botanical drinks.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 px-6 py-2.5 bg-copper text-white text-xs font-semibold uppercase tracking-wider hover:bg-copper-dark transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.menuItem.id}
                className="flex gap-3.5 pb-4 border-b border-ivory-dark/60 last:border-b-0"
              >
                {/* Thumbnail */}
                <div className="relative w-16 h-16 shrink-0 bg-ivory-dark overflow-hidden">
                  <Image
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-medium text-charcoal line-clamp-1">
                      {item.menuItem.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => removeItem(item.menuItem.id)}
                      aria-label={`Remove ${item.menuItem.name} from basket`}
                      className="text-charcoal-muted hover:text-red-600 transition-colors p-0.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs font-serif text-copper mt-0.5">
                    {restaurantConfig.currency.format(item.menuItem.price * item.quantity)}
                  </p>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="inline-flex items-center border border-ivory-dark bg-ivory-light">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="p-1 hover:bg-ivory-dark text-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-medium text-charcoal">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="p-1 hover:bg-ivory-dark text-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-[11px] text-charcoal-muted">
                      {restaurantConfig.currency.format(item.menuItem.price)} each
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotals & WhatsApp Checkout Link */}
        {items.length > 0 && (
          <div className="border-t border-ivory-dark p-6 bg-ivory-light space-y-4">
            <div className="space-y-1.5 text-xs text-charcoal">
              <div className="flex justify-between">
                <span className="text-charcoal-muted">Subtotal</span>
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
              <div className="flex justify-between text-sm font-semibold text-charcoal pt-2 border-t border-ivory-dark">
                <span>Estimated Total</span>
                <span className="text-copper font-serif text-base">
                  {restaurantConfig.currency.format(grandTotal)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Link
                href="/order"
                onClick={closeCart}
                className="w-full flex items-center justify-center gap-2 py-3 bg-copper text-white text-xs font-semibold uppercase tracking-widest hover:bg-copper-dark transition-colors shadow-sm"
              >
                <span>Proceed to WhatsApp Order</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-charcoal-muted hover:text-red-600 transition-colors text-[11px]"
                >
                  Clear basket
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="text-copper hover:underline text-[11px]"
                >
                  Continue browsing
                </button>
              </div>
            </div>

            <p className="text-[10px] text-center text-charcoal-muted leading-tight">
              Orders are manually reviewed and confirmed via WhatsApp. No upfront online card charge.
            </p>
          </div>
        )}
      </div>
    </dialog>
  );
}
