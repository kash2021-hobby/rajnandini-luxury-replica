import { useParams, Navigate } from "react-router-dom";
import Footer from "@/components/sections/Footer";
import { foodCategories } from "@/data/foodCategories";

const FoodCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = foodCategories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container text-center">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Our Menu
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            {category.title}
          </h1>
          <p className="font-body text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Food Items Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          {/* Grid Layout - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {category.items.map((item, i) => (
              <div
                key={i}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Food Image */}
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Food Name */}
                <div className="p-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Note Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-muted/50 rounded-2xl px-8 py-6 max-w-2xl">
              <p className="font-body text-muted-foreground text-sm">
                ✨ All items are freshly prepared by our expert chefs using premium ingredients. 
                Menu items and availability may vary based on the event package selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodCategoryPage;
