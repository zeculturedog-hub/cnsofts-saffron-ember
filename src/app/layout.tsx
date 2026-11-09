import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import DemoBanner from "@/components/layout/DemoBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import StickyCartBar from "@/components/cart/StickyCartBar";
import { restaurantConfig } from "@/config/restaurant";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${restaurantConfig.name} | Contemporary Coastal Dining Masaki`,
    template: `%s | ${restaurantConfig.name}`,
  },
  description:
    "Contemporary coastal dining in Masaki, Dar es Salaam. Wood-fired Swahili ocean catches, flame-kissed gastronomy, and bespoke WhatsApp table reservations.",
  keywords: [
    "Masaki restaurant",
    "Dar es Salaam dining",
    "coastal dining Tanzania",
    "Saffron and Ember",
    "seafood Masaki",
    "WhatsApp food order Dar es Salaam",
    "Cnsofts restaurant portfolio",
  ],
  authors: [{ name: "Cnsofts", url: "https://cnsofts.com" }],
  openGraph: {
    title: `${restaurantConfig.name} — Contemporary Coastal Dining Masaki`,
    description:
      "Contemporary coastal dining in Masaki, Dar es Salaam. Modern WhatsApp ordering and reservations.",
    siteName: restaurantConfig.name,
    locale: "en_TZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal selection:bg-copper selection:text-white">
        <CartProvider>
          <DemoBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <StickyCartBar />
        </CartProvider>
      </body>
    </html>
  );
}
