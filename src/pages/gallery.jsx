export default function Gallery() {
  // Gallery images from public/gallery-page-images
  const tempImg = [
    "/gallery-page-img/img-1.avif",
    "/gallery-page-img/img-2.avif",
    "/gallery-page-img/img-3.avif",
    "/gallery-page-img/img-4.avif",
    "/gallery-page-img/img-5.avif",
    "/gallery-page-img/img-6.avif",
    "/gallery-page-img/img-7.avif",
  ];

  // random column
  const colSpans = ["md:col-span-1", "md:col-span-2"];

  // random row
  const rowSpans = ["row-span-1", "row-span-2"];

  return (
    <>
      <div className=" py-20 px-3 md:px-6 md:py-30">
        {/* text section */}
        <div className=" text-black/90 mb-10 md:mb-20">
          <h1 className="text-2xl mb-2 md:text-4xl md:mb-5">
            A Portfolio Of Precision
          </h1>
          <p className="text-sm md:text-2xl">
            Explore a curated collection of our recent work, showcasing the
            transformative power of a Solstice detail
          </p>
        </div>

        {/* image section */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4 ">
          {tempImg.map((img, index) => {
            // random column
            const randomCol =
              colSpans[Math.floor(Math.random() * colSpans.length)];

            // random row
            const randomRow =
              rowSpans[Math.floor(Math.random() * rowSpans.length)];
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl shadow-md ${randomCol} ${randomRow}`}
              >
                <img
                  src={img}
                  alt={`car image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
