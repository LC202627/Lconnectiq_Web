import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/shared/Logo";

export default function IntroSplash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const t = setTimeout(() => setDone(true), mq.matches ? 300 : 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro-splash"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ backgroundColor: "#0a0b12" }}
          animate={{ backgroundColor: "#343650" }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Logo className="h-16 w-[250px]" inverted />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}