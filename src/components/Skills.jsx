import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Server, Wrench, Sparkles, Database } from "lucide-react";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiCloudinary,
  SiFirebase,
  SiGithub,
  SiPython,
  SiVercel,
  SiRender,
  SiGooglechrome
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import useSoundEffects from "@/hooks/useSoundEffects";

const technologies = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Axios", icon: SiAxios, color: "#5A29E4" },
  { name: "PWA/Service Worker", icon: SiGooglechrome, color: "#4285F4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
  { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#000000" },
  { name: "Bcrypt", icon: Wrench, color: "#8A2BE2" },
  { name: "MVC Architecture", icon: Server, color: "#3178C6" },
  { name: "WebSocket", icon: SiSocketdotio, color: "#010101" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
  { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase Cloud Messaging", icon: SiFirebase, color: "#FFCA28" },
  { name: "Generative AI", icon: Sparkles, color: "#FF00FF" },
  { name: "AI-Assisted Content", icon: Sparkles, color: "#9333EA" },
  { name: "System Design", icon: Database, color: "#0EA5E9" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git/GitHub", icon: SiGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);
  const { playHoverSound, playClickSound } = useSoundEffects();

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <p className="mono-text text-primary text-sm mb-2 tracking-wider">02.</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="relative h-[480px] sm:h-[620px] lg:h-[700px] overflow-hidden rounded-xl sm:rounded-2xl">
          <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-b from-background via-background/90 to-transparent z-10 pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-6 px-2 sm:px-4"
            animate={isInView && !isPaused ? { 
              y: ["0%", "-100%"] 
            } : {}}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {[...technologies, ...technologies, ...technologies].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: (index % 24) * 0.03 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="relative group cursor-pointer aspect-square"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-border/50 sm:border-2 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 bg-gradient-to-br from-card/80 via-card to-card/80 backdrop-blur-xl h-full w-full">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" 
                           style={{
                             backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
                             backgroundSize: '20px 20px'
                           }}
                      />
                    </div>
                    
                    <div className="relative flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3 h-full">
                      <div className="relative p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/20 transition-all duration-300">
                        <Icon 
                          className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" 
                          style={{ 
                            filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.35))'
                          }}
                        />
                      </div>
                      
                      <span className="text-[9px] sm:text-[11px] md:text-xs font-semibold text-foreground text-center leading-tight group-hover:text-primary transition-colors duration-300 px-0.5 sm:px-1 line-clamp-2">
                        {tech.name}
                      </span>
                      
                      <motion.div 
                        className="hidden sm:block h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                        initial={{ width: 0 }}
                        whileHover={{ width: "80%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 mono-text"
        >
          All technologies
        </motion.p>
      </div>
    </section>
  );
};

var Skills_default = Skills;
export {
  Skills_default as default
};
