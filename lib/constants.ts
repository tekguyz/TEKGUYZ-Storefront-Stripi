export const PRODUCT = {
  name: "Downey Voice Writing Student Bundle",
  subtitle: "with 14-inch Laptop",
  price: 3299.00,
  priceFormatted: "$3,299.00",
  currency: "USD",
  variantId: "46595245047969",
  productId: "8567183048865",
  image: "/downey-voicewriting-student-14.jpg",
  imageAlt: "Downey Voice Writing Bundle — ThinkPad laptop with Ultimate Double Dragon 2 Stenomask",
  vendor: "Advantage Software",
  inStock: true,
} as const;

export const PAYPAL = {
  clientId: "ASS6T18fyk_HffxgojUmHfizu7JN8kJenGoij4PI6SKdH1U34WM9dKFWnuY9NQ7ET4T61vDrIrjxsqcY",
  environment: "sandbox" as const,
  currency: "USD",
  intent: "capture" as const,
} as const;

export const BUNDLE_ITEMS = [
  {
    id: "computer",
    category: "Computer System",
    icon: "laptop",
    items: [
      "Business-Class 14-inch Laptop Optimized for Voice Writers",
      "AMD Ryzen AI 7 PRO 350 Processor, 32GB DDR5 Memory, 1TB SSD",
      "Eclipse & Speechmatics Ready",
      "3-Year Premier Support Warranty",
      "4-Port USB Hub",
      "Laptop Case",
    ],
  },
  {
    id: "software",
    category: "Software",
    icon: "cpu",
    items: [
      "Eclipse Student Software",
      "500 Speech Hours",
    ],
  },
  {
    id: "equipment",
    category: "Voice Writing Equipment",
    icon: "mic",
    items: [
      "Ultimate Double Dragon 2 Stenomask",
      "MuffleMitt-AM",
      "Headphones",
    ],
  },
  {
    id: "support",
    category: "Training & Support",
    icon: "graduation-cap",
    items: [
      "Anytime Support™",
      "$400 Webinar Credit (in addition to the 50% Student Discount)",
    ],
  },
] as const;

export const TRUST_ITEMS = [
  { label: "Warranty", value: "3-Year Premier" },
  { label: "Speech Hours", value: "500 Included" },
  { label: "Support", value: "Anytime™" },
  { label: "Webinar", value: "$400 Credit" },
] as const;
