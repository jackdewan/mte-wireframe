import Link from "next/link";

export const WCard = () => {
  return (
    <div className="p-8 bg-blue-400 rounded-lg text-gray-800 max-w-max my-20">
      <div className="">
        <div className="mb-2">
          <h2 className="font-bold text-2xl">waze</h2>
        </div>
        <div className="mb-2">
          <h3 className="font-bold text-3xl">
            We could all go for a lot less traffic in our lives
          </h3>
        </div>
        <div className="mb-4">
          <p>Join 140+ million helping each other get there.</p>
        </div>
        <div className="flex items-center">
          <div className="mr-4 flex">
            <Link
              href="#"
              className="px-6 py-2 bg-white rounded-3xl font-bold text-sm"
            >
              Download
            </Link>
          </div>
          <Link href="#" className="underline">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};
