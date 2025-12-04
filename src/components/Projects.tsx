import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    number: "01",
    title: "Crypto Screener Application",
    description:
      "A comprehensive crypto screening tool that allows users to track real-time cryptocurrency prices, market trends, and portfolio performance with beautiful data visualizations.",
    tags: ["React", "TypeScript", "Chart.js", "API"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80",
    reverse: false,
  },
  {
    number: "02",
    title: "Euphoria - E-commerce Platform",
    description:
      "A modern e-commerce website template for apparel brands featuring product catalogs, shopping cart functionality, and seamless checkout experience.",
    tags: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    reverse: true,
  },
  {
    number: "03",
    title: "Blog Website Template",
    description:
      "A clean, minimalist blog template with markdown support, dark mode, SEO optimization, and excellent typography for content creators.",
    tags: ["Next.js", "MDX", "Vercel", "SEO"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    reverse: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="underline decoration-4 underline-offset-4">Projects</span>
        </h2>

        <div className="space-y-24 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                project.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${project.reverse ? "lg:order-2" : ""}`}>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className={`${project.reverse ? "lg:order-1" : ""}`}>
                <span className="text-6xl md:text-8xl font-bold text-primary-foreground/10">
                  {project.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold -mt-8 mb-4">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
