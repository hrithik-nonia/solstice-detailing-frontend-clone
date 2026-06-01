import { useAppContext } from "../app-context/app-context";

export default function ImgCatelog({ onClose, redirectToSec4, currentIndex }) {
  // use state from context to slide images
  const { current, setCurrent } = useAppContext();

  // temp images
  const images = [
    "/landing-page-img/lan-cont-img.avif",
    "/landing-page-img/lan-cont-2-img.avif",
    "/landing-page-img/lan-cont-3-img.avif",
    "/landing-page-img/lan-cont-6-img.avif",
    "/landing-page-img/lan-cont-4-img.avif",
    "/landing-page-img/lan-cont-5-img.avif",
  ];
  return (
    <>
      <div className="bg-white h-screen z-10 inset-0 fixed ">
        <button
          className="z-20 absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
          onClick={() => {
            onClose();
            redirectToSec4();
          }}
          aria-label="Close"
        >
          &#10005;
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : 0))}
          className="absolute lg:left-20 left-2 z-10 top-[50%] bg-gray-300 shadow px-3 py-2 rounded-full disabled:opacity-40"
          disabled={current === 0}
          aria-label="Previous Image"
        >
          &#8592;
        </button>

        {/* Images Scroll Area */}
        <div className="w-full h-screen flex items-center justify-center lg:px-24">
          <img
            src={images[current]}
            alt={`Gallery Image ${current + 1}`}
            className="object-contain max-h-[80vh] max-w-full rounded-md shadow transition-transform duration-300"
          />
        </div>

        {/* Right Shift Button */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : prev))
          }
          className="absolute lg:right-20 right-2 z-10 top-[50%] bg-gray-300 shadow px-3 py-2 rounded-full disabled:opacity-40"
          disabled={current === images.length - 1}
          aria-label="Next Image"
        >
          &#8594;
        </button>
      </div>
    </>
  );
}
