export default function Contact() {
  return (
    <>
      <div className=" md:py-35 md:px-10 grid md:grid-cols-2 py-25 px-3 ">
        <div className=" lg:w-[70%] mb-10">
          {/* Heading */}
          <h1 className="lg:text-5xl lg:font-semibold text-gray-900 lg:mb-5 text-2xl mb-3">
            Schedule Your Consultation
          </h1>

          {/* Subtext */}
          <p className="lg:text-lg lg:leading-6 text-gray-500 lg:mb-15 mb-10">
            Let's discuss a bespoke detailing solution for your vehicle. We are
            ready to answer your questions and book your appointment.
          </p>

          {/* Address */}
          <div className="lg:mb-15 mb-10">
            <p className="lg:text-lg text-gray-400 mb-1 text-lg">Address</p>
            <p className="lg:text-xl text-gray-900 lg:font-medium leading-relaxed text-xl">
              500 Terry Francine St
              <br />
              San Francisco, CA 94158
            </p>
          </div>

          <div className="lg:flex lg:gap-15 mb-10">
            {/* Telephone */}
            <div className="mb-10">
              <p className="lg:text-lg text-gray-400 mb-1 text-lg">Telephone</p>
              <p className="lg:text-xl text-gray-900 font-medium text-xl">
                123-456-7890
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="lg:text-lg text-gray-400 mb-1 text-lg">Email</p>
              <p className="lg:text-xl text-gray-900 font-medium text-xl">
                info@mysite.com
              </p>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div>
          {/* Row 1: First Name + Last Name */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-800 mb-2">
                First name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-2">
                Last name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-gray-500"
              />
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-800 mb-2">
                Email *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-2">
                Phone *
              </label>
              <div className="w-full border border-gray-300 rounded px-3 py-3 flex items-center gap-2 cursor-pointer">
                <span className="text-lg">🌐</span>
                <span className="text-gray-400 text-sm">▾</span>
              </div>
            </div>
          </div>

          {/* Row 3: Vehicle Make & Model + Desired Service */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-800 mb-2">
                Vehicle Make & Model
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-2">
                Desired Service
              </label>
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full border border-gray-300 rounded px-3 py-3 text-sm text-gray-400 appearance-none outline-none focus:border-gray-500 bg-white cursor-pointer"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="interior">Interior Restoration</option>
                  <option value="exterior">Exterior Polish</option>
                  <option value="coating">Ceramic Coating</option>
                  <option value="detailing">Full Detailing</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  ▾
                </span>
              </div>
            </div>
          </div>

          {/* Row 4: Message — full width */}
          <div className="mb-6">
            <label className="block text-sm text-gray-800 mb-2">Message</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-3 text-sm outline-none focus:border-gray-500"
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-gray-900 text-white text-sm font-semibold py-4 rounded hover:bg-black transition">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
