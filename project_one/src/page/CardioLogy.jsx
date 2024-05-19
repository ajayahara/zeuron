import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export const CardioLogy = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();

  const animateHeightThenWidth = async () => {
    await controls.start({ height: 0 });
    await controls1.start({ width: "66%" });
    await controls.start({ width: 0 });
  };
  useEffect(() => {
    animateHeightThenWidth();
  }, []);
  return (
    <div className="h-full flex">
      <div className="h-full w-72 relative py-4 bordered">
        <img src="/human2.png" alt="human" className="h-full mx-auto" />
        <motion.div
          className="absolute w-0 overflow-hidden aspect-square rounded-full z-20 top-16 right-4"
          animate={controls1}
          transition={{ duration: 1 }}
        >
          <img
            src="/heart_motion1.png"
            alt="heart"
            className="w-48 aspect-square"
          />
        </motion.div>
        <img
          src="bottom_loading.png"
          alt="bottom"
          className="absolute w-full left-0 bottom-1"
        />
        <motion.div
          className="absolute w-full h-full z-[10] bg-[#0d0e17] top-0 left-0 border-b-2 border-[#42829e]"
          animate={controls}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      <div></div>
    </div>
  );
};
