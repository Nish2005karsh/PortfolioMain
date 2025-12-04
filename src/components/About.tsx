import aboutImage from "@/assets/about-illustration.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="underline decoration-4 underline-offset-4">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-secondary border-4 border-primary">
                <img
                  src={aboutImage}
                  alt="About me illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate self-taught frontend developer and cybersecurity enthusiast. I first learned about computers when I was 10 and have been learning since then.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I create simple responsive websites and web apps for companies. My current main stack is Next.js with Tailwind CSS and TypeScript, but I'm always learning new technologies. I believe in writing clean, maintainable code and creating user experiences that delight.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new tech, contributing to open source, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Next.js", "TailwindCSS", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
