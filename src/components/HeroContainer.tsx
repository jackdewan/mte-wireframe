interface HeroContainerProps {
  children: JSX.Element;
}

export const HeroContainer = ({ children }: HeroContainerProps) => {
  return <section className={`h-screen pt-14 lg:pt-20`}>{children}</section>;
};
