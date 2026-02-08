import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, ExternalLink, Eye } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const Resume = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const resumeFile = `${baseUrl}Saumya%20bhardwaj%20resume.pdf`;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return <section id="resume" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
          <p className="mono-text text-primary text-sm mb-2 tracking-wider">06.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            View or download my complete professional resume to learn more about my experience, skills, and achievements
          </p>
        </motion.div>

        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
  >
          {
    /* Background decoration */
  }
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {
    /* Resume Icon */
  }
            <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={isInView ? { scale: 1, opacity: 1 } : {}}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="relative"
  >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 glow-effect">
                <FileText className="w-16 h-16 text-primary" />
              </div>
              <motion.div
    className="absolute -top-2 -right-2 p-2 rounded-full bg-accent/20"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
                <Download className="w-4 h-4 text-accent" />
              </motion.div>
            </motion.div>

            {
    /* Content */
  }
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Professional Resume</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My resume includes details about my education, technical skills, 
                work experience, projects, and achievements. Available in PDF format.
              </p>

              {
    /* Action Buttons */
  }
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a
    href={resumeFile}
    download="Saumya_Bhardwaj_Resume.pdf"
    onClick={() => {
      toast({
        title: "Downloading resume",
        description: "Your download should begin shortly."
      });
    }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 glow-effect group"
  >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </motion.a>

                <motion.a
    href={resumeFile}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300 group"
  >
                  <Eye className="w-5 h-5" />
                  View Online
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </motion.a>
              </div>
            </div>
          </div>

          {
    /* Stats */
  }
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="relative z-10 grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border"
  >
            {[
    { value: "4+", label: "Months Experience" },
    { value: "5+", label: "Projects Completed" },
    { value: "15+", label: "Technologies" }
  ].map((stat, index) => <motion.div
    key={stat.label}
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
    className="text-center"
  >
                <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
var Resume_default = Resume;
export {
  Resume_default as default
};
