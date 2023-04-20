import { Config } from "@/util/config";
import { Logo } from "@/stories/Logo";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Logo title="Logo" />
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          {Config.footerLinks.map((link) => (
            <li key={link.displayName}>
              <a href={link.path} className="mr-4 hover:underline md:mr-6 ">
                {link.displayName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©{" "}
        <a href="#" className="hover:underline">
          {Config.site.owner}™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
