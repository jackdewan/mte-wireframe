import React, { useMemo } from "react";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  fullWidth?: boolean;
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-6 py-3";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? "text-white bg-gray-500 hover:bg-gray-600 hover:border-gray-600 dark:bg-pink-700 dark:border-pink-700"
    : "text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white";

const BASE_BUTTON_CLASSES = `cursor-pointer rounded rounded-md border-2 border-gray-500 font-bold leading-none inline-block`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  fullWidth,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [primary, size]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses} ${
        fullWidth && "w-full"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
