import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Layers, Star, Eye, Sparkles, Code2, Users, TrendingUp, Clock } from "lucide-react";
import useSoundEffects from "@/hooks/useSoundEffects";
const projects = [
  {
    title: "Meloque – AI-Powered Blogging Platform",
    description: "Developed a modern full-stack blogging platform with AI-assisted writing, secure authentication, real-time interactions, and push notifications using a scalable MERN-based architecture.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase Cloud Messaging", "Cloudinary", "Tailwind CSS"
    ],
    features: [
      "User authentication with JWT",
      "AI-assisted blog writing and editing",
      "Create, edit, delete, and publish blogs",
      "Push notifications using Firebase Cloud Messaging",
      "Optimized search with debouncing",
    ],
    stars: 12,
    githubUrl: "https://github.com/Saumya-bhardwaj04/Modern-blog-app",
    liveUrl: "https://www.meloque.me/"
  },
  {
    title: "Pocket Cart – E-commerce Website",
    description: "Built a modern e-commerce web app with a responsive UI, dynamic product listings, cart management using Redux Toolkit, and real-time user feedback via toast notifications.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "DummyJSON API"
    ],
    features: [
      "Dynamic product catalog with categories",
      "Add to cart & quantity management using Redux",
      "Cart persistence with global state",
      "Responsive UI with smooth UX interactions",
      "Checkout flow with custom toast notifications"
    ],

    stars: 8,
    githubUrl: "https://github.com/Saumya-bhardwaj04/E-commerceProject",
    liveUrl: "https://e-commerce-project-nu-indol.vercel.app/"
  },
  {
    title: "Weather Prediction App",
    description: "Built a weather app that fetches real-time conditions for any city and presents results in a clean, responsive UI with helpful error states.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Weather API",
      "Fetch API",
      "Responsive Design"
    ],
    features: [
      "Search weather by city name",
      "Displays temperature, humidity, and wind details",
      "Weather condition icons for quick context",
      "Handles invalid city / API errors gracefully",
      "Mobile-friendly responsive layout"
    ],
    stars: 6,
    githubUrl: "https://github.com/Saumya-bhardwaj04/Weather-Prediction-app",
    liveUrl: "https://saumya-bhardwaj04.github.io/Weather-Prediction-app/"
  },
  {
    title: "Image Finder",
    description: "Created an image search experience that pulls results from an external API and displays them in a fast, responsive grid for easy browsing.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "REST API",
      "Async/Await",
      "Responsive UI"
    ],
    features: [
      "Keyword-based image search",
      "Responsive grid layout for results",
      "Quick access to full-size images",
      "Loading state for better UX",
      "Basic input validation for empty searches"
    ],
    stars: 5,
    githubUrl: "https://github.com/Saumya-bhardwaj04/Image-finder",
    liveUrl: "https://saumya-bhardwaj04.github.io/Image-finder/"
  },
  {
    title: "GitHub Profile Viewer",
    description: "Built a GitHub profile lookup tool that fetches user data via the GitHub API and presents profile details and repositories in a simple interface.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "GitHub API",
      "Fetch API",
      "Responsive Design"
    ],
    features: [
      "Search GitHub users by username",
      "Displays profile info (avatar, bio, followers)",
      "Shows public repositories list",
      "Clickable links to GitHub profile and repos",
      "Handles not-found users and API errors"
    ],
    stars: 7,
    githubUrl: "https://github.com/Saumya-bhardwaj04/Github-profile-viewer",
    liveUrl: "https://saumya-bhardwaj04.github.io/Github-profile-viewer/"
  },
  {
    title: "Note App",
    description: "Developed a lightweight note-taking app with full CRUD support and persistence so notes remain available across sessions.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "LocalStorage",
      "DOM Manipulation",
      "Responsive UI"
    ],
    features: [
      "Create, edit, and delete notes",
      "Notes persist using browser LocalStorage",
      "Quick search/filter to find notes",
      "Clean UI optimized for daily use",
      "Works smoothly on mobile and desktop"
    ],
    stars: 4,
    githubUrl: "https://github.com/Saumya-bhardwaj04/Note-App",
    liveUrl: "https://saumya-bhardwaj04.github.io/Note-App/"
  },
  {
    title: "Random Password Generator",
    description: "Created a secure password generator that produces strong random passwords with user-controlled rules and one-click copy.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Clipboard API",
      "Form Validation",
      "Responsive Design"
    ],
    features: [
      "Generate passwords with custom length",
      "Include/exclude uppercase, numbers, and symbols",
      "One-click copy to clipboard",
      "Prevents weak configurations (e.g., empty rules)",
      "Simple, clean UI for fast usage"
    ],
    stars: 9,
    githubUrl: "https://github.com/Saumya-bhardwaj04/Random-password-generator",
    liveUrl: "https://saumya-bhardwaj04.github.io/Random-password-generator/"
  }
];

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

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickedLinks, setClickedLinks] = useState({});
  const { playClickSound, playCtaSound, playHoverSound } = useSoundEffects();
  
  // Counter for total projects
  const projectCount = useCounter(projects.length, 1500, isInView);
  const totalStars = useCounter(projects.reduce((sum, p) => sum + p.stars, 0), 2000, isInView);
  
  // Mouse tracking for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / innerWidth;
    const y = (clientY - innerHeight / 2) / innerHeight;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track link clicks
  const handleLinkClick = (projectTitle, linkType) => {
    setClickedLinks(prev => ({
      ...prev,
      [`${projectTitle}-${linkType}`]: (prev[`${projectTitle}-${linkType}`] || 0) + 1
    }));
  };

  const filters = ["All", "Full Stack", "Frontend", "JavaScript"];

  return <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
    <motion.div
      className="absolute top-10 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        x: [0, -40, 0],
        y: [0, -50, 0],
        opacity: [0.4, 0.6, 0.4]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute top-1/4 right-10"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Code2 className="w-16 h-16 text-primary/10" />
    </motion.div>
    <motion.div
      className="absolute bottom-1/3 left-10"
      animate={{
        y: [0, 20, 0],
        rotate: [0, -5, 0]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Sparkles className="w-12 h-12 text-accent/10" />
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
          03.
        </motion.p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {[
          { icon: Layers, label: "Projects", value: projectCount, color: "primary" },
          { icon: Star, label: "Total Stars", value: totalStars, color: "accent" },
          { icon: TrendingUp, label: "Success Rate", value: 95, suffix: "%", color: "primary" },
          { icon: Clock, label: "Avg Build Time", value: 2, suffix: " weeks", color: "accent" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card rounded-xl p-4 text-center relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
            <motion.p
              className="text-2xl font-bold mb-1"
              key={stat.value}
            >
              {stat.value}{stat.suffix || ''}
            </motion.p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => {
          const isEvenIndex = index % 2 === 0;
          const rowIndex = Math.floor(index / 2);
          
          return <motion.div
            key={project.title}
            initial={{ 
              opacity: 0, 
              x: isEvenIndex ? -100 : 100,
              y: 60
            }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0,
              y: 0
            } : {}}
            transition={{ 
              duration: 0.8, 
              delay: rowIndex * 0.3,
              ease: "easeOut"
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
            className="glass-card rounded-2xl p-6 md:p-8 group relative overflow-hidden transition-all duration-500 hover:glow-effect"
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
              x: hoveredProject === project.title ? "100%" : "-100%",
              opacity: hoveredProject === project.title ? 1 : 0
            }}
            transition={{ duration: 0.8 }}
          />

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
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

          {
            /* Hover overlay with details */
          }
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90 z-20 flex flex-col justify-end p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: hoveredProject === project.title ? 1 : 0,
              y: hoveredProject === project.title ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: hoveredProject === project.title ? "auto" : "none" }}
          >
            <motion.h4 
              className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: hoveredProject === project.title ? 0 : -20,
                opacity: hoveredProject === project.title ? 1 : 0
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Eye className="w-4 h-4" />
              Key Features
            </motion.h4>
            <ul className="space-y-2 mb-6">
              {project.features.map((feature, featureIndex) => <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: hoveredProject === project.title ? 1 : 0,
                  x: hoveredProject === project.title ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: 0.1 + featureIndex * 0.05 }}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <motion.span 
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{
                    scale: hoveredProject === project.title ? [0, 1.2, 1] : 0
                  }}
                  transition={{ duration: 0.3, delay: 0.1 + featureIndex * 0.05 }}
                />
                {feature}
              </motion.li>)}
            </ul>
            <div className="flex gap-3">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(project.title, 'github')}
                onMouseEnter={playHoverSound}
                onClickCapture={playClickSound}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium relative group/btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: hoveredProject === project.title ? 0 : 20,
                  opacity: hoveredProject === project.title ? 1 : 0
                }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Github className="w-4 h-4" />
                Code
                {clickedLinks[`${project.title}-github`] && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {clickedLinks[`${project.title}-github`]}
                  </span>
                )}
              </motion.a>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(project.title, 'live')}
                onMouseEnter={playHoverSound}
                onClickCapture={playCtaSound}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 text-sm font-medium relative"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: hoveredProject === project.title ? 0 : 20,
                  opacity: hoveredProject === project.title ? 1 : 0
                }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
                {clickedLinks[`${project.title}-live`] && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                    {clickedLinks[`${project.title}-live`]}
                  </span>
                )}
              </motion.a>
            </div>
          </motion.div>

          {
            /* Default card content */
          }
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <motion.div 
                className="p-2 rounded-lg bg-primary/10"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <Layers className="w-5 h-5 text-primary" />
              </motion.div>
              <motion.div 
                className="flex items-center gap-1 text-muted-foreground"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    rotate: hoveredProject === project.title ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </motion.div>
                <span className="text-sm mono-text">{project.stars}</span>
              </motion.div>
            </div>

            <motion.h3 
              className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gradient transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            >
              {project.title}
            </motion.h3>

            <motion.p 
              className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed line-clamp-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              {project.description}
            </motion.p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech, techIndex) => <motion.span
                key={tech}
                className="mono-text px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.15 + 0.4 + techIndex * 0.05 
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  backgroundColor: "rgba(var(--primary), 0.2)"
                }}
              >
                {tech}
              </motion.span>)}
              {project.tech.length > 4 && <motion.span 
                className="mono-text px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.15 + 0.6
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                +{project.tech.length - 4}
              </motion.span>}
            </div>

            {
              /* Hover hint */
            }
            <motion.p
              className="text-xs text-muted-foreground mt-4 flex items-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Eye className="w-3 h-3" />
              Hover for details
            </motion.p>
          </div>

          {
            /* Corner decoration */
          }
          <motion.div 
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl group-hover:opacity-60 transition-opacity"
            animate={{
              scale: [1, 1.2, 1],
              opacity: hoveredProject === project.title ? [0.3, 0.6, 0.3] : 0.3
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
var Projects_default = Projects;
export {
  Projects_default as default
};
