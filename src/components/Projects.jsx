import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, Star, Eye } from "lucide-react";
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
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);
  return <section id="projects" className="section-padding relative" ref={ref}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mono-text text-primary text-sm mb-2 tracking-wider">03.</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          onMouseEnter={() => setHoveredProject(project.title)}
          onMouseLeave={() => setHoveredProject(null)}
          className="glass-card rounded-2xl p-6 md:p-8 group relative overflow-hidden transition-all duration-500 hover:glow-effect hover:-translate-y-2"
        >
          {
            /* Hover overlay with details */
          }
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90 z-20 flex flex-col justify-end p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: hoveredProject === project.title ? "auto" : "none" }}
          >
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Key Features
            </h4>
            <ul className="space-y-2 mb-6">
              {project.features.map((feature, featureIndex) => <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: hoveredProject === project.title ? 1 : 0,
                  x: hoveredProject === project.title ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                className="flex items-center gap-3 text-sm text-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </motion.li>)}
            </ul>
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </motion.div>

          {
            /* Default card content */
          }
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm mono-text">{project.stars}</span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech) => <span
                key={tech}
                className="mono-text px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>)}
              {project.tech.length > 4 && <span className="mono-text px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                +{project.tech.length - 4}
              </span>}
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
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl group-hover:opacity-60 transition-opacity" />
        </motion.div>)}
      </div>
    </div>
  </section>;
};
var Projects_default = Projects;
export {
  Projects_default as default
};
