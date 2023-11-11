"use cilent";

import { useScroll, useAnimationControls } from "react";

import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  // const ScrollToTopContainerVariants: Variants = {
  //   hide: { opacity: 0, y: 100 },
  //   show: { opacity: 1, y: 0 },
  // };
  return (
    <motion.button
      className="fixed bottom-0 right-0 p-10"
      // variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
}

export default ScrollToTopButton;
