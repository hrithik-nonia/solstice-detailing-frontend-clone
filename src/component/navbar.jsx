import { links } from "../constant";
import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  // state for burger menu toggle
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="absolute z-10 flex w-full p-5 md:px-8 lg:py-7 lg:px-15">
        {/* logo  */}
        <NavLink to="/" className="font-semibold ">
          Solstice Detailing
        </NavLink>

        {/* nav links */}
        <div className="md:ms-auto flex hidden md:flex gap-5 md:pr-10 lg:pr-30 lg:gap-10">
          {links.map((links, i) => (
            <NavLink to={links.link} key={i} className="hover:underline">
              {links.text}
            </NavLink>
          ))}
        </div>

        {/* contact detail */}
        <span className="flex items-center  gap-2 cursor-pointer hidden md:flex">
          <IoCall size={"20px"} />
          <u>123-456-7890</u>
        </span>

        {/* Hamburger Button */}
        <button
          className="md:hidden right-5 absolute z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className=" h-screen bg-white w-full absolute z-20 left-0 top-0 md:hidden">
            <div className="flex flex-col absolute top-15 left-5  text-xl  bg-white gap-5">
              {links.map((links, i) => (
                <NavLink
                  to={links.link}
                  key={i}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {links.text}
                </NavLink>
              ))}

              {/* contect detail */}
              <span className="flex items-center  gap-2 cursor-pointer">
                <IoCall size={"20px"} />
                <u>123-456-7890</u>
              </span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
