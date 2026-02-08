import { motion } from "framer-motion";
import { useMemo } from "react";
const StarBackground = () => {
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 80; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      });
    }
    return starArray;
  }, []);
  return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => <motion.div
    key={star.id}
    className="absolute rounded-full bg-primary/60"
    style={{
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: star.size,
      height: star.size
    }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.5, 1]
    }}
    transition={{
      duration: star.duration,
      delay: star.delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />)}
      
      {
    /* Shooting stars */
  }
      {[...Array(3)].map((_, i) => <motion.div
    key={`shooting-${i}`}
    className="absolute w-1 h-1 bg-primary rounded-full"
    style={{
      left: `${20 + i * 30}%`,
      top: `${10 + i * 15}%`
    }}
    animate={{
      x: [0, 200, 400],
      y: [0, 100, 200],
      opacity: [0, 1, 0]
    }}
    transition={{
      duration: 2,
      delay: i * 4 + 2,
      repeat: Infinity,
      repeatDelay: 8,
      ease: "easeOut"
    }}
  >
          <div className="w-20 h-px bg-gradient-to-r from-primary to-transparent -translate-x-full" />
        </motion.div>)}
    </div>;
};
var StarBackground_default = StarBackground;
export {
  StarBackground_default as default
};
