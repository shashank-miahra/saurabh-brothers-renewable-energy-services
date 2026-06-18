"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection({
  children,
  bgColor = "bg-white",
  speed = 0.2,
  direction = "up",
  fade = true,
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = direction === "up" ? [60, -60] : [-60, 60];
  const y = useTransform(scrollYProgress, [0, 1], yRange.map((v) => v * speed));
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${bgColor} ${className}`}>
      <motion.div style={{ y, opacity: fade ? opacity : 1 }}>
        {children}
      </motion.div>
    </section>
  );
}

export function ParallaxCounter({ children, delay = 0 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const op = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity: op }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}
