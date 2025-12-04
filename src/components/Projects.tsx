import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    number: "01",
    title: "CalorieAI",
    description:
      "A smart calorie-tracking application that analyzes food images using automated n8n workflows and provides instant nutritional insights. Users can log meals, view daily summaries, and track progress through a simple, responsive interface.",
    tags: ["React", "TypeScript", "n8n", "API", "Clerk(Auth)", "Supabase(DB)", "TailwindCSS", "ShadcnUI"],
    image: "src/assets/screenshot1.png",
    reverse: false,
    githubLink: "https://github.com/Nish2005karsh/Calorie-tracker",
    liveLink: "#",
  },
  {
    number: "02",
    title: "JobHunt",
    description:
      "A full-stack MERN job-applying platform where users can explore job listings, create profiles, and apply instantly. Includes company dashboards, application tracking, and a clean, streamlined UI inspired by modern job portals.",
    tags: ["React", "MongoDB(DB)", "Node.js", "Express", "TailwindCSS", "ShadcnUI"],
    image: "src/assets/screenshot3.png",
    reverse: true,
    githubLink: "https://github.com/Nish2005karsh/Job-Portal",
    liveLink: "#",
  },
  {
    number: "03",
    title: "PrepWise",
    description:
      "An interactive interview preparation platform built with Next.js, featuring voice-based practice sessions powered by Vapi and secure content storage via Firebase Storage. Designed to help users practice, learn, and improve their interview confidence",
    tags: ["React", "Firebase(DB)", "TailwindCSS", "ShadcnUI", "Vapi(Workflow)", "Firebase Storage", "Vercel AI SDK"],
    image: "src/assets/screenshot2.png",
    reverse: false,
    githubLink: "https://github.com/Nish2005karsh/PrepWise",
    liveLink: "interview-prep-new.vercel.app/sign-in",
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
              className={`grid lg:grid-cols-2 gap-8 items-center ${project.reverse ? "lg:flex-row-reverse" : ""
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary-foreground/20 text-secondary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary-foreground/20 text-secondary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
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
