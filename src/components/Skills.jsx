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

const techIcons = {
  "React.js": SiReact,
  "Redux Toolkit": SiRedux,
  "JavaScript (ES6+)": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Axios: SiAxios,
  "PWA/Service Worker": SiGooglechrome,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": SiPostman,
  "JWT Authentication": SiJsonwebtokens,
  Bcrypt: Wrench,
  "MVC Architecture": Server,
  WebSocket: SiSocketdotio,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Cloudinary: SiCloudinary,
  "MongoDB Atlas": SiMongodb,
  "Firebase Cloud Messaging (FCM)": SiFirebase,
  "Generative AI(Applied)": Sparkles,
  "AI-Assisted Content Systems": Sparkles,
  "System Design(Basics)": Database,
  Python: SiPython,
  "Git/GitHub": SiGithub,
  Postman: SiPostman,
  Vercel: SiVercel,
  Render: SiRender,
  "Chrome DevTools": SiGooglechrome,
  "VS Code": VscCode
};
const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Redux Toolkit", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Axios", level: 84 },
      { name: "PWA/Service Worker", level: 78 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "accent",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 86 },
      { name: "REST APIs", level: 88 },
      { name: "JWT Authentication", level: 84 },
      { name: "Bcrypt", level: 80 },
      { name: "MVC Architecture", level: 82 },
      { name: "WebSocket", level: 78 }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "primary",
    skills: [
      { name: "MongoDB", level: 84 },
      { name: "MySQL", level: 80 },
      { name: "Cloudinary", level: 78 },
      { name: "MongoDB Atlas", level: 76 },
      { name: "Firebase Cloud Messaging (FCM)", level: 72 }
    ]
  },
  {
    title: "AI & Architecture",
    icon: Sparkles,
    color: "accent",
    skills: [
      { name: "Generative AI(Applied)", level: 20 },
      { name: "AI-Assisted Content Systems", level: 76 },
      { name: "System Design(Basics)", level: 20 },
      { name: "Python", level: 80 },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Postman", level: 86 },
      { name: "Vercel", level: 82 },
      { name: "Render", level: 80 },
      { name: "Chrome DevTools", level: 88 },
      { name: "VS Code", level: 90 }
    ]
  }
];
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const uniqueSkills = Array.from(new Map(allSkills.map((s) => [s.name, s])).values());
  return <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
          <p className="mono-text text-primary text-sm mb-2 tracking-wider">02.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {
    /* Category Tabs */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="flex flex-wrap justify-center gap-4 mb-12"
  >
          {skillCategories.map((category, index) => {
    const Icon = category.icon;
    return <motion.button
      key={category.title}
      onClick={() => setActiveCategory(index)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === index ? category.color === "primary" ? "bg-primary text-primary-foreground glow-effect" : "bg-accent text-accent-foreground glow-effect" : "glass-card hover:border-primary/50"}`}
    >
                <Icon className="w-5 h-5" />
                {category.title}
              </motion.button>;
  })}
        </motion.div>

        {
    /* Skills Grid */
  }
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => <motion.div
    key={category.title}
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
    className={`glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${activeCategory === categoryIndex ? "ring-2 ring-primary/50 glow-effect" : ""}`}
  >
              {
    /* Background gradient */
  }
              <div
    className={`absolute inset-0 opacity-5 ${category.color === "primary" ? "bg-gradient-to-br from-primary to-transparent" : "bg-gradient-to-br from-accent to-transparent"}`}
  />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
    className={`p-3 rounded-xl ${category.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}
  >
                    <category.icon
    className={`w-6 h-6 ${category.color === "primary" ? "text-primary" : "text-accent"}`}
  />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => <motion.div
    key={skill.name}
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
    onMouseEnter={() => setHoveredSkill(skill.name)}
    onMouseLeave={() => setHoveredSkill(null)}
    className="group"
  >
                      <div className="flex justify-between items-center mb-2">
                        <span
    className={`text-sm font-medium transition-colors ${hoveredSkill === skill.name ? category.color === "primary" ? "text-primary" : "text-accent" : "text-foreground"}`}
  >
                          {skill.name}
                        </span>
                        <span
    className={`mono-text text-xs transition-opacity ${hoveredSkill === skill.name ? "opacity-100" : "opacity-0"} ${category.color === "primary" ? "text-primary" : "text-accent"}`}
  >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
    initial={{ width: 0 }}
    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
    transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
    className={`h-full rounded-full ${category.color === "primary" ? "bg-gradient-to-r from-primary to-primary/60" : "bg-gradient-to-r from-accent to-accent/60"}`}
  />
                      </div>
                    </motion.div>)}
                </div>
              </div>

              {
    /* Floating sparkle on hover */
  }
              <motion.div
    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  >
                <Sparkles className="w-4 h-4 text-primary/40" />
              </motion.div>
            </motion.div>)}
        </div>

        {
    /* Skills Tags Cloud */
  }
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="mt-12 text-center"
  >
          <p className="text-sm text-muted-foreground mb-6">All Technologies</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {uniqueSkills.map((skill, index) => {
      const Icon = techIcons[skill.name] ?? Code2;
      return <motion.div
        key={skill.name}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
        whileHover={{ scale: 1.03, y: -2 }}
        className="glass-card rounded-xl p-3 border border-border hover:border-primary/50 transition-all duration-300"
      >
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Icon size={28} className="text-primary" />
                      <span className="text-xs font-medium text-foreground text-center leading-tight">{skill.name}</span>
                    </div>
                  </motion.div>;
    })}
          </div>
        </motion.div>
      </div>
    </section>;
};
var Skills_default = Skills;
export {
  Skills_default as default
};
