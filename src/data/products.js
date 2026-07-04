const imageUrl = (relativePath) => new URL(relativePath, import.meta.url).href;

export const productCategories = [
  {
    title: "Fresh Vegetables",
    image: imageUrl("../assets/images/vegetables.jpg"),
    items: ["Tomato", "Onion", "Potato", "Carrot", "Beans", "Leafy greens"],
  },
  {
    title: "Fresh Fruits",
    image: imageUrl("../assets/images/fruits.jpg"),
    items: [
      "Banana",
      "Apple",
      "Orange",
      "Grapes",
      "Pomegranate",
      "Seasonal fruits",
    ],
  },
  {
    title: "Dairy Products",
    image: imageUrl("../assets/images/dairy.jpg"),
    items: ["Milk", "Curd", "Butter", "Paneer", "Cheese", "Lassi"],
  },
  {
    title: "Rice & Grains",
    image: imageUrl("../assets/images/rice.jpg"),
    items: ["Rice", "Wheat", "Rava", "Poha", "Flour", "Semolina"],
  },
  {
    title: "Pulses",
    image: imageUrl("../assets/images/pulses.jpg"),
    items: [
      "Toor dal",
      "Moong dal",
      "Chana dal",
      "Urad dal",
      "Rajma",
      "Green gram",
    ],
  },
  {
    title: "Spices & Masalas",
    image: imageUrl("../assets/images/spices.jpg"),
    items: [
      "Chilli powder",
      "Turmeric",
      "Coriander powder",
      "Garam masala",
      "Pepper",
      "Jeera",
    ],
  },
  {
    title: "Biscuits & Snacks",
    image: imageUrl("../assets/images/biscuits.jpg"),
    items: ["Biscuits", "Chips", "Namkeen", "Cakes", "Mixture", "Cookies"],
  },
  {
    title: "Soft Drinks",
    image: imageUrl("../assets/images/softdrinks.jpg"),
    items: [
      "Cold drinks",
      "Juice",
      "Soda",
      "Energy drinks",
      "Packaged water",
      "Flavoured drinks",
    ],
  },
  {
    title: "Chocolates",
    image: imageUrl("../assets/images/chocolates.jpg"),
    items: [
      "Chocolate bars",
      "Candies",
      "Toffees",
      "Wafers",
      "Gift packs",
      "Kids treats",
    ],
  },
  {
    title: "Personal Care",
    image: imageUrl("../assets/images/personalcare.jpg"),
    items: ["Soap", "Shampoo", "Toothpaste", "Toothbrush", "Hair oil", "Face wash"],
  },
  {
    title: "Household Essentials",
    image: imageUrl("../assets/images/household.jpg"),
    items: [
      "Detergent",
      "Dishwash",
      "Floor cleaner",
      "Tissues",
      "Garbage bags",
      "Cleaning items",
    ],
  },
  {
    title: "Stationery",
    image: imageUrl("../assets/images/stationery.jpg"),
    items: ["Pens", "Pencils", "Notebooks", "Erasers", "Sharpeners", "School supplies"],
  },
];
