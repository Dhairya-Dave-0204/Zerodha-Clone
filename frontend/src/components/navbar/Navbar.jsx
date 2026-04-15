import { logo } from "../../assets/assets";

function Navbar() {
  return (
    <nav className="border-b border-b-gray-200">
      <div className="flex justify-around px-4 py-8 sm:px-6 md:px-10 lg:px-16">
        <div>
          <img src={logo} alt="Logo" className="w-40" />
        </div>
        <menu className="flex gap-10">
          <li className="duration-500 cursor-pointer hover:text-primary hover:scale-105">
            Signup
          </li>
          <li className="duration-500 cursor-pointer hover:text-primary hover:scale-105">
            About
          </li>
          <li className="duration-500 cursor-pointer hover:text-primary hover:scale-105">
            Products
          </li>
          <li className="duration-500 cursor-pointer hover:text-primary hover:scale-105">
            Pricing
          </li>
          <li className="duration-500 cursor-pointer hover:text-primary hover:scale-105">
            Support
          </li>
          <li className="duration-500 cursor-pointer hover:text-primary hover:scale-105">
            Support
          </li>
          <li className="duration-500 cursor-pointer hover:text-primary hover:scale-105">
            <i className="ri-menu-line"></i>
          </li>
        </menu>
      </div>
    </nav>
  );
}

export default Navbar;
