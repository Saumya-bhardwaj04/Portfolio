import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { toast } from "@/hooks/use-toast";
const Hero = () => {
  const emailAddress = "samisharma000@gmail.com";
  const { displayText } = useTypingEffect({
    words: ["Full Stack Developer", "MERN Stack Expert", "AI/ML Enthusiast", "Problem Solver"],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500
  });
  const handleExternalOpen = (label) => {
    toast({
      title: "Opening in new tab",
      description: `${label} will open in a new tab.`
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {
    /* Background glow effect */
  }
      <div className="hero-glow animate-pulse-glow" />
      
      {
    /* Animated grid background */
  }
      <div className="absolute inset-0 bg-[linear-gradient(rgba(32,224,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,224,200,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {
    /* Floating decorative elements */
  }
      <motion.div
    className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary/60"
    animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
      <motion.div
    className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-accent/40"
    animate={{ y: [10, -10, 10], scale: [1, 1.2, 1] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  />
      <motion.div
    className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-primary/50"
    animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
      <motion.div
    className="absolute top-[40%] right-[25%] w-1 h-1 rounded-full bg-accent/60"
    animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mono-text text-primary text-sm md:text-base mb-4 tracking-wider"
  >
          Hello, I'm
        </motion.p>

        <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
  >
          <span className="text-foreground">Saumya</span>{" "}
          <span className="text-gradient">Bhardwaj</span>
        </motion.h1>

        {
    /* Typing Effect */
  }
        <motion.h2
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 h-[40px] md:h-[48px]"
  >
          <span className="text-foreground">{displayText}</span>
          <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 0.8, repeat: Infinity }}
    className="text-primary ml-1"
  >
            |
          </motion.span>
        </motion.h2>

        <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
  >
          Passionate about building scalable web applications with clean, efficient code.
          Specialized in MERN Stack with a focus on creating impactful digital experiences.
        </motion.p>

        {
    /* Social Links */
  }
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="flex items-center justify-center gap-6 mb-16"
  >
        {[
    { icon: Github, href: "https://github.com/saumya-bhardwaj04", label: "GitHub", isExternal: true },
    { icon: Linkedin, href: "https://linkedin.com/in/saumya-bhardwaj04", label: "LinkedIn", isExternal: true },
    { icon: Mail, href: `mailto:${emailAddress}`, label: "Email", isExternal: false }
  ].map((social, index) => <motion.a
    key={social.label}
    href={social.href}
    target={social.href.startsWith("mailto") ? void 0 : "_blank"}
    rel={social.href.startsWith("mailto") ? void 0 : "noopener noreferrer"}
    onClick={() => {
      if (social.isExternal) {
        handleExternalOpen(social.label);
      }
    }}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
    className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:glow-effect group"
    aria-label={social.label}
  >
              <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>)}
        </motion.div>
        {
    /* Scroll indicator - Mouse style like reference */
  }
        <motion.a
    href="#about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
  >
          <motion.div
    className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5"
    animate={{ borderColor: ["hsl(var(--muted-foreground))", "hsl(var(--primary))", "hsl(var(--muted-foreground))"] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
            <motion.div
    className="w-1.5 h-2.5 rounded-full bg-current"
    animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  />
          </motion.div>
          <span className="mono-text text-xs tracking-wider">Scroll Down</span>
        </motion.a>
      </div>
    </section>;
};
var Hero_default = Hero;
export {
  Hero_default as default
};
