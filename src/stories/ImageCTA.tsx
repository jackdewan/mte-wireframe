import { useEffect } from "react";
import { Button } from "./Button";
import { PlaceholderImg } from "@/components/Placeholder";

interface ImageCTAProps {
  left?: boolean;
  scrollAnimate?: boolean;
  heading?: string;
}

interface ImageProps {
  scrollAnimate?: boolean;
}

interface TextProps {
  scrollAnimate?: boolean;
  heading?: string;
}

export const Image = ({ scrollAnimate }: ImageProps) => {
  return (
    // <img
    //   className={`grayscale w-full object-cover mb-6 sm:mb-12 aspect-[4/3] lg:aspect-[3/4]`}
    //   src="https://images.unsplash.com/photo-1517025423291-770fb99ae547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    //   alt="mobile app"
    // />
    <div className="bg-gray-200 h-[30vh] lg:h-[50vh] mb-6">
      <PlaceholderImg />
    </div>
  );
};

export const Text = ({ scrollAnimate, heading }: TextProps) => {
  return (
    <div className={`space-y-6`}>
      <div>
        <h2 className={`text-5xl sm:text-6xl font-extrabold`}>
          {heading ? heading : "Lorem ipsum dolor sit amet"}
        </h2>
      </div>
      <div>
        <p className={`font-light md:text-lg dark:text-gray-400 font-serif`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="items-center sm:flex">
        <Button label="Learn More" primary />
      </div>
    </div>
  );
};

export const ImageCTA = ({ left, scrollAnimate, heading }: ImageCTAProps) => {
  return (
    <section
      className="dark:bg-gray-900 container pt-5 lg:pt-20 pb-10 lg:pb-20"
      // style={{ height: "100svh" }}
    >
      <div
        className={`flex ${
          left ? "flex-col" : "flex-col-reverse"
        }  justify-between items-center pt-10 sm:pt-20 lg:grid lg:grid-cols-12 lg:gap-4`}
      >
        {left ? (
          <>
            <div className="lg:col-span-4 w-full">
              <Image scrollAnimate={scrollAnimate} />
            </div>
            <div className="lg:col-start-8 lg:col-span-5 w-full">
              <Text scrollAnimate={scrollAnimate} />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-5">
              <Text scrollAnimate={scrollAnimate} heading={heading} />
            </div>
            <div className="lg:col-start-7 lg:col-span-6 xl:col-start-9 xl:col-span-4 w-full">
              <Image scrollAnimate={scrollAnimate} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
