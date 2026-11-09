export interface RestaurantConfig {
  name: string;
  tagline: string;
  concept: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    country: string;
    full: string;
    googleMapsUrl: string;
  };
  contact: {
    phoneDisplay: string;
    phoneCallable: string;
    whatsappNumber: string; // E.164 without +, e.g. 255700000000
    whatsappDisplay: string;
    email: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
    kitchenCloses: string;
  };
  currency: {
    code: string;
    symbol: string;
    format: (amount: number) => string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  agency: {
    name: string;
    tagline: string;
    website: string;
  };
}

export const restaurantConfig: RestaurantConfig = {
  name: "Saffron & Ember",
  tagline: "Contemporary Coastal Dining",
  concept: "Coastal culinary refinement marrying Swahili ocean catches with flame-grilled warmth and botanical infusions.",
  address: {
    street: "Plot 142 Kahama Road, Oysterbay Peninsula",
    neighborhood: "Masaki",
    city: "Dar es Salaam",
    country: "Tanzania",
    full: "Plot 142 Kahama Road, Masaki, Dar es Salaam, Tanzania",
    googleMapsUrl: "https://maps.google.com/?q=Masaki,+Dar+es+Salaam,+Tanzania",
  },
  contact: {
    phoneDisplay: "+255 784 550 120",
    phoneCallable: "+255784550120",
    whatsappNumber: "255784550120", // Configurable WhatsApp destination number (Tanzania +255)
    whatsappDisplay: "+255 784 550 120",
    email: "hospitality@saffronandember.co.tz",
  },
  hours: {
    weekdays: "Tuesday – Thursday: 12:00 PM – 11:00 PM",
    weekends: "Friday – Sunday: 12:00 PM – Midnight (Closed Mondays)",
    kitchenCloses: "Kitchen closes 1 hour prior to closing",
  },
  currency: {
    code: "TZS",
    symbol: "TZS",
    format: (amount: number) => {
      return `TZS ${amount.toLocaleString("en-US")}`;
    },
  },
  social: {
    instagram: "https://instagram.com/cnsofts.tz",
    facebook: "https://facebook.com/cnsofts",
  },
  agency: {
    name: "Cnsofts",
    tagline: "Digital Services & Web Architecture in Dar es Salaam",
    website: "https://cnsofts.com",
  },
};
