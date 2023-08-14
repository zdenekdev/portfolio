import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealSlower({ children, width }) {
  const animRef = useRef(null);
  const inView = useInView(animRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);

  return (
    <div
      ref={animRef}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealSlower;
