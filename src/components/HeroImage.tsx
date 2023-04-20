import { ImageCTA } from "../stories/ImageCTA";

interface HeroProps {
  className?: string;
  img?: boolean;
  video?: boolean;
  mediaSrc?: string;
}

export const HeroImage = ({ className, img, mediaSrc, video }: HeroProps) => {
  return (
    <div className="h-screen">
      <div className="relative w-full h-full">
        <img
          className={`${className} object-cover w-full h-full object-center`}
          src="https://via.placeholder.com/2000x900"
          alt="banner"
        />
        {/* <div className="text-white absolute top-1/4 left-1/2 transform -translate-x-3/4 translate-y-3/4">
          <HeroText />
        </div> */}
        <div className="absolute top-0 flex h-full w-full justify-center items-center">
          <ImageCTA left />
        </div>
      </div>
    </div>
  );
};
