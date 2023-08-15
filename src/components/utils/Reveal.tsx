import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
};
function Reveal({ children, width = "fit-content" }: Props) {
  const animRef = useRef(null);
  const inView = useInView(animRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);

  return (
    <div ref={animRef} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
