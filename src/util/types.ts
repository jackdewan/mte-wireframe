import React from "react";

export interface IconProps {
  strokeWidth?: number;
  className?: string;
}

export type HeroIconType = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement>
>;
