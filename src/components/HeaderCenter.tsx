import { useState, useEffect, useMemo } from "react";

import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { MobileMenu } from "./MobileMenu";
import { Config } from "../util/config";
import { Logo } from "../stories/Logo";
import { containerCenter } from "../util/utilityStyles";
import { Icon } from "../stories/Icon";

interface HeaderCenterProps {
  backgroundColor?: string;
  logo?: string;
  fontFace?: "NEUTRA2" | "Aktiv";
}

const logo1 = "/images/mte.png";
const logo2 = "/images/mte2.png";

export const HeaderCenter = ({
  backgroundColor = "bg-dark",
  logo = logo1,
  fontFace = "NEUTRA2",
}: HeaderCenterProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const iconSize = "h-6";

  return (
    <header className="w-full">
      <div
        className={`bg-white text-gray-500 w-full z-20 transition-all border border-b-gray-700`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-14 lg:h-20">
            <div className="flex flex-1">
              <div className="lg:hidden">
                <button
                  className="flex items-center"
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  menu
                </button>
              </div>
              <nav
                aria-label="primary navigation"
                className={`hidden lg:flex space-x-6 tracking-widest text-xl`}
              >
                {Config.menuLinks.map((link) => {
                  if (link.displayName !== "Merch") {
                    return (
                      <a
                        key={link.displayName}
                        className="flex items-center space-x-1 uppercase"
                      >
                        <span>{link.displayName}</span>
                      </a>
                    );
                  }
                })}
              </nav>
            </div>

            <div className={`absolute left-1/2 -ml-10`}>
              <Logo title={Config.site.title} />
            </div>
            <div className="flex flex-1 justify-end space-x-5">
              {Config.menuLinksRight.map((link) => (
                <a
                  key={link.displayName}
                  className="flex items-center space-x-1"
                >
                  <span>{link.displayName}</span>
                </a>
              ))}
              {/* <Icon Icon={MapPinIcon} url="/" srText="Map Icon" />
              <Icon
                Icon={ShoppingCartIcon}
                url="/"
                srText="Shopping Cart Icon"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};
