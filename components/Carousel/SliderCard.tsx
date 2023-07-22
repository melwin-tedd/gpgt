import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
  return (
    <motion.div
      className="relative h-52 min-w-[250px] rounded-2xl border-[1px] shadow-md md:h-80 md:min-w-[208px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data.img}
        className=" absolute h-full w-full  rounded-2xl  object-cover brightness-75 "
      />
      <motion.div className=" absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div
            layout
            className=" mb-2 h-[2px] w-4 rounded-full bg-green-400"
          ></motion.div>
          <motion.p
            layoutId={data.location}
            className="text-xl font-medium leading-6 text-green-500 "
          >
            {data.location}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;
