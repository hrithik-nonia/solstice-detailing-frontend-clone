export default function Services() {
  const tempCardData = [
    {
      img: "../../public/servise-page-img/card-img-1.avif",
      heading: "Interior Restoration",
      disc: `A comprehensive deep clean of all interior surfaces, from leather
              conditioning to fabric shampooing, returning your cabin to
              showroom condition.`,
    },
    {
      img: "../../public/servise-page-img/card-img-2.avif",
      heading: "Exterior Revival",
      disc: `A meticulous process involving decontamination, multi-stage paint correction, and application of premium waxes or sealants for a brilliant, durable shine.`,
    },
    {
      img: "../../public/servise-page-img/card-img-3.avif",
      heading: "Ceramic Supremacy",
      disc: `The ultimate in paint protection. We apply professional-grade ceramic coatings that provide unparalleled gloss, hydrophobicity, and resistance to environmental contaminants.`,
    },
  ];
  return (
    <>
      {/* first section */}
      <div className="w-full lg:px-10 lg:py-35 py-20 px-3 md:py-30 md:px-5">
        {/* heading */}
        <div className="lg:flex lg:justify-between  pb-10">
          <h1 className="lg:text-5xl text-black/90 text-2xl mb-2 md:text-3xl">
            Our Detailing Sanctions
          </h1>
          <p className="text-gray-700 lg:text-xl lg:w-1/4 lg:mr-30 md:text-xl">
            Choose the definitive treatment for your vehicle
          </p>
        </div>

        <div className=" lg:grid-cols-3 gap-y-5 flex flex-col md:grid md:grid-cols-2 md:gap-4">
          {/* content cards*/}
          {tempCardData.map(({ img, heading, disc }, i) => (
            <div
              className="max-w-sm rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-103 hover:shadow-xl"
              key={i}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={`${heading} image`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-5 py-5">
                <h2 className="text-2xl font-medium text-gray-900 tracking-tight mb-2">
                  {heading}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* second section */}
      <div className="w-full relative h-[550px]">
        <img
          src="../../public/servise-page-img/banner-img.avif"
          alt="Service Detail"
          className=" h-full w-full object-cover object-[25%_center] md:object-center"
        />

        {/* banner text */}
        <div className=" absolute  inset-0 bg-black/10 text-white flex flex-col justify-center px-5 md:w-[60%] md:px-10 lg:w-1/2">
          <h1 className="text-2xl mb-2 md:text-4xl md:mb-5 font-semibold">
            Enhance Your Protection
          </h1>
          <p className="leading-5 md:text-2xl md:leading-8">
            enhance your protection Elevate your detailing experience with
            specialized services like wheel coating, glass polishing, and engine
            bay detailing
          </p>
          <button className="mt-6 w-fit bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-white/60 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}
