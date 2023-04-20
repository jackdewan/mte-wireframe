import React, { useState, useContext, useRef } from "react";
import { DisclosureContext } from "../util/DisclosureContext";
import { IconProps } from "../util/types";
import { ChevronDown } from "./assets/ChevronDown";

interface DisclosureProps {
  children: any;
}

interface PanelProps {
  children: any;
  title: string;
  className?: string;
  icon?: {
    Icon: React.ComponentType<IconProps>;
    iconStyles?: string;
    iconOpenStyles?: string;
  };
}

const iconDefault = {
  Icon: ChevronDown,
  iconStyles: "h-6 w-6 transition duration-150",
  iconOpenStyles: "-rotate-180",
};

function getPanelHeight(panelRef: React.RefObject<HTMLDivElement> | null) {
  let panelHeight = 0;
  if (panelRef) {
    if (panelRef.current !== null) {
      panelHeight = panelRef.current.scrollHeight;
    }
    panelHeight = panelHeight / 16;
    panelHeight.toString();
    return panelHeight + "rem";
  }
  return "0rem";
}

const Panel = ({
  children,
  className,
  title,
  icon = iconDefault,
}: PanelProps) => {
  const { openKey, setOpenKey } = useContext(DisclosureContext);
  const panelRef = useRef<HTMLDivElement>(null);
  const { Icon, iconStyles, iconOpenStyles } = icon;

  const handleToggle = (key: string) => {
    setOpenKey(openKey !== key ? key : null);
  };
  const open = openKey === title;

  const heightStr = getPanelHeight(panelRef);

  const styles = {
    maxHeight: {
      maxHeight: open ? heightStr : 0,
    },
  };

  return (
    <div>
      <button
        type="button"
        className={`flex justify-between w-full ${className}`}
        onClick={() => handleToggle(title)}
      >
        {title}
        <Icon className={`${iconStyles} ${open ? iconOpenStyles : ""}`} />
      </button>
      <div
        className={`transition-[max-height] ease-in-out duration-200 overflow-hidden maxHeight`}
        style={styles.maxHeight}
      >
        <div className="" ref={panelRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Disclosure = ({ children }: DisclosureProps) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <DisclosureContext.Provider value={{ openKey, setOpenKey }}>
      {children}
    </DisclosureContext.Provider>
  );
};

Disclosure.Panel = Panel;

export default Disclosure;
