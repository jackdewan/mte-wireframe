import { ChevronDown } from "../stories/assets/ChevronDown";
import Disclosure from "../stories/Disclosure";

import { Config } from "../util/config";

const icon = {
  Icon: ChevronDown,
  iconStyles: "h-6 w-6 transition duration-150",
  iconOpenStyles: "-rotate-180",
};

export default function DisclosurePage() {
  return (
    <div className="max-w-lg mx-auto">
      <Disclosure>
        {Config.menuLinks.map((link) => (
          <Disclosure.Panel
            key={link.displayName}
            title={link.displayName}
            icon={icon}
          >
            {link.subItems?.map((item) => (
              <div key={item.displayName}>{item.displayName}</div>
            ))}
          </Disclosure.Panel>
        ))}
      </Disclosure>
    </div>
  );
}
