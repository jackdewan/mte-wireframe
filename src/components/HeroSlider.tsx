import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  data: string[];
}

interface CarouselItemProps {
  // children: JSX.Element;
  // title: string;
  // width?: string;
  // color: string;
  image: string;
}

const transform = [
  "-translate-x-0",
  "-translate-x-full",
  "-translate-x-[200%]",
  "-translate-x-[300%]",
  "-translate-x-[400%]",
  "-translate-x-[500%]",
];

const images = [
  "https://via.placeholder.com/2000x900",
  "/images/brh-home-hero-desktop.webp",
  // "/images/desktop-beerdetail-hero.jpg",
  // "/images/newbelgium_2023_globe_glasses_hand_2880x1660_v1.webp",
];

const data = [
  { id: 1, title: "One", color: "bg-aqua-500" },
  { id: 2, title: "Two", color: "bg-yellow-500" },
  { id: 3, title: "Three", color: "bg-orange-500" },
];

export const SliderItem = ({ image }: CarouselItemProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center h-full text-white w-full bg-pine-600`}
    >
      <img className="object-cover w-full h-screen" src={image} alt="" />
    </div>
  );
};

export const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    // if (pause) {
    //   console.log("pause");
    //   const timeout = setTimeout(() => {
    //     setPause(false);
    //     updateIndex(activeIndex + 1);
    //   }, 5000);
    //   return clearTimeout(timeout);
    // }
    // const interval = setInterval(() => {
    //   updateIndex(activeIndex + 1);
    // }, 4000);
    // return () => {
    //   if (interval) {
    //     clearInterval(interval);
    //   }
    // };
  }, [activeIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = data.length - 1;
    }
    if (newIndex >= data.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="overflow-hidden" {...handlers}>
      <div
        className={`whitespace-nowrap transition duration-300 ${transform[activeIndex]}`}
        // style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <SliderItem key={i} image={image} />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-20 flex justify-center">
        {images.map((el, i) => (
          <button
            key={i}
            onClick={() => {
              // setPause(true);
              updateIndex(i);
            }}
            className="p-2"
          >
            <div
              className={`h-2 w-2 rounded-full border border-gray-400 transition-all duration-500 ${
                activeIndex === i ? "bg-white opacity-50" : "bg-gray-700"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};
