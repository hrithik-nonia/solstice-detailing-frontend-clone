import ImgCatelog from "../component/img-catelog";
import { images } from "../constant.js";
import { useState } from "react";

export default function Gallery() {
  // state for show images
  const [showImages, setShowImages] = useState(false);

  // slice images for gallery
  const galleryImages = images.slice(6, 13);

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
          {galleryImages.map((img, index) => {
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
                  onClick={() => setShowImages(true)}
                />
              </div>
            );
          })}
        </div>

        {/* show images here */}
        {showImages && (
          <ImgCatelog
            onClose={() => setShowImages(false)}
            redirectToSec4={() => {}}
            section4Images={galleryImages}
          />
        )}
      </div>
    </>
  );
}
