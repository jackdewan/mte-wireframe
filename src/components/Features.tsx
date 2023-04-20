import { BoltIcon } from "@/stories/assets/BoltIcon";
import { Icon } from "@/stories/Icon";
import { FeaturesProps } from "../util/data";
import { FeatureItem } from "./FeatureItem";

export const Features = ({ data }: FeaturesProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
      {data.map((item) => (
        <div key={item.title} className="flex justify-center items-center">
          <FeatureItem data={item} />
        </div>
      ))}
    </div>
  );
};
