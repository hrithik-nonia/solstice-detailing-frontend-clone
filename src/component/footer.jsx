import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Popup from "./popup";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  // icon array for social media icon
  const socials = [
    {
      href: "https://www.facebook.com/",
      icon: <FaFacebook size={18} />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/",
      icon: <FaInstagram size={18} />,
      label: "Instagram",
    },
    {
      href: "https://www.youtube.com/",
      icon: <FaYoutube size={18} />,
      label: "YouTube",
    },
  ];

  // state for show popup
  const [showPopup, setShowPopup] = useState(false);

  // temp footer links
  const footerLinks = [
    { label: "Privacy policy", link: "/faq/privacy-policy" },
    { label: "Refund Policy", link: "/faq/refund-policy" },
    { label: "Accessibility Statement", link: "/faq/Accessibility-Statement" },
    { label: "Terms & Conditions", link: "/faq/terms-conditions" },
  ];

  return (
    <>
      <footer className="w-full px-6 py-10 text-center border-t border-gray-200 lg:px-10">
        <div className="lg:flex lg:justify-between ">
          {/* Brand Name */}
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-base font-medium text-gray-900 mb-6 lg:text-3xl"
          >
            Solstice Detailing
          </NavLink>

          {/* Address & Contact */}
          <div className="flex flex-col text-gray-500">
            <a
              href="https://maps.app.goo.gl/SK1AmXZCRJsMdUAN9"
              target="_blank"
              rel="noopener noreferrer"
              className="  leading-relaxed mb-3 cursor-pointer"
            >
              Asansol , ningha
            </a>

            <span
              className="  leading-relaxed mb-3 cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              123-456-7890
            </span>
            <span className="  leading-relaxed mb-3 cursor-pointer">
              info@mysite.com
            </span>
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
          <div className="grid lg:grid-cols-2 lg:w-1/2 gap-y-3 grid-row ">
            {footerLinks.map(({ label, link }, i) => (
              <NavLink
                to={link}
                key={i}
                className="text-sm text-gray-900 underline underline-offset-2 hover:text-gray-600"
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Copyright */}
          <div className="lg:flex lg:items-center lg:justify-end">
            <p className="text-xs text-gray-400">
              © 2026 by Solstice Detailing. Powered and secured by
              <a href="#" className="underline text-gray-600">
                abc
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* show popup */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}
