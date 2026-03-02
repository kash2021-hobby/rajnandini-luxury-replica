import { useEffect, useRef, useState } from "react";
import { Users, UserCheck, FolderOpen, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 90, suffix: "+", label: "Employees" },
  { icon: UserCheck, value: 500, suffix: "+", label: "Clients" },
  { icon: FolderOpen, value: 300, suffix: "+", label: "Projects" },
  { icon: Award, value: 31, suffix: "+", label: "Awards" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">
      {count}{suffix}
    </div>
  );
}

const Stats = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-2">
            <stat.icon className="w-8 h-8 text-primary-foreground/70 mx-auto mb-3" />
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <p className="font-body text-primary-foreground/80 text-sm uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
