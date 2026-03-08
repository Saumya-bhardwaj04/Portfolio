import { useCallback, useRef } from "react";

const useSoundEffects = () => {
  const audioContextRef = useRef(null);
  const soundCooldownRef = useRef({});

  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") {
      return null;
    }

    if (audioContextRef.current) {
      return audioContextRef.current;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return null;
    }

    audioContextRef.current = new AudioContextClass();
    return audioContextRef.current;
  }, []);

  const playTone = useCallback((ctx, frequency, startAt, duration, type = "square", gain = 0.055) => {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startAt);

    gainNode.gain.setValueAtTime(0.0001, startAt);
    gainNode.gain.exponentialRampToValueAtTime(gain, startAt + 0.004);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(startAt);
    oscillator.stop(startAt + duration + 0.02);
  }, []);

  const canPlay = useCallback((key, cooldownMs = 80) => {
    const now = Date.now();
    const lastPlayed = soundCooldownRef.current[key] || 0;
    if (now - lastPlayed < cooldownMs) {
      return false;
    }
    soundCooldownRef.current[key] = now;
    return true;
  }, []);

  const playClickSound = useCallback(() => {
    if (!canPlay("click", 70)) {
      return;
    }
    const ctx = getAudioContext();
    if (!ctx) {
      return;
    }

    const now = ctx.currentTime;
    // Short arcade "menu move" blip.
    playTone(ctx, 1320, now, 0.04, "square", 0.06);
    playTone(ctx, 1760, now + 0.03, 0.045, "square", 0.055);
    // Low transient adds punch without making the tone muddy.
    playTone(ctx, 180, now, 0.03, "triangle", 0.03);
  }, [canPlay, getAudioContext, playTone]);

  const playHoverSound = useCallback(() => {
    if (!canPlay("hover", 90)) {
      return;
    }
    const ctx = getAudioContext();
    if (!ctx) {
      return;
    }

    const now = ctx.currentTime;
    // Soft 8-bit tick for hover states.
    playTone(ctx, 988, now, 0.025, "square", 0.03);
    playTone(ctx, 1174, now + 0.018, 0.03, "square", 0.026);
  }, [canPlay, getAudioContext, playTone]);

  const playDownloadSound = useCallback(() => {
    if (!canPlay("download", 130)) {
      return;
    }
    const ctx = getAudioContext();
    if (!ctx) {
      return;
    }

    const now = ctx.currentTime;
    // Rising 8-bit arpeggio to mimic a "pickup/confirm" game sound.
    playTone(ctx, 523.25, now, 0.055, "square", 0.065);        // C5
    playTone(ctx, 659.25, now + 0.045, 0.055, "square", 0.065); // E5
    playTone(ctx, 783.99, now + 0.09, 0.065, "square", 0.07);   // G5
    playTone(ctx, 1046.5, now + 0.14, 0.09, "square", 0.075);   // C6
    // Subtle impact layer for a more game-like "reward" hit.
    playTone(ctx, 140, now, 0.05, "triangle", 0.032);
  }, [canPlay, getAudioContext, playTone]);

  const playCtaSound = useCallback(() => {
    if (!canPlay("cta", 100)) {
      return;
    }
    const ctx = getAudioContext();
    if (!ctx) {
      return;
    }

    const now = ctx.currentTime;
    // Stronger positive "confirm" sound for primary CTA.
    playTone(ctx, 659.25, now, 0.05, "square", 0.065);
    playTone(ctx, 880, now + 0.04, 0.06, "square", 0.07);
    playTone(ctx, 1318.5, now + 0.09, 0.08, "square", 0.075);
    playTone(ctx, 160, now, 0.04, "triangle", 0.03);
  }, [canPlay, getAudioContext, playTone]);

  const playScrollSound = useCallback(() => {
    if (!canPlay("scroll", 160)) {
      return;
    }
    const ctx = getAudioContext();
    if (!ctx) {
      return;
    }

    const now = ctx.currentTime;
    // Downward blip for scroll-indicator click.
    playTone(ctx, 880, now, 0.035, "square", 0.038);
    playTone(ctx, 659.25, now + 0.03, 0.045, "square", 0.038);
    playTone(ctx, 440, now + 0.06, 0.055, "square", 0.04);
  }, [canPlay, getAudioContext, playTone]);

  const playProfileHoverSound = useCallback(() => {
    if (!canPlay("profileHover", 100)) {
      return;
    }
    const ctx = getAudioContext();
    if (!ctx) {
      return;
    }

    const now = ctx.currentTime;
    // Very subtle and gentle sound for profile picture hover - soft sine-like quality
    playTone(ctx, 740, now, 0.02, "square", 0.018);
    playTone(ctx, 880, now + 0.015, 0.025, "square", 0.016);
  }, [canPlay, getAudioContext, playTone]);

  return {
    playClickSound,
    playHoverSound,
    playDownloadSound,
    playCtaSound,
    playScrollSound,
    playProfileHoverSound
  };
};

export default useSoundEffects;