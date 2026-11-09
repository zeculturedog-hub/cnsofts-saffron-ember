import { restaurantConfig } from "@/config/restaurant";
import { CartItem, OrderType } from "@/context/CartContext";

export interface OrderCustomerDetails {
  fullName: string;
  phone: string;
  orderType: OrderType;
  deliveryAddress?: string;
  specialNotes?: string;
}

export interface ReservationDetails {
  fullName: string;
  phone: string;
  email?: string;
  guests: number;
  date: string;
  time: string;
  seatingArea?: string;
  specialRequests?: string;
}

/**
 * Builds a properly formatted, URI-encoded WhatsApp ordering URL.
 * Target country code: +255 (Tanzania)
 */
export function generateWhatsAppOrderUrl(
  items: CartItem[],
  subtotal: number,
  deliveryFee: number,
  grandTotal: number,
  customer: OrderCustomerDetails
): string {
  const phoneTarget = restaurantConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");

  const timestamp = new Date().toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  let message = `🍽️ *NEW FOOD ORDER REQUEST — ${restaurantConfig.name.toUpperCase()}*\n`;
  message += `_Submitted on ${timestamp}_\n\n`;

  message += `*CUSTOMER DETAILS*\n`;
  message += `• *Name:* ${customer.fullName.trim()}\n`;
  message += `• *Phone:* ${customer.phone.trim()}\n`;
  message += `• *Order Type:* ${customer.orderType === "delivery" ? "🛵 Delivery (Masaki / Oysterbay)" : "🛍️ Dine-In / Takeaway Pickup"}\n`;

  if (customer.orderType === "delivery" && customer.deliveryAddress) {
    message += `• *Delivery Address / Landmark:* ${customer.deliveryAddress.trim()}\n`;
  }

  if (customer.specialNotes?.trim()) {
    message += `• *Special Instructions:* ${customer.specialNotes.trim()}\n`;
  }

  message += `\n*ORDER ITEMS*\n`;
  items.forEach((item, index) => {
    const lineTotal = item.menuItem.price * item.quantity;
    message += `${index + 1}. *${item.menuItem.name}* (x${item.quantity})\n`;
    message += `   ${restaurantConfig.currency.format(lineTotal)}\n`;
    if (item.notes) {
      message += `   _Note: ${item.notes}_\n`;
    }
  });

  message += `\n*PAYMENT SUMMARY*\n`;
  message += `• *Subtotal:* ${restaurantConfig.currency.format(subtotal)}\n`;
  if (customer.orderType === "delivery") {
    message += `• *Delivery Fee:* ${restaurantConfig.currency.format(deliveryFee)}\n`;
  }
  message += `• *Estimated Total:* ${restaurantConfig.currency.format(grandTotal)}\n\n`;

  message += `⚠️ *Note:* This is an order request. Please confirm item availability, preparation time, and delivery estimate.`;

  return `https://wa.me/${phoneTarget}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a properly formatted, URI-encoded WhatsApp reservation request URL.
 */
export function generateWhatsAppReservationUrl(details: ReservationDetails): string {
  const phoneTarget = restaurantConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");

  let message = `🥂 *TABLE RESERVATION REQUEST — ${restaurantConfig.name.toUpperCase()}*\n\n`;

  message += `*GUEST DETAILS*\n`;
  message += `• *Name:* ${details.fullName.trim()}\n`;
  message += `• *Phone:* ${details.phone.trim()}\n`;
  if (details.email?.trim()) {
    message += `• *Email:* ${details.email.trim()}\n`;
  }

  message += `\n*BOOKING DETAILS*\n`;
  message += `• *Number of Guests:* ${details.guests} ${details.guests === 1 ? "Guest" : "Guests"}\n`;
  message += `• *Date:* ${details.date}\n`;
  message += `• *Preferred Time:* ${details.time}\n`;
  if (details.seatingArea) {
    message += `• *Seating Preference:* ${details.seatingArea}\n`;
  }
  if (details.specialRequests?.trim()) {
    message += `• *Special Requests:* ${details.specialRequests.trim()}\n`;
  }

  message += `\n⚠️ *Booking Disclaimer:*\n`;
  message += `I understand this is a reservation request and is subject to manual confirmation by the Saffron & Ember reservations team.`;

  return `https://wa.me/${phoneTarget}?text=${encodeURIComponent(message)}`;
}
