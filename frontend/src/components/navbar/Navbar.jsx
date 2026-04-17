import { useState } from "react";
import { logo } from "../../assets/assets";

const navLinks = ["About", "Products", "Pricing", "Support"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-around px-4 py-5 sm:px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-36 lg:w-40" />

          {/* Desktop Menu */}
          <menu className="items-center hidden gap-10 p-0 m-0 list-none lg:flex">
            {navLinks.map((link) => (
              <li
                key={link}
                className="text-sm font-medium text-gray-600 duration-300 cursor-pointer hover:text-primary hover:scale-105"
              >
                {link}
              </li>
            ))}
            <li>
              <button className="px-5 py-2 ml-4 text-sm font-semibold text-white duration-300 rounded-full bg-primary hover:opacity-90 hover:scale-105">
                Sign Up
              </button>
            </li>
          </menu>

          {/* Mobile Hamburger / Close */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 group"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              /* X icon */
              <i className="text-xl ri-close-line"></i>
            ) : (
              /* Hamburger — two-line modern style */
              <>
                <i className="text-xl ri-menu-line"></i>
              </>
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="absolute left-0 z-50 w-full bg-white border-t border-gray-100 shadow-xl lg:hidden top-full">
            {/* Nav Links */}
            <ul className="flex flex-col p-0 px-6 pt-4 pb-2 m-0 list-none">
              {navLinks.map((link, i) => (
                <li
                  key={link}
                  className={`py-4 cursor-pointer flex items-center justify-between group ${
                    i !== navLinks.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-base font-medium text-gray-800 duration-300 group-hover:text-primary">
                    {link}
                  </span>
                  {/* Subtle arrow */}
                  <span className="text-lg leading-none text-gray-300 duration-300 group-hover:text-primary">
                    →
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Footer */}
            <div className="flex flex-col gap-3 px-6 py-5 border-t border-gray-100 bg-gray-50">
              <button className="w-full py-3 text-sm font-semibold text-white duration-300 rounded-xl bg-primary hover:opacity-90">
                Get Started — It's Free
              </button>
              <button className="w-full py-3 text-sm font-medium text-gray-700 duration-300 border border-gray-200 rounded-xl hover:bg-gray-100">
                Log In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;