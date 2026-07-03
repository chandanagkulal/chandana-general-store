const imageUrl = (relativePath) => new URL(relativePath, import.meta.url).href;

export const productCategories = [
  {
    title: "Fresh Vegetables",
    image: imageUrl("../assets/images/vegetables.jpg"),
  },
  {
    title: "Fresh Fruits",
    image: imageUrl("../assets/images/fruits.jpg"),
  },
  {
    title: "Dairy Products",
    image: imageUrl("../assets/images/dairy.jpg"),
  },
  {
    title: "Rice & Grains",
    image: imageUrl("../assets/images/rice.jpg"),
  },
  {
    title: "Pulses",
    image: imageUrl("../assets/images/pulses.jpg"),
  },
  {
    title: "Spices & Masalas",
    image: imageUrl("../assets/images/spices.jpg"),
  },
  {
    title: "Biscuits & Snacks",
    image: imageUrl("../assets/images/biscuits.jpg"),
  },
  {
    title: "Soft Drinks",
    image: imageUrl("../assets/images/softdrinks.jpg"),
  },
  {
    title: "Chocolates",
    image: imageUrl("../assets/images/chocolates.jpg"),
  },
  {
    title: "Personal Care",
    image: imageUrl("../assets/images/personalcare.jpg"),
  },
  {
    title: "Household Essentials",
    image: imageUrl("../assets/images/household.jpg"),
  },
  {
    title: "Stationery",
    image: imageUrl("../assets/images/stationery.jpg"),
  },
];