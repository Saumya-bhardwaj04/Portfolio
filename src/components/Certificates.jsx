import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Download, Eye } from "lucide-react";
const baseUrl = import.meta.env.BASE_URL || "/";
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
  return <section id="certificates" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
          <p className="mono-text text-primary text-sm mb-2 tracking-wider">05.</p>
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
    onMouseEnter={() => setHoveredCard(cert.id)}
    onMouseLeave={() => setHoveredCard(null)}
    className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group cursor-pointer"
  >
              {
    /* Animated background gradient */
  }
              <motion.div
    className={`absolute inset-0 bg-gradient-to-br ${cert.color === "primary" ? "from-primary/10 to-transparent" : "from-accent/10 to-transparent"}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: hoveredCard === cert.id ? 1 : 0 }}
    transition={{ duration: 0.3 }}
  />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}>
                    <Award className={`w-6 h-6 ${cert.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <span className="mono-text text-xs text-muted-foreground">{cert.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${cert.color === "primary" ? "text-primary" : "text-accent"}`}>
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {
    /* Action buttons */
  }
                <motion.div
    className="flex gap-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: hoveredCard === cert.id ? 1 : 0.6, y: 0 }}
    transition={{ duration: 0.2 }}
  >
                  <a
    href={cert.viewUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border hover:border-primary hover:text-primary transition-all"
  >
                    <Eye className="w-4 h-4" />
                    View
                  </a>
                  <a
    href={cert.downloadUrl}
    download
    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${cert.color === "primary" ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground" : "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"}`}
  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </motion.div>
              </div>

              {
    /* Corner decoration */
  }
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl ${cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"} group-hover:scale-150 transition-transform duration-500`} />
            </motion.div>)}
        </div>

      </div>
    </section>;
};
var Certificates_default = Certificates;
export {
  Certificates_default as default
};
