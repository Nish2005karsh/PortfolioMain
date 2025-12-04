import { useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Mail, Send, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "@/hooks/use-toast";

const RedditIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

type SocialLink = {
  icon: LucideIcon | (() => JSX.Element);
  href: string;
  label: string;
  color: string;
};

const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "https://instagram.com/yos.oyniko", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Github, href: "https://github.com/Nish2005karsh", label: "GitHub", color: "hover:text-foreground" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nishkarsh-pandey-698215299/", label: "LinkedIn", color: "hover:text-blue-500" },
  { icon: Twitter, href: "https://x.com/Nishkarsh1725", label: "X (Twitter)", color: "hover:text-foreground" },
  { icon: RedditIcon, href: "https://www.reddit.com/user/Proud_Midnight7516/", label: "Reddit", color: "hover:text-orange-500" },
];

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      toast({
        title: "Subscribed!",
        description: "Thanks for subscribing to my newsletter.",
      });
      setEmail("");
    } else {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with <span className="underline decoration-4 underline-offset-4">Me</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Let's connect! Feel free to reach out through any of the platforms below.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-secondary border border-border transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Email Subscription */}
          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Subscribe to my newsletter</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Get notified about new projects, articles, and updates. No spam, unsubscribe anytime.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-xl"
              />
              <Button type="submit" className="h-12 px-8 rounded-xl">
                <Send className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>

          {/* Direct Email */}
          <div className="mt-8">
            <a
              href="mailto:hello@evrenshah.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
              hello@evrenshah.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
