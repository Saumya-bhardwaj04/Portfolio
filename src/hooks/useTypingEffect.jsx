import { useState, useEffect } from "react";
const useTypingEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2e3
}) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[wordIndex];
    const handleTyping = () => {
      if (isPaused) {
        const pauseTimeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(pauseTimeout);
      }
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          const timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
          return () => clearTimeout(timeout);
        }
      } else {
        if (displayText === currentWord) {
          setIsPaused(true);
        } else {
          const timeout = setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          }, typingSpeed);
          return () => clearTimeout(timeout);
        }
      }
    };
    const cleanup = handleTyping();
    return cleanup;
  }, [displayText, wordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseDuration]);
  return { displayText, isTyping: !isPaused && !isDeleting };
};
export {
  useTypingEffect
};
