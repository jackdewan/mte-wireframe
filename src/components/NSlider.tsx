import { useState } from "react";

// const previousSlides = [0, 1, 2];
// const activeSlides = [0, 1, 2];
// const nextSlides = [0, 1, 2];

const itemsPerScreen = 1; // max 5

const slideWidth = [
  "max-w-full flex-[0_0_100%]",
  "max-w-[50%] flex-[0_0_50%]",
  "max-w-[33.33%] flex-[0_0_33.33%]",
  "max-w-[25%] flex-[0_0_25%]",
  "max-w-[20%] flex-[0_0_20%]",
];

const translate = [
  "-translate-x-0",
  "-translate-x-full",
  "-translate-x-[200%]",
  "-translate-x-[300%]",
  "-translate-x-[400%]",
];

//      0 > 1
// 0  > 1 > 2
// 1  > 2 > 1

export const NSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlides, setActiveSlides] = useState([1, 2, 3]);
  const [color, setColor] = useState("00FF00");
  const nScreens = activeSlides.length / itemsPerScreen;
  const lastIndex = nScreens - 1;

  function updateSlides() {
    let newActiveSlides = activeSlides;
    let currentSlide;
    console.log(activeIndex);
    if (activeIndex == lastIndex) {
      for (let i = 0; i < itemsPerScreen; i++) {
        currentSlide = newActiveSlides[0];
        if (currentSlide) {
          newActiveSlides.push(currentSlide);
        }
      }
      setActiveSlides(newActiveSlides);
      console.log(activeSlides);
    }
  }

  function updateIndex(newIndex: number) {
    // at the end
    let slide;
    let newActiveSlides;
    if (newIndex >= Math.ceil(nScreens)) {
      // add the first itemsperscreen to the end of the array

      setActiveIndex(0);
      return;
    }
    if (newIndex < 0) {
      setActiveIndex(Math.ceil(lastIndex));
      return;
    }
    setActiveIndex(newIndex);
  }

  return (
    <div className="overflow-hidden flex mx-0">
      <button
        className="z-10 mr-1 w-6 bg-gray-500 opacity-60 hover:opacity-80 group grow-0 shrink-0"
        type="button"
        onClick={() => updateIndex(activeIndex - 1)}
      >
        <div className="text-white group-hover:scale-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </button>
      <div
        className={`flex grow ${translate[activeIndex]} transition duration-200`}
        onTransitionEnd={() => updateSlides()}
        // style={{ transform: "translate3d(-125%, 0px, 0px)" }}
      >
        {activeSlides.map((slide, i) => (
          <img
            key={i}
            className={`px-1 ${slideWidth[itemsPerScreen - 1]} aspect-video`}
            src={`https://via.placeholder.com/${
              210 + i * 10
            }/${color}?text=${slide}`}
          />
        ))}
      </div>
      <button
        className="z-10 ml-1 w-6 bg-gray-500 opacity-60 hover:opacity-80 group grow-0 shrink-0 group"
        type="button"
        onClick={() => updateIndex(activeIndex + 1)}
      >
        <div className="text-white group-hover:scale-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
