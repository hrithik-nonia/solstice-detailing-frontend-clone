import { useParams } from "react-router-dom";
import { faqData } from "../constant";

export default function Faq() {
  // take label value from footer component
  const { label } = useParams();

  // take value of frqData which should be display
  const data = faqData.find((item) => item.id === label);
  if (!data)
    return (
      <div className="lg:py-30 lg:px-10 text-center lg:text-4xl font-semibold">
        Page not found
      </div>
    );

  const { title, contents, specialCont } = data;

  return (
    <>
      {/* special content */}
      {specialCont ? (
        <div className="pt-30 ">
          {specialCont.map(({ text, linkText }, i) => (
            <div className="lg:p-15 bg-black p-5" key={i}>
              <div className="lg:w-[60%] text-white">
                <p className="pb-10 text-sm">{text}</p>
                <p className="text-sm">{linkText}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="py-30 px-5 md:px-10 md:py-30 ">
        <div className="lg:w-[65%]">
          {/* title block */}
          <div className="lg:text-5xl font-semibold lg:pb-20 text-xl pb-10">
            {title}
          </div>

          {/* heading block */}
          {contents.map(({ h, c }, i) => (
            <div key={i}>
              <div className="lg:text-2xl lg:mb-10 text-lg pb-5">{h}</div>
              <div className="font-light lg:mb-15 text-sm pb-10">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
