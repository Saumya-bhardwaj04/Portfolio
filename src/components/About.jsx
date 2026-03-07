import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles, Code2, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            01.
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 relative"
          >
            {/* Decorative code icon */}
            <motion.div
              className="absolute -left-8 top-0"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code2 className="w-12 h-12 text-primary/20" />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed relative"
            >
              I'm a <motion.span 
                className="text-foreground font-medium relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                B.Tech CSE (AI & ML) undergraduate
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.span> at
              Maharshi Dayanand University (MDU), passionate about building scalable, user-focused web applications.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              With hands-on experience in{" "}
              <motion.span 
                className="text-primary font-medium"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 8px rgb(var(--primary))"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                full-stack development
              </motion.span>,
              I design responsive frontends and craft secure backends that are clean, efficient, and maintainable.
              I love shipping polished products with thoughtful UX and solid engineering.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I'm actively seeking full-stack roles where I can contribute to impactful projects
              and keep growing as a developer.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-muted-foreground pt-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MapPin className="w-4 h-4 text-primary" />
              </motion.div>
              <span>New Delhi, India</span>
            </motion.div>
          </motion.div>

          <div className="space-y-6 relative">
            {/* Decorative rocket icon */}
            <motion.div
              className="absolute -right-8 -top-8 z-0"
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-16 h-16 text-accent/20" />
            </motion.div>

            {/* Education Cards */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card rounded-xl p-6 glow-effect relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
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

              <div className="flex items-start gap-4 relative z-10">
                <motion.div 
                  className="p-3 rounded-lg bg-primary/10"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="font-semibold text-lg mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    B.Tech in CSE (AI & ML)
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-sm"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    Maharshi Dayanand University (MDU)
                  </motion.p>
                  <motion.p 
                    className="mono-text text-xs text-primary mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Sep 2023 – Present
                  </motion.p>
                </div>
              </div>

              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="glass-card rounded-xl p-6 relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"
                animate={{
                  backgroundPosition: ["100% 100%", "0% 0%", "100% 100%"]
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

              <div className="flex items-start gap-4 relative z-10">
                <motion.div 
                  className="p-3 rounded-lg bg-accent/10"
                  whileHover={{ 
                    rotate: [0, 10, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-6 h-6 text-accent" />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="font-semibold text-lg mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Diploma in Computer Engineering
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-sm"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    Guru Nanak Dev Institute of Technology (DSEU)
                  </motion.p>
                  <motion.p 
                    className="mono-text text-xs text-accent mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    Sep 2020 – Jun 2023
                  </motion.p>
                </div>
              </div>

              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

var About_default = About;
export {
  About_default as default
};
