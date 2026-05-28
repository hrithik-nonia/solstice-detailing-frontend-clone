import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  // icon array for social media icon
  const socials = [
    { href: "#", icon: <FaFacebook size={18} />, label: "Facebook" },
    { href: "#", icon: <FaInstagram size={18} />, label: "Instagram" },
    { href: "#", icon: <FaYoutube size={18} />, label: "YouTube" },
  ];
  return (
    <>
      <footer className="w-full px-6 py-10 text-center border-t border-gray-200 lg:px-10">
        <div className="lg:flex lg:justify-between ">
          {/* Brand Name */}
          <p className="text-base font-medium text-gray-900 mb-6 lg:text-3xl">
            Solstice Detailing
          </p>

          {/* Address & Contact */}
          <div>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">
              500 Terry Francine St, San Francisco, <br /> CA 94158
            </p>
            <p className="text-sm text-gray-500 mb-1">123-456-7890</p>
            <p className="text-sm text-gray-500 mb-6">info@mysite.com</p>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center gap-3 mb-8">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 transition"
              >
                <span className="text-white text-xs">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 mb-8 lg:grid lg:grid-cols-2 ">
          <div className="lg:grid lg:grid-cols-2 lg:w-1/2 lg:gap-y-3">
            {[
              "Privacy policy",
              "Refund Policy",
              "Accessibility Statement",
              "Terms & Conditions",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-900 underline underline-offset-2 hover:text-gray-600"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="lg:flex lg:items-center lg:justify-end">
            <p className="text-xs text-gray-400">
              © 2035 by Solstice Detailing. Powered and secured by
              <a href="#" className="underline text-gray-600">
                Wix
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
