interface LogoProps {
  title: string;
}

export const Logo = ({ title }: LogoProps) => {
  return (
    <a href="#" className="p-1.5">
      <span className="sr-only">{title}</span>
      <div className="flex items-center justify-center border border-gray-500 rounded-full px-4 py-6 bg-gray-200 h-12 w-12">
        <span className="self-center font-semibold whitespace-nowrap dark:text-white">
          Logo
        </span>
      </div>
    </a>
  );
};
