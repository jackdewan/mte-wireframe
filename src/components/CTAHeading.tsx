interface CTAHeadingProps {
  title: string;
}

export const CTAHeading = ({ title }: CTAHeadingProps) => {
  return (
    <section className="bg-white py-16">
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
            {title}
          </h2>
          <p className="mb-10 font-light text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="text-white bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Check it out
          </a>
        </div>
      </div>
    </section>
  );
};
