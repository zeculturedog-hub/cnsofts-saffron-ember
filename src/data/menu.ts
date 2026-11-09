export type MenuCategory = "all" | "starters" | "mains" | "seafood" | "desserts" | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  swahiliSubname?: string;
  description: string;
  price: number; // in Tanzanian Shillings (TZS)
  image: string;
  category: "starters" | "mains" | "seafood" | "desserts" | "drinks";
  dietary?: string[];
  featured?: boolean;
  preparationTime?: string;
}

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "all", label: "Full Menu" },
  { id: "starters", label: "Starters & Crudo" },
  { id: "seafood", label: "Indian Ocean Seafood" },
  { id: "mains", label: "Flame & Embers (Mains)" },
  { id: "desserts", label: "Artisanal Desserts" },
  { id: "drinks", label: "Botanicals & Cellar" },
];

export const menuItems: MenuItem[] = [
  // SEAFOOD
  {
    id: "seafood-king-prawns",
    name: "Charred Zanzibar King Prawns",
    swahiliSubname: "Kamba wa Kuchoma wa Zanzibar",
    description: "Line-caught Jumbo prawns basted in smoked chili-tamarind butter, garlic confit, toasted coconut flakes, and grilled lime.",
    price: 48000,
    image: "/images/restaurant/seafood.jpg",
    category: "seafood",
    dietary: ["Gluten-Free", "Chef's Signature", "Locally Sourced"],
    featured: true,
    preparationTime: "20-25 mins",
  },
  {
    id: "seafood-crab-tagliatelle",
    name: "Handcrafted Coastal Crab Pasta",
    swahiliSubname: "Tagliatelle na Kaa wa Masaki",
    description: "House-extruded pasta ribbons tossed with sweet blue swimmer crab, saffron velouté, cherry tomatoes, and micro samphire.",
    price: 42000,
    image: "/images/restaurant/pasta.jpg",
    category: "seafood",
    dietary: ["Chef's Signature"],
    featured: true,
    preparationTime: "18-22 mins",
  },
  {
    id: "seafood-snapper-carpaccio",
    name: "Cured Red Snapper Crudo",
    swahiliSubname: "Samaki Mnofu na Ndimu",
    description: "Delicately sliced Dar es Salaam snapper, compressed watermelon, passion fruit dressing, pink peppercorns, and cold-pressed coastal coconut oil.",
    price: 32000,
    image: "/images/restaurant/seafood.jpg",
    category: "starters",
    dietary: ["Raw / Crudo", "Gluten-Free"],
    featured: false,
    preparationTime: "12 mins",
  },

  // STARTERS
  {
    id: "starter-cassava-croquettes",
    name: "Spiced Cassava & Goat Cheese Beignets",
    swahiliSubname: "Kroketi za Muhogo na Jibini",
    description: "Crispy Morogoro cassava dumplings filled with whipped herbed chèvre, served with roasted coriander-chili aioli.",
    price: 24000,
    image: "/images/restaurant/grilled-chicken.jpg",
    category: "starters",
    dietary: ["Vegetarian"],
    featured: false,
    preparationTime: "15 mins",
  },
  {
    id: "starter-octopus-carpaccio",
    name: "Tender Coral Octopus",
    swahiliSubname: "Pweza wa Kuchoma",
    description: "Slow-braised then flame-kissed octopus tentacle, smoked paprika emulsion, saffron potato mousseline, and pickled caper berries.",
    price: 34000,
    image: "/images/restaurant/seafood.jpg",
    category: "starters",
    dietary: ["Gluten-Free", "Locally Sourced"],
    featured: true,
    preparationTime: "15 mins",
  },

  // MAINS / FLAME & EMBERS
  {
    id: "mains-flame-spiced-chicken",
    name: "Ember-Smoked Organic Spring Chicken",
    swahiliSubname: "Kuku wa Kienyeji wa Moshi",
    description: "Free-range Tanzanian chicken slow-roasted over coconut charcoal with wild baobab glaze, charred shallots, and fragrant coconut pilau.",
    price: 38000,
    image: "/images/restaurant/grilled-chicken.jpg",
    category: "mains",
    dietary: ["Halal", "Gluten-Free", "Chef's Signature"],
    featured: true,
    preparationTime: "25-30 mins",
  },
  {
    id: "mains-tanzanian-ribeye",
    name: "Kilimanjaro Dry-Aged Beef Ribeye (350g)",
    swahiliSubname: "Nyama ya Ng'ombe ya Kuchoma",
    description: "Wood-fired Prime Tanzanian pasture-raised ribeye, bone marrow reduction, charred broccolini, and cassava truffle purée.",
    price: 68000,
    image: "/images/restaurant/interior.jpg",
    category: "mains",
    dietary: ["Halal", "Gluten-Free"],
    featured: true,
    preparationTime: "25 mins",
  },
  {
    id: "mains-roasted-butternut",
    name: "Ember-Charred Butternut & Saffron Polenta",
    swahiliSubname: "Boga la Kuchoma na Polenta",
    description: "Spiced glazed squash, velvety coconut polenta, crispy pumpkin seeds, pomegranate reduction, and fresh sage oil.",
    price: 30000,
    image: "/images/restaurant/pasta.jpg",
    category: "mains",
    dietary: ["Vegan", "Gluten-Free"],
    featured: false,
    preparationTime: "20 mins",
  },

  // DESSERTS
  {
    id: "dessert-cardamom-panna-cotta",
    name: "Cardamom & Coconut Milk Panna Cotta",
    swahiliSubname: "Panna Cotta ya Nazi na Iliki",
    description: "Silky coastal coconut panna cotta infused with green cardamom, mango-passion fruit gelée, and toasted macadamia crumble.",
    price: 22000,
    image: "/images/restaurant/dessert.jpg",
    category: "desserts",
    dietary: ["Vegetarian", "Chef's Signature"],
    featured: true,
    preparationTime: "10 mins",
  },
  {
    id: "dessert-dark-chocolate-fondant",
    name: "Smoked Zanzibar Cacao Ganache Tart",
    swahiliSubname: "Tarti ya Chokoleti ya Zanzibar",
    description: "70% single-origin cacao ganache, fleur de sel, vanilla bean crème anglaise, and roasted cashew brittle.",
    price: 26000,
    image: "/images/restaurant/dessert.jpg",
    category: "desserts",
    dietary: ["Vegetarian"],
    featured: false,
    preparationTime: "12 mins",
  },

  // DRINKS
  {
    id: "drinks-tamarind-hibiscus-spritz",
    name: "The Masaki Sunset Spritz",
    swahiliSubname: "Kinywaji Maalum cha Masaki",
    description: "Tamarind infusion, wild hibiscus cordial, pressed lime, sparkling tonic, aromatic bitters, and torched rosemary sprig.",
    price: 18000,
    image: "/images/restaurant/drinks.jpg",
    category: "drinks",
    dietary: ["Signature Botanical", "Non-Alcoholic or Cocktail"],
    featured: true,
    preparationTime: "5 mins",
  },
  {
    id: "drinks-coastal-lemongrass-fizz",
    name: "Spiced Coastal Lemongrass Fizz",
    swahiliSubname: "Kinywaji cha Mchai Chai na Tangawizi",
    description: "Fresh crushed lemongrass, spicy ginger reduction, cloudy apple nectar, soda water, and crystallized ginger candy.",
    price: 16000,
    image: "/images/restaurant/drinks.jpg",
    category: "drinks",
    dietary: ["House Craft Tonic", "Refreshing"],
    featured: false,
    preparationTime: "5 mins",
  },
  {
    id: "drinks-serengeti-estate-coffee",
    name: "Single-Estate Kilimanjaro Pour-Over Coffee",
    swahiliSubname: "Kahawa Safi ya Kilimanjaro",
    description: "Direct-trade Arabica from the fertile slopes of Mount Kilimanjaro, roasted light-medium with notes of dark honey and citrus peel.",
    price: 12000,
    image: "/images/restaurant/hero.jpg",
    category: "drinks",
    dietary: ["Artisanal Roast"],
    featured: false,
    preparationTime: "6 mins",
  },
];
