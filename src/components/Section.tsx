interface SectionProps {
  title: string;
  fullWidth?: boolean;
  children: JSX.Element;
}

export const Section = ({
  title,
  fullWidth = false,
  children,
}: SectionProps) => {
  return (
    <section className={`${fullWidth ? "" : "container"} py-8`}>
      <h2 className="mb-10 text-center text-4xl">{title}</h2>
      {children}
    </section>
  );
};
