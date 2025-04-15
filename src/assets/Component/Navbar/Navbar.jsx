import React, { useState } from 'react'
import { Link } from "react-scroll";
import "./Navbar.css"

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-slate-100  font-medium top-0 z-50">
      <div className='flex justify-between items-center  mx-2 mt-2 md:hidden sm:block'>
        <div className="md:hidden sm:block text-sm " onClick={toggleButton}>
          <div className='menu w-8 h-1 rounded-full my-1'></div>
          <div className='menu w-8 h-1 rounded-full my-1'></div>
          <div className='menu w-8 h-1 rounded-full my-1'></div>
        </div>
        <div className='flex items-center gap-1 md:hidden sm:block'>
        </div>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links">
          <div>
            <h1 className='gradient-text text-center text-3xl font-bold'>AI Platform</h1>
          </div>
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/AboutUs" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
          About Us
          </Link>
          <Link to="/OurSiteList" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Our Site List
          </Link>
          <Link to="/Why" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Why Samir Malik
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Contact Us
          </Link>

        </div>
      </div>
      <div className="flex justify-center items-center nav">
        <div className="hidden md:block">
          <nav className="navbar flex justify-center items-center">
            <div className="navbar-links lg:flex justify-center items-center">

              <Link to="/" smooth={true} duration={1000} className="text-xl mr-10">
                Home
              </Link>
              <Link to="/AboutUs" smooth={true} duration={1000} className="text-xl mr-10">
              About Us
              </Link>
              <Link to="/OurSiteList" smooth={true} duration={1000} className="text-xl mr-10">
                Our Site List
              </Link>
              <Link to="/Why" smooth={true} duration={1000} className="text-xl mr-10">
                Why Samir Malik
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl mr-10">
                Contact Us
              </Link>

            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}