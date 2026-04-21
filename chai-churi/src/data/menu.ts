export type Category =
  | "Healthy Fest Specials"
  | "Chai"
  | "Churi"
  | "Combos"
  | "Salads"
  | "Starter"
  | "Breads"
  | "Pizza"
  | "Pasta"
  | "Burgers"
  | "Sandwiches"
  | "Snacks"
  | "Maggi"
  | "Wraps"
  | "Drinks / Beverages"
  | "Cold Milk"
  | "Hot Milk"
  | "Lassi"
  | "Hot Coffee"
  | "Cold Coffee"
  | "Shakes"
  | "Mojitos";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  veg: true;
  image: string;
  tag?: string;
}

export interface CategoryMeta {
  name: Category;
  description: string;
  image: string;
}

// Category hero images (premium food photography — Unsplash)
const IMG = {
  chai:
    "https://images.unsplash.com/photo-1597318281675-d407b84ffcd7?auto=format&fit=crop&w=900&q=80",
  chaiAlt:
    "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=900&q=80",
  chaiGlass:
    "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80",
  churi:
    "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80",
  churiAlt:
    "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=900&q=80",
  pizza:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  pizzaMargh:
    "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=900&q=80",
  pizzaThin:
    "https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&w=900&q=80",
  burger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  burgerVeg:
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80",
  sandwich:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  sandwichGrill:
    "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=80",
  shake:
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
  shakeChoc:
    "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=900&q=80",
  mojito:
    "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80",
  mojitoAlt:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
  coldCoffee:
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
  hotCoffee:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  maggi:
    "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
  fries:
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
  friesLoaded:
    "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=80",
  paratha:
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  saladGreen:
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  wrap:
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
  lassi:
    "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=900&q=80",
  milk:
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
  milkHot:
    "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  nimbu:
    "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=80",
  starter:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  pasta:
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80",
  pastaWhite:
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
  garlicBread:
    "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=900&q=80",
  cornBowl:
    "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?auto=format&fit=crop&w=900&q=80",
  poha:
    "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80",
  combo:
    "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=80",
};

