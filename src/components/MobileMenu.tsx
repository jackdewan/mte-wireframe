import Disclosure from "../stories/Disclosure";
import { Config } from "../util/config";

interface MobileMenuProps {
  isMenuOpen: boolean;
}

export const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed left-0 top-0 bg-gray-300 h-full w-full z-10 transition-all ease-in duration-500 overflow-x-scroll pb-52 lg:hidden ${
        isMenuOpen ? "block mt-14 lg:mt-20" : "hidden"
      }`}
    >
      <div className="relative top-10 w-full">
        <Disclosure>
          {Config.menuLinks.map((link) => (
            <Disclosure.Panel
              key={link.displayName}
              title={link.displayName}
              className="p-4 border-b border-gray-200"
            >
              {link.subItems.map((subItem) => (
                <div key={subItem.displayName} className="px-4 py-5 bg-white">
                  {subItem.displayName}
                </div>
              ))}
            </Disclosure.Panel>
          ))}
        </Disclosure>
      </div>
    </div>
  );
};
