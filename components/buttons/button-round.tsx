import { motion, useAnimation, Variants } from "framer-motion";
import { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, }
};

export const RoundButtonAnimation = memo(function RoundButtonAnimation({children, boxVariant}:{children?: any; boxVariant?: any;}) {
  const control = useAnimation();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
})