import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedStat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-l-2 border-[#9a8200] pl-5"
    >
      <div className="text-navy text-[clamp(38px,5vw,60px)] font-extrabold leading-none tracking-tight tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="text-sm text-ink-soft mt-3 font-medium">{label}</div>
    </motion.div>
  );
}