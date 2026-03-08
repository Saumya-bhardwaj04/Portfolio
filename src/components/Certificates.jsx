import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Download, Eye, Sparkles, CheckCircle2 } from "lucide-react";
import useSoundEffects from "@/hooks/useSoundEffects";

const baseUrl = import.meta.env.BASE_URL || "/";

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
const certificates = [
  {
    id: 6,
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud (SkillUp by Simplilearn)",
    date: "2026",
    description: "Completed an online course covering the basics of Generative AI Studio and practical workflow concepts.",
    downloadUrl: `${baseUrl}certificates/Genai%20Studio%20Certificate.pdf`,
    viewUrl: `${baseUrl}certificates/Genai%20Studio%20Certificate.pdf`,
    color: "accent"
  },
  {
    id: 7,
    title: "Generative AI for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "2026",
    description: "Completed an online course covering Generative AI fundamentals and beginner-friendly concepts.",
    downloadUrl: `${baseUrl}certificates/Generative%20AI%20for%20Beginners.pdf`,
    viewUrl: `${baseUrl}certificates/Generative%20AI%20for%20Beginners.pdf`,
    color: "primary"
  },
  {
    id: 1,
    title: "Artificial Intelligence",
    issuer: "CodeSoft",
    date: "2025",
    description: "Covered AI fundamentals with hands-on exercises and foundational ML concepts.",
    downloadUrl: `${baseUrl}certificates/artificial_intelligence_certificate.pdf`,
    viewUrl: `${baseUrl}certificates/artificial_intelligence_certificate.pdf`,
    color: "primary"
  },
  {
    id: 2,
    title: "Machine Learning I",
    issuer: "Columbia+",
    date: "2025",
    description: "Studied core ML workflows and algorithms with guided practice and assignments.",
    downloadUrl: `${baseUrl}certificates/Machine_learning-1_compeletion_certificate.pdf`,
    viewUrl: `${baseUrl}certificates/Machine_learning-1_compeletion_certificate.pdf`,
    color: "accent"
  },
    {
    id: 3,
    title: "Web Design & Development",
    issuer: "Skill India Digital Hub(NSDC)",
    date: "2025",
    description: "Completed an online certification in Web Design & Development covering HTML, CSS, JavaScript fundamentals, and responsive web design, offered via Skill India Digital Hub.",
    downloadUrl: `${baseUrl}certificates/Web_development_certificate.pdf`,
    viewUrl: `${baseUrl}certificates/Web_development_certificate.pdf`,
    color: "primary"
  },
  {
    id: 4,
    title: "Technology Job Simulation",
    issuer: "Forage",
    date: "2025",
    description: "Completed a virtual job simulation covering real-world technology tasks.",
    downloadUrl: `${baseUrl}certificates/Deloitte_completion_certificate.pdf`,
    viewUrl: `${baseUrl}certificates/Deloitte_completion_certificate.pdf`,
    color: "accent"
  },
    {
    id: 5,
    title: "Web Development",
    issuer: "Coding Block",
    date: "2023",
    description: "Completed a structured web development program focused on frontend and backend basics.",
    downloadUrl: `${baseUrl}certificates/Web Dev training certificate.pdf`,
    viewUrl: `${baseUrl}certificates/Web Dev training certificate.pdf`,
    color: "primary"
  },
];
const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const { playClickSound, playDownloadSound } = useSoundEffects();
  const certCount = useCounter(certificates.length, 1500, isInView);
  return <section id="certificates" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
          <motion.div className="flex items-center gap-3 mb-2">
            <p className="mono-text text-primary text-sm tracking-wider">05.</p>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30"
            >
              <CheckCircle2 className="w-3 h-3 text-primary" />
              <span className="text-xs font-semibold text-primary">{certCount} Certified</span>
            </motion.div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Certifications <span className="text-gradient"></span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Professional certifications and achievements that validate my skills and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => <motion.div
    key={cert.id}
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
    onMouseEnter={() => setHoveredCard(cert.id)}
    onMouseLeave={() => setHoveredCard(null)}
    className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:glow-effect"
  >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: hoveredCard === cert.id ? "100%" : "-100%",
                  opacity: hoveredCard === cert.id ? 1 : 0
                }}
                transition={{ duration: 0.8 }}
              />

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${cert.color === "primary" ? "bg-primary/40" : "bg-accent/40"}`}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl ${cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className={`w-6 h-6 ${cert.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </motion.div>
                  <motion.span 
                    className="mono-text text-xs text-muted-foreground px-2 py-1 rounded-full border border-border/80 bg-secondary/40"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {cert.date}
                  </motion.span>
                </div>

                <motion.h3 
                  className="text-lg sm:text-xl font-bold mb-2 group-hover:text-gradient transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {cert.title}
                </motion.h3>
                <motion.p 
                  className={`text-sm font-medium mb-3 ${cert.color === "primary" ? "text-primary" : "text-accent"}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {cert.issuer}
                </motion.p>
                <motion.p 
                  className="text-muted-foreground text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {cert.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.a
                    href={cert.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border hover:border-primary hover:text-primary transition-all group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={hoveredCard === cert.id ? { rotate: [0, 15, -15, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.div>
                    View
                  </motion.a>
                  <motion.a
                    href={cert.downloadUrl}
                    download
                    onClick={playDownloadSound}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all group/btn ${cert.color === "primary" ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground" : "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={hoveredCard === cert.id ? { 
                        y: [0, -4, 0],
                      } : {}}
                      transition={{ 
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Download className="w-4 h-4" />
                    </motion.div>
                    Download
                  </motion.a>
                </motion.div>
              </div>

              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl ${cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"} group-hover:scale-150 transition-transform duration-500`} />              
              {hoveredCard === cert.id && (
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  <Sparkles className={`w-4 h-4 ${cert.color === "primary" ? "text-primary" : "text-accent"}`} />
                </motion.div>
              )}            </motion.div>)}
        </div>

      </div>
    </section>;
};
var Certificates_default = Certificates;
export {
  Certificates_default as default
};
