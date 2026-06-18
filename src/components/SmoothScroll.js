"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function SmoothScroll({ children }) {
  const { scrollYProgress } = useScroll();
  
  // Apply a smooth spring physics to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => handleResize());
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [children]);

  // Transform the smooth progress into a Y translation value
  const y = useTransform(smoothProgress, [0, 1], [0, -(contentHeight - windowHeight)]);

  // If the content is smaller than the window, don't apply the transform
  if (contentHeight <= windowHeight) {
    return <>{children}</>;
  }

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
        ref={contentRef}
        style={{ y }}
      >
        {children}
      </motion.div>
    </>
  );
}
