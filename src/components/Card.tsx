import { Button } from "@/stories/Button";
import { PlaceholderImg } from "./Placeholder";

interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="p-4 lg:p-5 bg-gray-200 space-y-4 max-w-lg mx-auto">
      <div className="h-52">
        <PlaceholderImg />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">{title}</h3>
        <p>{description}</p>
        <Button label="Learn More" />
      </div>
    </div>
  );
};
