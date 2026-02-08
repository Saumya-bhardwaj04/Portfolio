import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
          <p className="mono-text text-primary text-sm mb-2 tracking-wider">01.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="space-y-6"
  >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a <span className="text-foreground font-medium">B.Tech CSE (AI & ML) undergraduate</span> at
              Maharshi Dayanand University (MDU), passionate about building scalable, user-focused web applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With hands-on experience in <span className="text-primary">full-stack development</span>,
              I design responsive frontends and craft secure backends that are clean, efficient, and maintainable.
              I love shipping polished products with thoughtful UX and solid engineering.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm actively seeking full-stack roles where I can contribute to impactful projects
              and keep growing as a developer.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground pt-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span>New Delhi, India</span>
            </div>
          </motion.div>

          <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="space-y-6"
  >
            {
    /* Education Cards */
  }
            <div className="glass-card rounded-xl p-6 glow-effect">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">B.Tech in CSE (AI & ML)</h3>
                  <p className="text-muted-foreground text-sm">Maharshi Dayanand University (MDU)</p>
                  <p className="mono-text text-xs text-primary mt-2">Sep 2023 – Present</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Diploma in Computer Engineering</h3>
                  <p className="text-muted-foreground text-sm">Guru Nanak Dev Institute of Technology (DSEU)</p>
                  <p className="mono-text text-xs text-accent mt-2">Sep 2020 – Jun 2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
var About_default = About;
export {
  About_default as default
};
