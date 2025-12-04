const experiences = [
  {
    company: "Forage",
    role: "Software Development Virtual Internships",
    period: "Jan 2025 – Jun 2025",
    description:
      "Completed multiple real-world job simulation programs from Deloitte, Red Bull, Accenture, and other global organizations. These programs involved working on client-focused engineering tasks such as requirement analysis, debugging, API testing, and building software solutions in simulated environments.",
    active: false,
  },
  {
    company: "Independent Projects",
    role: "Technical Skill Development & Training",
    period: "Jul 2025 – Present",
    description:
      "Continuously expanding my technical expertise through hands-on training in full-stack development, data science fundamentals, workflow automation using n8n, and modern development tools. Actively experimenting with automation workflows and backend integrations to strengthen problem-solving and engineering capabilities.",
    active: true,
  },
  {
    company: "Independent Projects",
    role: "Independent Software Projects (Calorie Tracker, Student Manager, WikiSnap)",
    period: "Oct 2025 – Ongoing",
    description:
      "Building a series of practical, real-world applications including a calorie-tracking system, a full student management solution, and WikiSnap — a tool for quick information capture and summarization. These projects focus on clean UI, efficient backend logic, and deploying functional applications that solve everyday problems.",
    active: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 section-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="underline decoration-4 underline-offset-4">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-300 ${exp.active
                ? "bg-primary-foreground text-primary border-primary-foreground"
                : "bg-transparent border-primary-foreground/20 hover:border-primary-foreground/40"
                }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${exp.active ? "bg-primary text-primary-foreground" : "bg-primary-foreground/10"
                      }`}
                  >
                    <span className="text-sm font-bold">{exp.company.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role} at {exp.company}</h3>
                  </div>
                </div>
                <span className={`text-sm ${exp.active ? "text-primary/70" : "text-primary-foreground/60"}`}>
                  {exp.period}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${exp.active ? "text-primary/80" : "text-primary-foreground/70"}`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
