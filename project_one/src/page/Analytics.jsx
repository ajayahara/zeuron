import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Analytics = () => {
  const controls = useAnimation();

  const animateHeightThenWidth = async () => {
    await controls.start({ height: 0 });
    await controls.start({ width: 0 });
  };
  useEffect(() => {
    animateHeightThenWidth();
  }, []);
  return (
    <div className="h-full flex">
      <div className="h-full w-56 relative py-1 mx-8">
        <img src="/human1.png" alt="human" className="h-full w-full" />
        <img
          src="/heart_motion1.png"
          alt="heart"
          className="absolute w-full z-20 top-12 left-10"
        />
        <img
          src="bottom_loading.png"
          alt="bottom"
          className="absolute w-full bottom-[0]"
        />
        <motion.div
          className="absolute w-56 h-full z-[10] bg-[#0d0e17] top-0 left-0 border-b-2 border-[#42829e]"
          animate={controls}
          transition={{duration:1}}
        ></motion.div>
      </div>
      <div></div>
    </div>
  );
};
