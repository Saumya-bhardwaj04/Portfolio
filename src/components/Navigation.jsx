import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" }
];
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <>
      <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"}`}
  >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <motion.a
    href="#"
    className="text-lg sm:text-xl font-bold text-gradient relative z-50"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
            SB
          </motion.a>

          {
    /* Desktop Navigation */
  }
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => <motion.li
    key={link.href}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
                <a
    href={link.href}
    onClick={(e) => handleNavClick(e, link.href)}
    className={`text-sm transition-colors relative group ${activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
  >
                  <span className="mono-text text-primary text-xs mr-1">0{index + 1}.</span>
                  {link.label}
                  <span
    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"}`}
  />
                </a>
              </motion.li>)}
            <motion.li
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.5 }}
  >
              <a
    href="/Saumya%20bhardwaj%20resume.pdf"
    target="_blank"
    className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
  >
                Resume
              </a>
            </motion.li>
          </ul>

          {
    /* Mobile Menu Button */
  }
          <motion.button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="lg:hidden p-2 text-foreground hover:text-primary transition-colors relative z-50"
    whileTap={{ scale: 0.9 }}
  >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? <motion.div
    key="close"
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ rotate: 90, opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
                  <X className="w-6 h-6" />
                </motion.div> : <motion.div
    key="menu"
    initial={{ rotate: 90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ rotate: -90, opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
                  <Menu className="w-6 h-6" />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {
    /* Mobile Menu */
  }
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-40 lg:hidden"
  >
            {
    /* Backdrop */
  }
            <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 bg-background/98 backdrop-blur-xl"
    onClick={() => setIsMobileMenuOpen(false)}
  />

            {
    /* Menu Content */
  }
            <motion.nav
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
    className="absolute right-0 top-0 h-full w-full sm:w-80 bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl pt-20"
  >
              <div className="flex flex-col items-start justify-start h-full px-8 sm:px-12 py-8 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <ul className="flex flex-col items-start gap-6 w-full">
                  {navLinks.map((link, index) => <motion.li
    key={link.href}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="w-full"
  >
                      <a
    href={link.href}
    onClick={(e) => handleNavClick(e, link.href)}
    className={`text-xl sm:text-2xl font-medium transition-colors flex items-center gap-3 py-2 ${activeSection === link.href.substring(1) ? "text-primary" : "text-foreground hover:text-primary"}`}
  >
                        <span className="mono-text text-primary text-sm">0{index + 1}.</span>
                        {link.label}
                      </a>
                    </motion.li>)}
                  <motion.li
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.4 }}
    className="w-full mt-4"
  >
                    <a
    href="/Saumya%20bhardwaj%20resume.pdf"
    target="_blank"
    className="inline-flex px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base font-medium"
  >
                      Resume
                    </a>
                  </motion.li>
                </ul>

                {
    /* Social links in mobile menu */
  }
                <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.5 }}
    className="flex gap-4 mt-8 pt-8 border-t border-border w-full"
  >
                  <a
    href="https://github.com/saumya-bhardwaj04"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors text-sm"
  >
                    GitHub
                  </a>
                  <a
    href="https://linkedin.com/in/saumya-bhardwaj04"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors text-sm"
  >
                    LinkedIn
                  </a>
                  <a
    href="mailto:samisharma000@gmail.com"
    className="text-muted-foreground hover:text-primary transition-colors text-sm"
  >
                    Email
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>}
      </AnimatePresence>
    </>;
};
var Navigation_default = Navigation;
export {
  Navigation_default as default
};
