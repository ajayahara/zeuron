import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { DateFormat } from "../components/DateFormat";

export const CardioLogy = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();

  const animateHeightThenWidth = async () => {
    await controls.start({ height: 0 });
    await controls1.start({ width: "100%" });
    await controls.start({ width: 0 });
  };
  useEffect(() => {
    animateHeightThenWidth();
  }, []);
  return (
    <div className="w-full h-full flex">
      <div className="h-full w-72 relative py-4 mx-8">
        <img src="/human1.png" alt="human" className="h-full mx-auto" />
        <div className="absolute w-48 overflow-hidden aspect-square rounded-full z-20 top-16 left-12 flex justify-center items-center">
          <motion.div
            className="w-0 overflow-hidden aspect-square rounded-full"
            animate={controls1}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/heart_motion1.png"
              alt="heart"
              className="w-48 aspect-square"
            />
          </motion.div>
        </div>
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
      <div className="w-full h-full py-4 ml-16 flex flex-col justify-between overflow-x-hidden">
        <div className="flex justify-between items-center pl-2 pr-4">
          <motion.h3
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-bold"
          >
            Hemodynamics
          </motion.h3>
          <div className="flex justify-between items-center gap-4">
            <DateFormat date={"28.06.24"} color={true} />
            <DateFormat date={"12.02.23"} color={false} />
            <DateFormat date={"22.02.23"} color={false} />
            <button className="border border-1 border-blue-500 py-1 px-2 text-blue-500">
              &darr; Export
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src="HeadGraph.png" alt="graph1" className="w-48" />
        </div>
        <div className="flex justify-between items-center pl-2 pr-4 mb-4">
          <div className="w-1/4 text-xs">
            <motion.h3
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl font-bold mb-6"
            >
              Aging vasculer health
            </motion.h3>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-gray-400"
            >
              <div className="flex gap-10 mb-2">
                <p>Type-3</p>
                <p className="text-blue-600">55.5%</p>
              </div>
              <div className="flex gap-10 mb-6">
                <p>Type-4</p>
                <p className="text-blue-600">68.9%</p>
              </div>
              <hr />
              <p className="mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                in ducimus consequuntur
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col items-start h-full">
            <div className="flex justify-between items-center gap-4">
              <DateFormat date={"12.02.23"} color={false} />
              <DateFormat date={"28.06.24"} color={true} />
              <DateFormat date={"22.02.23"} color={false} />
              <button className="border border-1 border-blue-500 py-1 px-2 text-blue-500">
                &darr; Export
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-full grid grid-cols-6 pl-2 pr-4">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-2"
          >
            <img src="/Box.png" alt="Box" className="w-full" />
          </motion.div>
          <motion.div
            initial={{ x: "-180%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="col-span-3 col-start-4"
          >
            <img src="/Box1.png" alt="Box" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
