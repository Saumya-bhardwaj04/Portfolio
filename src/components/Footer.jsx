import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const Footer = () => {
  const emailAddress = "samisharma000@gmail.com";
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      toast({
        title: "Email copied",
        description: emailAddress
      });
    } catch {
      toast({
        title: "Copy failed",
        description: "Please copy the email manually."
      });
    }
  };
  return <footer className="py-8 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col md:flex-row items-center justify-between gap-6 text-center"
  >
          <p className="text-muted-foreground text-sm">
            © {(/* @__PURE__ */ new Date()).getFullYear()} Saumya Bhardwaj. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
    href="https://github.com/saumya-bhardwaj04"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
              <Github className="w-5 h-5" />
            </a>
            <a
    href="https://linkedin.com/in/saumya-bhardwaj04"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
    href={gmailComposeHref}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
  >
              <Mail className="w-5 h-5" />
            </a>
            <button
    type="button"
    onClick={handleCopyEmail}
    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
    aria-label="Copy email address"
  >
              <Copy className="w-5 h-5" />
            </button>
          </div>
          
        </motion.div>
      </div>
    </footer>;
};
var Footer_default = Footer;
export {
  Footer_default as default
};