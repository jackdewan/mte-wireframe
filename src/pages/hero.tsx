export default function HeroPage() {
  return (
    <section className="bg-cream w-full container py-10 h-screen">
      <div className="flex flex-col-reverse items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-extrabold uppercase text-center">
            The Headline Goes Here
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra scelerisque sit
            etiam eu sed faucibus quis mi.
          </p>
        </div>
        <div className="w-3/4 pb-10">
          <img src="/images/mtn-blob.png" alt="" />
        </div>
      </div>
    </section>
  );
}
