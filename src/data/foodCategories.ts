import menuChinese from "@/assets/menu-chinese.jpg";
import menuVeg from "@/assets/menu-veg-new.jpg";
import menuNonveg from "@/assets/menu-nonveg-new.jpg";
import menuBirthday from "@/assets/menu-birthday.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";

// Placeholder images for food items (we'll use category images as placeholders)
const defaultFoodImage = menuVeg;

export interface FoodItem {
  name: string;
  image: string;
}

export interface FoodCategory {
  slug: string;
  title: string;
  image: string;
  description: string;
  items: FoodItem[];
}

export const foodCategories: FoodCategory[] = [
  {
    slug: "chinese-foods",
    title: "Chinese Foods",
    image: menuChinese,
    description: "Delicious Chinese cuisine crafted with authentic flavors.",
    items: [
      { name: "Hakka Noodles", image: menuChinese },
      { name: "Veg Manchurian", image: menuChinese },
      { name: "Spring Rolls", image: menuChinese },
      { name: "Fried Rice", image: menuChinese },
      { name: "Chilli Paneer", image: menuChinese },
      { name: "Sweet & Sour Chicken", image: menuChinese },
      { name: "Dim Sum Platter", image: menuChinese },
      { name: "Hot & Sour Soup", image: menuChinese },
    ],
  },
  {
    slug: "veg-foods",
    title: "Veg Foods",
    image: menuVeg,
    description: "A rich selection of vegetarian delights for every palate.",
    items: [
      { name: "Paneer Butter Masala", image: menuVeg },
      { name: "Dal Makhani", image: menuVeg },
      { name: "Mixed Veg Curry", image: menuVeg },
      { name: "Jeera Rice & Naan", image: menuVeg },
      { name: "Palak Paneer", image: menuVeg },
      { name: "Aloo Gobi", image: menuVeg },
      { name: "Veg Biryani", image: menuVeg },
      { name: "Live Chaat Counter", image: menuVeg },
    ],
  },
  {
    slug: "non-veg-foods",
    title: "Non-Veg Foods",
    image: menuNonveg,
    description: "Premium non-vegetarian dishes prepared by expert chefs.",
    items: [
      { name: "Butter Chicken", image: menuNonveg },
      { name: "Mutton Rogan Josh", image: menuNonveg },
      { name: "Fish Curry", image: menuNonveg },
      { name: "Chicken Biryani", image: menuNonveg },
      { name: "Tandoori Platter", image: menuNonveg },
      { name: "Prawn Masala", image: menuNonveg },
      { name: "Seekh Kebab", image: menuNonveg },
      { name: "Egg Curry", image: menuNonveg },
    ],
  },
  {
    slug: "birthday-foods",
    title: "Birthday Foods",
    image: menuBirthday,
    description: "Special birthday menu to make celebrations memorable.",
    items: [
      { name: "Custom Birthday Cake", image: menuBirthday },
      { name: "Cupcake Tower", image: menuBirthday },
      { name: "Pastry Assortment", image: menuBirthday },
      { name: "Mini Sandwiches", image: menuBirthday },
      { name: "Pizza Bites", image: menuBirthday },
      { name: "Chocolate Fountain", image: menuBirthday },
      { name: "Cookie Platter", image: menuBirthday },
      { name: "Candy & Popcorn Bar", image: menuBirthday },
    ],
  },
  {
    slug: "drinks",
    title: "Drinks",
    image: menuDrinks,
    description: "Refreshing beverages and signature mocktails for every occasion.",
    items: [
      { name: "Fresh Fruit Juices", image: menuDrinks },
      { name: "Mango Lassi", image: menuDrinks },
      { name: "Masala Chai Station", image: menuDrinks },
      { name: "Cold Coffee", image: menuDrinks },
      { name: "Signature Mocktails", image: menuDrinks },
      { name: "Lemon Mint Cooler", image: menuDrinks },
      { name: "Rose Sharbat", image: menuDrinks },
      { name: "Buttermilk (Chaas)", image: menuDrinks },
    ],
  },
];
