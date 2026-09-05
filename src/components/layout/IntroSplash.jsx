import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion";
import Logo from "@/components/shared/Logo";

const HOLD = 1600; // black hold before the fade begins
const FADE = 1800; // black -> white fade duration

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
  const backgroundColor = useTransform(progress, [0, 1], ["#053242", "#ffffff"]);
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
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 2, opacity: 1 }}
            transition={{ duration: 3.4, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            {/* Radiant halo behind the mark */}
            <motion.div
              className="absolute -inset-28 rounded-full blur-3xl"
              style={{ opacity: lightLogoOpacity }}
              animate={{ scale: [1, 1.14, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(154,130,0,0.7)_0%,rgba(154,130,0,0.35)_40%,transparent_72%)]" />
            </motion.div>

            <motion.div
              style={{ opacity: lightLogoOpacity }}
              className="relative [filter:brightness(1.25)_drop-shadow(0_0_22px_rgba(154,130,0,0.9))_drop-shadow(0_0_54px_rgba(154,130,0,0.6))]"
            >
              <Logo className="h-20 w-[320px]" inverted />
            </motion.div>
            <motion.div
              className="absolute inset-0 [filter:drop-shadow(0_0_20px_rgba(154,130,0,0.4))]"
              style={{ opacity: darkLogoOpacity }}
            >
              <Logo className="h-20 w-[320px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}