// Helper to pick an image based on item name keywords
function pickImage(name: string, category: Category): string {
  const n = name.toLowerCase();
  if (n.includes("margherita")) return IMG.pizzaMargh;
  if (n.includes("thin crust")) return IMG.pizzaThin;
  if (category === "Pizza") return IMG.pizza;
  if (n.includes("maharaja") || n.includes("paneer burger") || n.includes("cheese burger"))
    return IMG.burger;
  if (category === "Burgers") return IMG.burgerVeg;
  if (n.includes("bombay") || n.includes("kaccha") || n.includes("ccc special sand"))
    return IMG.sandwich;
  if (category === "Sandwiches") return IMG.sandwichGrill;
  if (category === "Churi") return n.includes("dry") ? IMG.churi : IMG.churiAlt;
  if (category === "Chai") {
    if (n.includes("gud") || n.includes("masala")) return IMG.chaiAlt;
    if (n.includes("kesar") || n.includes("rose") || n.includes("choc"))
      return IMG.chaiGlass;
    return IMG.chai;
  }
  if (category === "Shakes") return n.includes("choc") || n.includes("kitkat") || n.includes("dairy") ? IMG.shakeChoc : IMG.shake;
  if (category === "Mojitos") return n.includes("blue") || n.includes("green") ? IMG.mojitoAlt : IMG.mojito;
  if (category === "Cold Coffee") return IMG.coldCoffee;
  if (category === "Hot Coffee") return IMG.hotCoffee;
  if (category === "Maggi") return IMG.maggi;
  if (category === "Wraps") return IMG.wrap;
  if (category === "Lassi") return IMG.lassi;
  if (category === "Cold Milk") return IMG.milk;
  if (category === "Hot Milk") return IMG.milkHot;
  if (category === "Breads") return IMG.paratha;
  if (category === "Starter") return IMG.starter;
  if (category === "Pasta") return n.includes("white") ? IMG.pastaWhite : IMG.pasta;
  if (category === "Combos") return IMG.combo;
  if (category === "Salads") return n.includes("gym") ? IMG.saladGreen : IMG.salad;
  if (category === "Drinks / Beverages") {
    if (n.includes("coffee")) return IMG.coldCoffee;
    return IMG.nimbu;
  }
  if (category === "Snacks") {
    if (n.includes("garlic bread")) return IMG.garlicBread;
    if (n.includes("loaded")) return IMG.friesLoaded;
    if (n.includes("fries")) return IMG.fries;
    if (n.includes("poha")) return IMG.poha;
    return IMG.fries;
  }
  if (category === "Healthy Fest Specials") {
    if (n.includes("corn")) return IMG.cornBowl;
    if (n.includes("poha")) return IMG.poha;
    return IMG.saladGreen;
  }
  return IMG.combo;
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function make(
  category: Category,
  items: Array<[name: string, price: number, tag?: string]>,
): Product[] {
  return items.map(([name, price, tag]) => ({
    id: `${slug(category)}-${slug(name)}`,
    name,
    price,
    category,
    veg: true as const,
    image: pickImage(name, category),
    tag,
  }));
}

export const PRODUCTS: Product[] = [
  ...make("Healthy Fest Specials", [
    ["Healthy Fest Gym Salad", 190, "Healthy"],
    ["Healthy Fest Virat Kohli Salad", 250, "Signature"],
    ["Poha", 145],
    ["Sweet Corn", 130],
    ["Masala Corn", 140],
    ["Peanut Corn", 180],
  ]),
  ...make("Chai", [
    ["Adrak Chai", 160],
    ["Elaichi Chai", 160],
    ["Chocolate Chai", 160, "New"],
    ["Paan Chai", 160],
    ["Rose Chai", 160],
    ["Masala Chai", 160, "Popular"],
    ["Gud Elaichi Chai", 160],
    ["Masala Gud Chai", 160],
    ["Gud Chai", 160],
    ["Adrak Elaichi Chai", 160],
    ["Kesar Chai", 160, "Premium"],
  ]),
  ...make("Churi", [
    ["Dry Fruits Churi [100 G]", 130, "Signature"],
    ["Desi Ghee Churi [100 G]", 90, "Bestseller"],
  ]),
  ...make("Combos", [
    ["Aloo Tikki Burger With Fries And Coke [200 Ml]", 179, "Combo"],
    ["Chai And Fan", 175, "Classic"],
  ]),
  ...make("Salads", [
    ["Gym Salad", 139],
    ["Peanut Corn Salad", 139],
    ["Virat Kohli Salad", 209, "Signature"],
  ]),
  ...make("Starter", [["Hara Bhara Kebab", 220]]),
  ...make("Breads", [
    ["Aloo Paratha", 100],
    ["Paneer Paratha", 130],
    ["Mix Paratha", 130],
  ]),
  ...make("Pizza", [
    ["6 In 1 Pizza [12 Inches]", 449, "Mega"],
    ["Margherita Pizza [12 Inches]", 420],
    ["Classic Mexican Pizza [12 Inches]", 420],
    ["Makhani Paneer Pizza [12 Inches]", 420, "Chef's Pick"],
    ["Thin Crust Pizza [12 Inches]", 420],
    ["Onion Pizza [7 Inches]", 190],
    ["Capsicum Pizza [7 Inches]", 190],
    ["Corn Pizza [7 Inches]", 190],
    ["Paneer Pizza [7 Inches]", 220],
    ["Onion And Capsicum Pizza [7 Inches]", 275],
    ["Onion And Corn Pizza [7 Inches]", 275],
    ["Onion And Paneer Pizza [7 Inches]", 275],
    ["All Veg Multi Topping Pizza [7 Inches]", 320, "Loaded"],
  ]),
  ...make("Pasta", [
    ["Home Style Macaroni", 159],
    ["Home Style Pasta", 245],
    ["Mix Sauce Pasta", 275, "Chef's Pick"],
    ["White Sauce Pasta", 260],
    ["Red Sauce Pasta", 220],
  ]),
  ...make("Burgers", [
    ["Aloo Tikki Burger", 70, "Value"],
    ["Veg Burger", 100],
    ["Veg Cheese Burger", 130],
    ["Veg Paneer Burger", 145],
    ["Makhani Paneer Burger", 150, "New"],
    ["Maharaja Burger", 175, "King Size"],
  ]),
  ...make("Sandwiches", [
    ["Churi Special Bombay Kaccha Sandwich", 220, "Signature"],
    ["Diet Sandwich", 145],
    ["Paneer Special Sandwich", 145],
    ["Corn Masala Sandwich", 145],
    ["CCC Special Sandwich", 160, "Bestseller"],
    ["Hara Bhara Special Sandwich", 220],
    ["Bombay Kaccha Sandwich", 220],
    ["Paneer Taka Tak Sandwich", 145],
    ["Veggie Grilled Sandwich", 145],
    ["Aloo Toast Sandwich", 140],
    ["Desi Ghee Aloo Toast Sandwich", 160],
  ]),
  ...make("Snacks", [
    ["Stuffed Garlic Bread", 230, "Popular"],
    ["Desi Ghee Poha", 109],
    ["Cheese Shots", 175],
    ["Plain Fries", 130],
    ["Masala Fries", 160],
    ["Peri Peri Fries", 125],
    ["Mix Loaded Fries", 190, "Loaded"],
    ["Maska Bun", 45, "Classic"],
    ["Garlic Bun", 50],
    ["Garlic Shots", 120],
    ["Chatpata Mint Fries", 190],
    ["French Toast", 80],
    ["Aloo Toast", 89],
    ["Desi Ghee Aloo Toast", 119],
    ["Cheese Corn Roll", 160],
  ]),
  ...make("Maggi", [
    ["Plain Maggi", 90],
    ["Double Masala Maggi", 100],
    ["Vegetable Maggi", 100],
    ["Cheese And Paneer Maggi", 115],
    ["CCC Special Maggi", 160, "Signature"],
  ]),
  ...make("Wraps", [
    ["Mexican Wrap", 175],
    ["Desi Paneer Wrap", 190, "Bestseller"],
    ["Aloo Wrap", 130],
    ["Veg Wrap", 145],
    ["Peri Peri Wrap", 175],
  ]),
  ...make("Drinks / Beverages", [
    ["Nimbu Pani", 100],
    ["Lemonade", 145],
    ["Masala Lemonade", 145],
    ["CCC Special Coffee", 200, "Signature"],
  ]),
  ...make("Cold Milk", [
    ["Elaichi Milk [400 Ml]", 130],
    ["Badam Milk [400 Ml]", 145, "Premium"],
  ]),
  ...make("Hot Milk", [
    ["Gud Wala Doodh", 160],
    ["Kesar Doodh", 160, "Premium"],
    ["Badam Milk", 160],
    ["Choco Doodh", 160],
    ["Elaichi Doodh", 160],
  ]),
  ...make("Lassi", [
    ["Meethi Lassi", 85],
    ["Namkeen Lassi", 85],
  ]),
  ...make("Hot Coffee", [
    ["Hot Coffee", 160],
    ["Black Hot Coffee", 160],
    ["Choco Hot Coffee", 160],
    ["Caramel Coffee", 160, "Popular"],
    ["Hazelnut Coffee", 160],
  ]),
  ...make("Cold Coffee", [
    ["Plain Cold Coffee", 109],
    ["Caramel Cold Coffee", 119],
    ["Choco Cold Coffee", 129],
    ["Hazelnut Cold Coffee", 200, "Premium"],
    ["CCC Special Cold Coffee", 149, "Signature"],
  ]),
  ...make("Shakes", [
    ["Strawberry Shake", 160],
    ["Butterscotch Shake", 160],
    ["Vanilla Shake", 175],
    ["Oreo Milkshake", 190, "Popular"],
    ["Blueberry Shake", 190],
    ["Chocolate Shake", 190],
    ["KitKat Shake", 200, "Bestseller"],
    ["Dairy Milk Shake", 200],
    ["Blackcurrant Shake", 190],
  ]),
  ...make("Mojitos", [
    ["Virgin Mojito", 145, "Classic"],
    ["Green Apple Mojito", 160],
    ["Watermelon Mojito", 175],
    ["Peach Mojito", 175],
    ["Blueberry Mojito", 175],
    ["Blue Curacao Mojito", 175, "Premium"],
  ]),
];

export const CATEGORIES: CategoryMeta[] = [
  { name: "Chai", description: "11 authentic chai blends", image: IMG.chai },
  { name: "Churi", description: "Traditional premium churi", image: IMG.churiAlt },
  { name: "Burgers", description: "From value to Maharaja", image: IMG.burgerVeg },
  { name: "Sandwiches", description: "Bombay, grilled & more", image: IMG.sandwichGrill },
  { name: "Pizza", description: "7\" & 12\" hand-tossed", image: IMG.pizza },
  { name: "Pasta", description: "Red, white & mix sauce", image: IMG.pasta },
  { name: "Snacks", description: "Fries, toasts, rolls", image: IMG.fries },
  { name: "Maggi", description: "Classic to CCC special", image: IMG.maggi },
  { name: "Wraps", description: "Hand-rolled goodness", image: IMG.wrap },
  { name: "Shakes", description: "Creamy thick shakes", image: IMG.shake },
  { name: "Mojitos", description: "Refreshing mocktails", image: IMG.mojito },
  { name: "Hot Coffee", description: "Barista-crafted brews", image: IMG.hotCoffee },
  {
    name: "Healthy Fest Specials",
    description: "Light, gym-friendly bites",
    image: IMG.saladGreen,
  },
];

export const ALL_CATEGORIES: Category[] = Array.from(
  new Set(PRODUCTS.map((p) => p.category)),
) as Category[];
