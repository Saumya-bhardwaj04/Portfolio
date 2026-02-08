import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, TrendingUp } from "lucide-react";
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
  return <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
          <p className="mono-text text-primary text-sm mb-2 tracking-wider">04.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        {
    /* Work Experience */
  }
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="glass-card rounded-2xl p-8 md:p-10 mb-12"
  >
          <div className="flex items-start gap-6">
            <div className="hidden md:flex p-4 rounded-xl bg-primary/10 flex-shrink-0">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">PHP Developer(Intern)</h3>
                  <p className="text-primary font-medium">APK WEBTECH</p>
                </div>
                <p className="mono-text text-sm text-muted-foreground">Jan 2023 – April 2023</p>
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
    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
    className="flex items-start gap-3 text-muted-foreground"
  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>)}
              </ul>
            </div>
          </div>
        </motion.div>

        {
    /* Achievements Grid */
  }
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((section, sectionIndex) => <motion.div
    key={section.title}
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
    className="glass-card rounded-2xl p-8"
  >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => <motion.li
    key={itemIndex}
    initial={{ opacity: 0, x: -10 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.4 + sectionIndex * 0.1 + itemIndex * 0.05 }}
    className="flex items-start gap-3 text-muted-foreground"
  >
                    <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </motion.li>)}
              </ul>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
var Experience_default = Experience;
export {
  Experience_default as default
};
