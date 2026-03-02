import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const services = [
{
  image: service1,
  title: "Wedding Planning",
  subtitle: "Your Dream Wedding, Perfectly Planned"
},
{
  image: service2,
  title: "Fine Dinning",
  subtitle: "Your Dream Wedding, Perfectly Planned"
},
{
  image: service3,
  title: "Corporate Event Decor",
  subtitle: "Your Dream Wedding, Perfectly Planned"
},
{
  image: service4,
  title: "Dinner Planning",
  subtitle: "Your Dream Wedding, Perfectly Planned"
}];


const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-secondary text-lg">◆✦</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Our <em>Services</em>
            </h2>
            <span className="text-secondary text-lg">✦◆</span>
          </div>
          <p className="font-body text-muted-foreground text-base">
            From Concept to Execution, We Handle Every Detail
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) =>
          <div key={service.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105" />

              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground text-center">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm text-center mt-1">
                {service.subtitle}
              </p>
            </div>
          )}
        </div>

        {/* All Services Button */}
        <div className="text-center">
          <a
            href="#services"
            className="inline-block font-body text-sm font-medium text-foreground border border-border rounded-full px-8 py-3 hover:bg-muted transition-colors">


          </a>
        </div>
      </div>
    </section>);

};

export default Services;