import { Code2, FileCode, Layers, Database, Globe, Palette, Terminal, Cloud, Coffee, Server, Workflow, BarChart, Monitor } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "React.js", icon: Layers },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Terminal },
  { name: "TailwindCSS", icon: Palette },
  { name: "Linux", icon: Terminal },
  { name: "MongoDB", icon: Database },
  { name: "Postgres", icon: Database },
  { name: "Supabase", icon: Database },
  { name: "C", icon: Code2 },
  { name: "Java", icon: Coffee },
  { name: "Python", icon: FileCode },
  { name: "Docker", icon: Server },
  { name: "Kubernetes", icon: Server },
  { name: "AWS(Basic)", icon: Cloud },
  { name: "Google Cloud", icon: Cloud },
  { name: "n8n", icon: Workflow },
  { name: "Matplotlib", icon: BarChart },
  { name: "Streamlit", icon: Monitor },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="underline decoration-4 underline-offset-4">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="w-8 h-8 mb-3 transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
