import { Meta, StoryObj } from "@storybook/react";
import { Config } from "../util/config";

import { Disclosure } from "./Disclosure";
import { ChevronDown } from "../stories/assets/ChevronDown";

const icon = {
  Icon: ChevronDown,
  iconStyles: "h-6 w-6 transition duration-300",
  iconOpenStyles: "-rotate-180",
};

const data = [
  {
    id: 1,
    title: "Item 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Item 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 3,
    title: "Item 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 4,
    title: "Item 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

const meta: Meta<typeof Disclosure> = {
  title: "Components/Disclosure",
  component: Disclosure,
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Main: Story = {
  render: (args) => (
    <Disclosure>
      {data.map((item) => (
        <Disclosure.Panel
          key={item.id}
          title={item.title}
          icon={icon}
          className="bg-stone-700 p-2 border-b border-stone-800 text-white uppercase"
        >
          <div className="px-2 py-4 bg-stone-600 text-white">
            {item.content}
          </div>
        </Disclosure.Panel>
      ))}
    </Disclosure>
  ),
};
