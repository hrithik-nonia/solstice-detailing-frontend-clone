import { NavLink } from "react-router-dom";
import { tempCardData } from "../constant";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  // ref for animation
  const [
    sec2BtnRef,
    sec1TextRef,
    sec1TextPRef,
    sec2TextPRef,
    sec2TextRef,
    sec1ImgRef,
  ] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef([])];

  // animations

  useGSAP(() => {
    // animation for section first texts
    gsap.from(sec1TextRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: sec1TextRef.current,
        start: "top 90%",
      },
    });

    gsap.from(sec1TextPRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sec1TextPRef.current,
        start: "top 90%",
      },
    });

    // animation for section first images
    sec1ImgRef.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.5,
        duration: 0.2,
        delay: i * 0.2,
        ease: "bounce.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });

    // section 2 text animation
    gsap.from(sec2TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: sec2TextRef.current,
        start: "top 90%",
      },
    });

    gsap.from(sec2TextPRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      delay: 0.5,
      scrollTrigger: {
        trigger: sec2TextPRef.current,
        start: "top 90%",
      },
    });

    gsap.from(sec2BtnRef.current, {
      opacity: 0,
      duration: 1,
      scale: 0.5,

      delay: 0.5,
      scrollTrigger: {
        trigger: sec2BtnRef.current,
        start: "top 90%",
      },
    });
  });
  return (
    <>
      {/* first section */}
      <div className="w-full lg:px-10 lg:py-35 py-20 px-3 md:py-30 md:px-5">
        {/* heading */}
        <div className="lg:flex lg:justify-between  pb-10">
          <h1
            className="lg:text-5xl text-black/90 text-2xl mb-2 md:text-3xl"
            ref={sec1TextRef}
          >
            Our Detailing Sanctions
          </h1>
          <p
            className="text-gray-700 lg:text-xl lg:w-1/4 lg:mr-30 md:text-xl"
            ref={sec1TextPRef}
          >
            Choose the definitive treatment for your vehicle
          </p>
        </div>

        <div className=" lg:grid-cols-3 gap-y-5 flex flex-col md:grid md:grid-cols-2 md:gap-4">
          {/* content cards*/}
          {tempCardData.map(({ img, heading, disc }, i) => (
            <div
              className="max-w-sm rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-103 hover:shadow-xl"
              key={i}
              ref={(el) => (sec1ImgRef.current[i] = el)}
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
          <h1
            className="text-2xl mb-2 md:text-4xl md:mb-5 font-semibold"
            ref={sec2TextRef}
          >
            Enhance Your Protection
          </h1>
          <p className="leading-5 md:text-2xl md:leading-8" ref={sec2TextPRef}>
            enhance your protection Elevate your detailing experience with
            specialized services like wheel coating, glass polishing, and engine
            bay detailing
          </p>
          <NavLink
            to="/contact"
            className="mt-6 w-fit bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-white/60 transition"
            ref={sec2BtnRef}
          >
            Get a Quote
          </NavLink>
        </div>
      </div>
    </>
  );
}
