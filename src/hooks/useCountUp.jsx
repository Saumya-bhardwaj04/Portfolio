import { useState, useEffect, useRef } from "react";
const useCountUp = ({
  end,
  start = 0,
  duration = 2e3,
  delay = 0,
  enabled = true
}) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const frameRef = useRef();
  useEffect(() => {
    if (!enabled) return;
    const delayTimeout = setTimeout(() => {
      setHasStarted(true);
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(start + (end - start) * easeOutQuart);
        setCount(currentCount);
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    }, delay);
    return () => {
      clearTimeout(delayTimeout);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, start, duration, delay, enabled]);
  return { count, hasStarted };
};
export {
  useCountUp
};
