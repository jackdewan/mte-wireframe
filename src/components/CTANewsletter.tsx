import { Button } from "@/stories/Button";

export const CTANewsletter = () => {
  return (
    <section className="bg-white dark:bg-gray-600">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="gap-16 justify-between items-center p-6 border-2 border-gray-500 lg:flex lg:gap-24 md:p-12">
          <div className="w-full">
            <h2 className="mb-4 text-3xl tracking-tight sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="sm:text-xl">
              Stay up to date with the new product updates and cool stuff
              happening.
            </p>
          </div>
          <div className="mt-6 w-full lg:mt-0">
            <form action="#">
              <div className="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="member_email"
                    className="hidden mb-2 text-sm font-medium"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm bg-gray-50 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div>
                  <Button label="Subscribe" fullWidth />
                </div>
              </div>
              <div className="text-sm text-left">
                We care about the protection of your data.{" "}
                <a href="#" className="font-medium hover:underline">
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
