import { useState } from "react";
import { testimonials } from "../constant.js";
import { NavLink } from "react-router-dom";
// temp img for section 4
const images = [
  "/landing-page-img/lan-cont-img.avif",
  "/landing-page-img/lan-cont-2-img.avif",
  "/landing-page-img/lan-cont-3-img.avif",
  "/landing-page-img/lan-cont-6-img.avif",
];

export default function Landing() {
  // state for image slide
  const [current, setCurrent] = useState(0);

  // left right button handling
  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
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
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 bg-white/10 lg:flex-row lg:items-center lg:pl-16 lg:pr-5">
          <h1 className="text-black/90 text-3xl md:text-5xl font-bold max-w-xl lg:max-w-sm">
            Automotive perfection, redefined
          </h1>
          <div className=" lg:ml-auto ">
            <p className="text-black/80 text-sm md:text-base mt-4 max-w-md lg:max-w-[300px] mb-6">
              We provide an unrivaled standard of vehicle care, restoring and
              protecting your automotive investment with scientific precision.
            </p>

            <NavLink
              to="/contact"
              className=" w-fit bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-black/80 transition"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="px-4 py-5 md:px-8 md:py-12 w-full lg:grid lg:grid-cols-[60%_40%] lg:h-screen">
        {/* Two Images Row */}
        <div className="flex gap-2.5 md:gap-5 mb-6 md:mb-10 lg:px-5 lg:py-20">
          {/* Left Image — 60% */}
          <div className="flex-[6] h-40 md:h-80 lg:h-55 rounded-xl overflow-hidden">
            <img
              src="/landing-page-img/lan-cont-img.avif"
              alt="Car headlight"
              className="w-full h-full object-cover lg:object-contain"
            />
          </div>

          {/* Right Image — 40% */}
          <div className="flex-[4] h-40 md:h-80 lg:h-30 rounded-xl overflow-hidden lg:mt-auto ">
            <img
              src="/landing-page-img/lan-cont-2-img.avif"
              alt="Car mirror"
              className="w-full h-full object-cover lg:object-contain"
            />
          </div>
        </div>

        <div className="lg:my-auto lg:gap-40 lg:flex lg:flex-col lg:px-5">
          {/* Text Content */}
          <h2 className="text-2xl md:text-5xl font-medium text-gray-900 leading-snug mb-3 lg:text-4xl">
            A Spectrum Of Detailing Excellence
          </h2>

          <div>
            <p className="text-sm md:text-2xl text-gray-500 leading-relaxed mb-6 lg:text-lg">
              From intensive restoration to protective ceramic coatings, our
              services are tailored to the unique needs of your vehicle.
            </p>

            {/* Button */}
            <NavLink
              to="/service"
              className="bg-black text-white text-sm md:text-xl lg:text-lg font-medium px-6 py-4 rounded-md hover:bg-gray-800 transition  lg:py-3 lg:px-6 hover:underline"
            >
              Discover Our Services
            </NavLink>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="w-full py-5 lg:grid lg:grid-cols-[50%_50%]">
        <div>
          <img
            src="../../public/landing-page-img/lan-cont-3-img.avif"
            alt="section 3 image"
            className="object-contain lg:h-screen"
          />
        </div>

        <div className="px-4 py-6 md:px-8 md:py-15 w-[90%] lg:my-auto lg:w-full lg:px-30">
          <h2 className="text-2xl md:text-5xl font-medium text-gray-900 leading-tight mb-3 lg:leading-12">
            Where Artistry <br /> Meets Engineering
          </h2>

          <p className="text-sm md:text-3xl text-gray-500 leading-5 md:leading-10 lg:text-lg lg:leading-6 lg:pt-7">
            Our multi-stage process combines cutting-edge technology with
            time-honored techniques, ensuring a flawless finish that endures. We
            treat every vehicle as a masterpiece in the making.
          </p>
        </div>
      </div>

      {/* section 4 */}
      <div className="w-full px-4 py-6 md:px-8 pt-20">
        {/* Heading */}
        <div className="lg:grid lg:grid-cols-[70%_30%] ">
          <h2 className="text-2xl font-medium text-gray-900 leading-tight mb-2 md:text-5xl">
            The Proof Is In The Polish
          </h2>
          <p className="text-sm md:text-3xl text-gray-500 mb-5 lg:text-2xl">
            Witness the transformative results our clients experience.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full h-130 md:h-[500px] rounded-xl overflow-hidden lg:pt-10">
          <img
            src={images[current]}
            alt={`Polish result ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-500 "
          />

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <span className="text-lg">‹</span>
          </button>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>

      {/* section 5 */}
      <div className="w-full lg:py-20">
        <div className="w-full px-4 py-6 md:px-8">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-6 lg:text-6xl lg:w-1/3 lg:mb-10">
            Endorsed By Connoisseurs
          </h2>

          <div className="flex flex-col gap-4 lg:flex-row ">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-5">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-3">
                  "{t.quote}"
                </p>
                <p className="text-sm text-gray-400">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
