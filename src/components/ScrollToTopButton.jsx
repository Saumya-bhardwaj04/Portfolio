import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import useSoundEffects from "@/hooks/useSoundEffects";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { playBackToTopSound, playHoverSound } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    playBackToTopSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={handleScrollToTop}
          onMouseEnter={playHoverSound}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/35 bg-card/90 text-foreground backdrop-blur-xl shadow-[0_8px_28px_hsl(220_20%_0%_/_0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-[0_0_24px_hsl(var(--primary)_/_0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Scroll back to top"
          title="Back to top"
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;