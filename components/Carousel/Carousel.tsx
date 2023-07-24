"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import BackgroundImage from "@/components/Carousel/BackgroundImage";
import Slides from "@/components/Carousel/Slides";
import SlideInfo from "@/components/Carousel/SliderInfo";
import Controls from "@/components/Carousel/Controls";
import { CurrentSlideData, Data } from "./typings";

export default function Carousel() {
  const [data, setData] = useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });

  return (
    <header
      className={`relative min-h-[95vh]  overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute inset-0 z-20 mx-auto h-full max-w-7xl">
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </header>
  );
}

const sliderData = [
  {
    img: "/images/Quality.jpg",
    location: "Quality Trading",
    description:
      "Your trusted source for superior materials across multiple sectors.",
    title: "Across Industries",
  },
  {
    img: "/images/importing_goods.jpg",
    location: "Import",
    description:
      "Your trusted source for superior materials across multiple sectors.",
    title: "Import",
  },
  {
    img: "/images/Export.jpg",
    title: "Export",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Export",
  },
  {
    img: "/images/young-man-working-warehouse-with-boxes.jpg",
    title: "Wholesale",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Wholesale",
  },
  {
    img: "/images/A_man_selling_goods.jpg",
    title: "Retail",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Retail",
  },
];

const initData = sliderData[0];
