import { BoltIcon } from "../stories/assets/BoltIcon";
import { BoltSlashIcon } from "@heroicons/react/24/outline";
import { HeroIconType } from "./types";

export interface FeaturesProps {
  data: FeatureItemProps[];
}

export interface FeatureItemProps {
  title: string;
  Icon: HeroIconType | React.FunctionComponent;
}

export const features = [
  {
    title: "Feature 1",
    Icon: BoltIcon,
  },
  {
    title: "Feature 2",
    Icon: BoltIcon,
  },
  {
    title: "Feature 3",
    Icon: BoltIcon,
  },
  {
    title: "Feature 4",
    Icon: BoltIcon,
  },
  {
    title: "Feature 5",
    Icon: BoltIcon,
  },
  {
    title: "Feature 6",
    Icon: BoltIcon,
  },
];

export const featuredProducts = [
  {
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const events = [
  {
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Event 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Event 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
