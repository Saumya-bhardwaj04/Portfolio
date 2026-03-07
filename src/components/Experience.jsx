import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase, Award, TrendingUp, Sparkles, Zap, Target } from "lucide-react";

// Counter animation hook
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSection, setHoveredSection] = useState(null);

  const achievements = [
    {
      icon: Award,
      title: "Certifications",
      items: [
        "Artificial Intelligence \u2013 CodeSoft",
        "Web Development \u2013 Coding Blocks",
        "Machine Learning I \u2013 Columbia+",
        "Technology Job Simulation \u2013 Forage",
        "Web Design & Development \u2013 SkillIndia"
      ]
    },
    {
      icon: TrendingUp,
      title: "Key Achievements",
      items: [
        "Improved website performance & user engagement",
        "Reduced code duplication by 25%",
        "Optimized backend queries for better performance"
      ]
    }
  ];
  return <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating icons */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap className="w-12 h-12 text-primary/10" />
      </motion.div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.p 
            className="mono-text text-primary text-sm mb-2 tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            04.
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.02,
            rotateY: 2,
            transition: { duration: 0.3 }
          }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden group"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${40 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
            />
          ))}

          <div className="flex items-start gap-6 relative z-10">
            <motion.div 
              className="hidden md:flex p-4 rounded-xl bg-primary/10 flex-shrink-0"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.5 }}
            >
              <Briefcase className="w-8 h-8 text-primary" />
            </motion.div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <motion.h3 
                    className="text-2xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    PHP Developer(Intern)
                  </motion.h3>
                  <motion.p 
                    className="text-primary font-medium"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    APK WEBTECH
                  </motion.p>
                </div>
                <motion.p 
                  className="mono-text text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Jan 2023 – April 2023
                </motion.p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Built and maintained responsive web applications using PHP, MySQL, HTML, CSS, and JavaScript, ensuring seamless user experience across devices.",
                  "Integrated databases and managed sessions with clean, secure, and scalable backend code to enhance data handling efficiency.",
                  "Optimized website performance and implemented best practices in web development, improving load speed and user engagement."
                ].map((item, index) => <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 text-muted-foreground group/item"
                >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"
                      animate={{
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                  </motion.li>)}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((section, sectionIndex) => {
            const isEvenIndex = sectionIndex % 2 === 0;
            
            return <motion.div
              key={section.title}
              initial={{ 
                opacity: 0, 
                x: isEvenIndex ? -80 : 80,
                y: 40,
                rotateY: isEvenIndex ? -15 : 15
              }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0,
                y: 0,
                rotateY: 0
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.2 + sectionIndex * 0.2,
                ease: "easeOut"
              }}
              onMouseEnter={() => setHoveredSection(section.title)}
              onMouseLeave={() => setHoveredSection(null)}
              whileHover={{
                scale: 1.03,
                rotateY: isEvenIndex ? 3 : -3,
                transition: { duration: 0.3 }
              }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                animate={{
                  x: hoveredSection === section.title ? "100%" : "-100%"
                }}
                transition={{ duration: 0.8 }}
              />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div 
                  className="p-3 rounded-lg bg-primary/10"
                  whileHover={{ 
                    rotate: [0, 10, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <section.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + sectionIndex * 0.2 }}
                >
                  {section.title}
                </motion.h3>
              </div>
              <ul className="space-y-3 relative z-10">
                {section.items.map((item, itemIndex) => <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1.6 + sectionIndex * 0.2 + itemIndex * 0.08 
                  }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-3 text-muted-foreground group/item"
                >
                  <motion.span 
                    className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-shrink-0"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: itemIndex * 0.2
                    }}
                  />
                  <span className="text-sm group-hover/item:text-foreground transition-colors">{item}</span>
                </motion.li>)}
              </ul>
              
              {/* Corner decoration */}
              <motion.div 
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl group-hover:opacity-80 transition-opacity"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: hoveredSection === section.title ? [0.4, 0.7, 0.4] : 0.4
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>;
          })}
        </div>
      </div>
    </section>;
};
var Experience_default = Experience;
export {
  Experience_default as default
};
