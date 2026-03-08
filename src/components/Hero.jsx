import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { toast } from "@/hooks/use-toast";
import useSoundEffects from "@/hooks/useSoundEffects";
const Hero = () => {
  const emailAddress = "samisharma000@gmail.com";
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
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
  const { playClickSound, playScrollSound, playHoverSound, playProfileHoverSound } = useSoundEffects();
  return <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="hero-glow animate-pulse-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(32,224,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(32,224,200,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
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

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between items-center xl:items-start text-center xl:text-left"
        >
          <div className="mt-8 md:mt-10 xl:mt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mono-text text-primary text-sm md:text-base mb-6 tracking-wider"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
            >
              <span className="text-foreground">Saumya</span>
              <br />
              <span className="text-gradient">Bhardwaj</span>
            </motion.h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-8"
          >
            <motion.div
              className="relative w-40 h-40 md:w-48 md:h-48"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={playProfileHoverSound}
            >
              <motion.svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
              </motion.svg>
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-background bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img 
                  src="/profile-photo.jpeg" 
                  alt="Saumya Bhardwaj" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.children[1].style.display = "flex";
                  }}
                />
                <div 
                  className="hidden w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl md:text-5xl"
                  style={{ display: "none" }}
                >
                  👨‍💻
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light mb-4 h-[32px] md:h-[40px] text-center"
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
            className="text-muted-foreground text-sm md:text-base mb-8 leading-relaxed text-center max-w-md"
          >
            Passionate about building scalable web applications with clean, efficient code.
            Specialized in MERN Stack with a focus on creating impactful digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/saumya-bhardwaj04", label: "GitHub", isExternal: true },
              { icon: Linkedin, href: "https://linkedin.com/in/saumya-bhardwaj04", label: "LinkedIn", isExternal: true },
              { icon: Mail, href: gmailComposeHref, label: "Email", isExternal: true }
            ].map((social, index) => <motion.a
              key={social.label}
              href={social.href}
              target={social.isExternal ? "_blank" : void 0}
              rel={social.isExternal ? "noopener noreferrer" : void 0}
              onClick={() => {
                if (social.isExternal) {
                  playClickSound();
                  handleExternalOpen(social.label);
                }
              }}
              onMouseEnter={playHoverSound}
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
        </motion.div>
        <motion.a
          href="#about"
          onClick={playScrollSound}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="xl:col-span-2 mx-auto mt-8 md:mt-10 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
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
    </section>
};
var Hero_default = Hero;
export {
  Hero_default as default
};
