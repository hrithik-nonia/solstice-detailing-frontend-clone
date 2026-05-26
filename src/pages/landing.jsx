export default function Landing() {
  return (
    <>
      {/* section 1 */}
      <div className="relative w-full h-screen overflow-hidden ">
        <img
          src="/landing-page-img/lan-banner-img.avif"
          alt="Landing Banner"
          className="absolute inset-0
            h-full
            w-[500%] md:w-full
            object-cover
            object-[25%_center] md:25%_object-center
          "
        />

        {/* text area for banner */}
        <div className="absolute inset-0 flex items-center w-full pl-10 pr-5 bg-white/10">
          <h1 className="text-black/90 text-4xl md:text-5xl font-semibold max-w-sm">
            Automotive perfection, redefined
          </h1>

          <div className="ml-auto">
            <p className="text-black/80 text-sm md:text-base max-w-[300px]">
              We provide an unrivaled standard of vehicle care, restoring and
              protecting your automotive investment with scientific precision.
            </p>

            <button className="mt-6 w-fit bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-black/80 cursor-pointer">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-32 bg-blue-400">1</div>
      <div className="w-full h-32 bg-yellow-400">1</div>
      <div className="w-full h-32 bg-green-400">1</div>
      <div className="w-full h-32 bg-purple-400">1</div>
      <div className="w-full h-32 bg-pink-400">1</div>
    </>
  );
}
