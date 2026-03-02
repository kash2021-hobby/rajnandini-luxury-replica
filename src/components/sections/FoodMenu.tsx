import { useIsMobile } from "@/hooks/use-mobile";
import { Utensils, Leaf, Salad } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const menus = [
  {
    title: "Veg Food Menu",
    icon: Leaf,
    color: "text-primary",
    bg: "bg-primary/10",
    items: [
      "Paneer Butter Masala",
      "Dal Makhani",
      "Mixed Veg Curry",
      "Jeera Rice & Naan",
      "Gulab Jamun & Rasgulla",
      "Live Chaat Counter",
    ],
  },
  {
    title: "Non-Veg Food Menu",
    icon: Utensils,
    color: "text-secondary",
    bg: "bg-secondary/10",
    items: [
      "Butter Chicken",
      "Mutton Rogan Josh",
      "Fish Curry",
      "Chicken Biryani",
      "Tandoori Platter",
      "Dessert Assortment",
    ],
  },
  {
    title: "Jain Food Box",
    icon: Salad,
    color: "text-primary",
    bg: "bg-primary/10",
    items: [
      "No Onion No Garlic Sabzi",
      "Jain Dal Tadka",
      "Steamed Rice & Roti",
      "Dry Fruit Ladoo",
      "Fresh Fruit Platter",
      "Jain Snacks Counter",
    ],
  },
];

const MenuCard = ({ menu }: { menu: (typeof menus)[0] }) => {
  const Icon = menu.icon;
  return (
    <div className="bg-card border border-border rounded-3xl p-8 h-full flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`w-16 h-16 rounded-full ${menu.bg} flex items-center justify-center mb-6`}>
        <Icon className={`w-8 h-8 ${menu.color}`} />
      </div>
      <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
        {menu.title}
      </h3>
      <ul className="space-y-3 font-body text-muted-foreground w-full">
        {menu.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 justify-center">
            <span className={`w-1.5 h-1.5 rounded-full bg-primary shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FoodMenu = () => {
  const isMobile = useIsMobile();

  return (
    <section id="food-menu" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Our Menu
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Curated Culinary Experiences
          </h2>
        </div>

        {isMobile ? (
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {menus.map((menu, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%]">
                  <MenuCard menu={menu} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {menus.map((menu, i) => (
              <MenuCard key={i} menu={menu} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodMenu;
