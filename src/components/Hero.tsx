import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
// import heroImage from "@/assets/hero-illustration.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/Nish2005karsh", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/nishkarsh-pandey-698215299", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Nishkarsh1725", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/yos.oyniko/", label: "Instagram" },
  // { icon: Reddit, href: "https://www.reddit.com/user/Proud_Midnight7516/", label: "Reddit" },
];

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hello I'm <span className="text-foreground">Nishkarsh Pandey</span>.
              <br />
              Full Stack{" "}
              <span className="relative inline-block">
                Developer
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span>
              </span>
              <br />
              Based in <span className="underline decoration-4 underline-offset-4">India</span>.
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I'm a passionate frontend developer crafting beautiful and performant web experiences. Let's build something amazing together.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary overflow-hidden">
                <img
                  src={/public/screenshot4.jpg}
                  alt="Developer illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-primary rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
