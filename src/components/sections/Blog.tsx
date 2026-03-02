import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { Calendar } from "lucide-react";

const posts = [
  {
    image: blog1,
    title: "Top 10 Wedding Planning Tips for Your Dream Day",
    date: "Feb 15, 2026",
    excerpt: "Planning a wedding can be overwhelming. Here are our top tips to make your special day stress-free.",
  },
  {
    image: blog2,
    title: "Wedding Decoration Trends in 2026",
    date: "Jan 28, 2026",
    excerpt: "From traditional marigold to modern minimalist—discover the latest trends in wedding decoration.",
  },
  {
    image: blog3,
    title: "How to Choose the Perfect Catering Menu",
    date: "Jan 10, 2026",
    excerpt: "Your catering menu can make or break the event. Learn how to curate the perfect spread for your guests.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-medium uppercase tracking-widest mb-4">
            Blog
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Latest Insights & Tips
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">{post.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
