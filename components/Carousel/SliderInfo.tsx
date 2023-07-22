import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { CurrentSlideData, Data } from "./typings";
import Button from "../Button";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className="">
        <Image src="/icons/crown.svg" height={24} width={26} alt="Crown" />
      </motion.span>
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-3">
        <Link
          href="tel:+971588102324"
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-blue-500 text-xs  transition 
            duration-300 ease-in-out hover:bg-green-700 "
        >
          <FiPhoneCall className=" text-xl" />
        </Link>
        <Button>Explore Products</Button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
