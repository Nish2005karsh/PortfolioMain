// import aboutImage from "@/assets/about-illustration.png";

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
                  src="/screenshot4.jpg"
                  alt="About me illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a self-taught developer who has been curious about technology since childhood. Over the years, I’ve built my skills through hands-on projects, virtual internships, and continuous learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating clean, responsive websites and functional web applications. My main stack includes React, Next.js, Tailwind CSS, and TypeScript, and I also work with backend workflows using n8n, APIs, and Python tools. I enjoy turning ideas into polished, real-world products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m currently expanding my knowledge in full-stack development, data science fundamentals, and workflow automation to build more efficient and scalable applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I’m not coding, I’m usually learning something new, experimenting with automation workflows, or working on personal projects that help me grow as a developer.
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
