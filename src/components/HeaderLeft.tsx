import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";
import { Config } from "../util/config";
import { Logo } from "../stories/Logo";

interface HeaderLeftProps {
  backgroundColor?: string;
  logo?: string;
  fontFace?: "NEUTRA2" | "Aktiv";
}

export const HeaderLeft = ({}: HeaderLeftProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full">
      <div
        className={`bg-white text-gray-500 fixed top-0 w-full z-20 transition-all border border-b-gray-700`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-14 lg:h-20">
            <div>
              <Logo title={Config.site.title} />
            </div>
            <div className="">
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
          </div>
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};
