import { IconProps } from "@/util/types";
import React, { useMemo } from "react";

interface MyIconProps {
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  size?: "sm" | "md" | "lg";
  url?: string;
  srText?: string;
  primary?: boolean;
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case "sm": {
      return "h-5 w-5";
    }
    case "lg": {
      return "h-10 w-10";
    }
    default: {
      return "h-6 w-6";
    }
  }
};

const getModeClasses = (isPrimary: boolean) => (isPrimary ? "" : "");

const ICON_WRAPPER_CLASSES = `p-1.5`;

export const Icon = ({
  Icon,
  size = "md",
  url,
  srText,
  primary = false,
}: MyIconProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [size]);

  if (url) {
    return (
      <a href={url} className={`${ICON_WRAPPER_CLASSES}`}>
        <span className="sr-only">{srText}</span>
        <Icon className={`${computedClasses}`} />
      </a>
    );
  } else {
    return (
      <div className={`${ICON_WRAPPER_CLASSES}`}>
        <span className="sr-only">{srText}</span>
        <Icon className={`${computedClasses}`} />
      </div>
    );
  }
};
