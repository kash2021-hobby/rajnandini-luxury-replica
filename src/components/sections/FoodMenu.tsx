import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import menuVeg from "@/assets/menu-veg.jpg";
import menuNonveg from "@/assets/menu-nonveg.jpg";
import menuJain from "@/assets/menu-jain.jpg";

const menus = [
  {
    title: "Veg Food Menu",
    image: menuVeg,
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
    image: menuNonveg,
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
    image: menuJain,
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

const MenuCard = ({ menu }: { menu: (typeof menus)[0] }) => (
  <div className="bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img
        src={menu.image}
        alt={menu.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex flex-col items-center text-center flex-1">
      <h3 className="font-heading text-2xl font-semibold text-foreground mb-5">
        {menu.title}
      </h3>
      <ul className="space-y-2.5 font-body text-muted-foreground w-full">
        {menu.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

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
          <Carousel opts={{ align: "start", loop: true, dragFree: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {menus.map((menu, i) => (
                <CarouselItem key={i} className="pl-4 basis-[85%]">
                  <MenuCard menu={menu} />
                </CarouselItem>
              ))}
            </CarouselContent>
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
