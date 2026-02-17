import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const emailAddress = "samisharma000@gmail.com";
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
  const contactInfo = [
    { icon: Mail, label: "Email", value: emailAddress, href: gmailComposeHref },
    { icon: Phone, label: "Phone", value: "+91 9717831874", href: "tel:+919717831874" },
    { icon: MapPin, label: "Location", value: "New Delhi, India", href: "#" }
  ];
  return <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
          <p className="mono-text text-primary text-sm mb-2 tracking-wider">07.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
        </motion.div>

        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="glass-card rounded-2xl p-8 md:p-12"
  >
          <div className="grid md:grid-cols-2 gap-12">
            {
    /* Contact Info */
  }
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              {contactInfo.map((item, index) => <motion.a
    key={item.label}
    href={item.href}
    target={item.href.startsWith("http") ? "_blank" : void 0}
    rel={item.href.startsWith("http") ? "noopener noreferrer" : void 0}
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
  >
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.a>)}

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a
    href="https://github.com/saumya-bhardwaj04"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
    href="https://linkedin.com/in/saumya-bhardwaj04"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {
    /* CTA */
  }
            <div className="flex flex-col justify-center items-center text-center">
              <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="space-y-6"
  >
                <div className="p-6 rounded-full bg-primary/10 glow-effect inline-block">
                  <Send className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-2xl font-bold">Ready to work together?</h4>
                <p className="text-muted-foreground">
                  Let's build something amazing!
                </p>
                <a
    href={gmailComposeHref}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-effect"
  >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
var Contact_default = Contact;
export {
  Contact_default as default
};
