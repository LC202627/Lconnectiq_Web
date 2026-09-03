import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion";
import Logo from "@/components/shared/Logo";

const HOLD = 4000; // black hold before the fade begins
const FADE = 2200; // black -> white fade duration

export default function IntroSplash() {
  const [done, setDone] = useState(false);
  const progress = useMotionValue(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      const t = setTimeout(() => setDone(true), 300);
      return () => clearTimeout(t);
    }
    const controls = animate(progress, 1, {
      duration: FADE / 1000,
      delay: HOLD / 1000,
      ease: "easeInOut",
    });
    const t = setTimeout(() => setDone(true), HOLD + FADE);
    return () => {
      controls.stop();
      clearTimeout(t);
    };
  }, [progress]);

  // One progress value drives background AND logo color change — perfectly in sync
  const backgroundColor = useTransform(progress, [0, 1], ["#000000", "#ffffff"]);
  const lightLogoOpacity = useTransform(progress, [0, 1], [1, 0]);
  const darkLogoOpacity = useTransform(progress, [0, 1], [0, 1]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro-splash"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2.2, opacity: 1 }}
            transition={{ duration: 4.6, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ opacity: lightLogoOpacity }}>
              <Logo className="h-16 w-[250px]" inverted />
            </motion.div>
            <motion.div className="absolute inset-0" style={{ opacity: darkLogoOpacity }}>
              <Logo className="h-16 w-[250px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}