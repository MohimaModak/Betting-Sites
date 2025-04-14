import React, { useState } from "react";
import { Link } from "react-scroll";
import './Navbar.css';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50">
      <div className="md:hidden sm:block text-sm" onClick={toggleButton}>
        <span className="w-5 h-1 bg-black my-2"></span>
        <span className="w-5 h-1 bg-black my-2"></span>
        <span className="w-5 h-1 bg-black my-2"></span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className=" flex justify-center items-center gap-2">
          {/* <img src={logo} className="w-12" /> */}
          <h1 className="text-2xl lg:text-3xl font-bold text-blue-600">HealthCare</h1>
        </div>
        <div className="navbar-links text-blue-600 font-bold">
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/Shop" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Shop
          </Link>
          <Link to="/Services" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Services
          </Link>
          <Link to="/AdoptPet" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            AdoptPet
          </Link>
          <Link to="/Community" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Community
          </Link>
          <Link to="/Testimonials" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Testimonials
          </Link>
          <Link to="/Blog" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Blog
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
          Contact
          </Link>
        </div>
      </div>


      <div className="flex justify-center items-center">
        <div className="hidden md:block bg-sky-50 text-blue-500 w-full">
          <nav className="navbar flex justify-between items-center gap-2">

            <div className=" flex justify-center items-center gap-2">
              {/* <img src={logo} className="w-14" /> */}
              <h1 className="text-2xl lg:text-3xl font-bold">HealthCare</h1>
            </div>

            <div className="navbar-links lg:flex justify-evenly items-center">
              <Link to="/" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
                Home
              </Link>
              <Link to="/Shop" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
                Shop
              </Link>
              <Link to="/Services" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
                Services
              </Link>
              <Link to="/AdoptPet" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
                AdoptPet
              </Link>
              <Link to="/Community" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
                Community
              </Link>
              <Link to="/Testimonials" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
                Testimonials
              </Link>
              <Link to="/Blog" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
                Blog
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-lg mr-5 font-semibold">
              Contact
              </Link>
            </div>
            <div className="text-lg lg:text-xl bg-blue-500 px-2.5 lg:px-4 py-1.5 rounded-full text-white">
              <button>Sign Up</button>
            </div>

          </nav>
        </div>
      </div>
    </div>
  );
}