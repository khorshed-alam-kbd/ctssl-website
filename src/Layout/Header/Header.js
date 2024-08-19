import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaList,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import img from "../../Assets/photos/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const { pathname } = useLocation();

  return (
    <>
      <header className="py-3 bg-blue-950 text-white hidden lg:block ">
        <div className="mx-auto max-w-6xl px-8 lg:px-0  flex justify-between items-center">
          <div className="flex items-center gap-2 my-1">
            <FaEnvelope />
            <p>comtechsbd@gmail.com</p>
          </div>

          <div className="flex items-center gap-3 my-1">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p className="text-md">+8801620658621</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white ">
        <div className="navbar mx-auto  max-w-6xl ">
          <img className="h-10 hidden lg:flex " src={img} alt="" />

          <div className=" navbar-center hidden lg:flex mx-auto">
            <ul className="flex items-center text-blue-950 font-semibold gap-3">
              <li>
                {" "}
                <Link
                  to="/"
                  className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${
                    pathname === "/" ? "border-b-2 border-orange-500" : ""
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/services"
                  className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${
                    pathname === "/services"
                      ? "border-b-2 border-orange-500"
                      : ""
                  }`}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/clients"
                  className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${
                    pathname === "/clients"
                      ? "border-b-2 border-orange-500"
                      : ""
                  }`}
                >
                  CLIENTS
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/about-us"
                  className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${
                    pathname === "/about-us"
                      ? "border-b-2 border-orange-500"
                      : ""
                  }`}
                >
                  ABOUT US
                </Link>
              </li>
              {/* < li > <Link to='/training' className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${pathname === '/training' ? "border-b-2 border-orange-500" : ""}`}>TRANING</Link></li> */}
              {/* <li>
                {" "}
                <Link
                  to="/contact-us"
                  className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${
                    pathname === "/contact-us"
                      ? "border-b-2 border-orange-500"
                      : ""
                  }`}
                >
                  CONTACT US
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="px-3 w-full lg:w-0 flex item-center justify-between">
            <div
              className="lg:hidden text-blue-950 text-xl "
              onClick={handleButtonClick}
            >
              {isButtonClicked ? <FaTimes /> : <FaList />}
            </div>

            <div className={!isButtonClicked ? "lg:hidden" : "hidden"}>
              <img className="h-7" src={img} alt="" />
            </div>

            <div className={isButtonClicked ? "lg:hidden w-[400px]" : "hidden"}>
              <ul className="text-blue-950 font-semibold gap-3 ">
                <li>
                  {" "}
                  <Link to="/" className="pb-2 px-4 mb-2">
                    HOME
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/services" className="pb-2 px-4 mb-2">
                    SERVICES
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/clients" className="pb-2 px-4 mb-2">
                    CLIENTS
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/about-us" className="pb-2 px-4 mb-2">
                    ABOUT US
                  </Link>
                </li>
                {/* < li > <Link to='/training' className='pb-2 px-4 mb-2'>TRANING</Link></li> */}
                <li>
                  {" "}
                  <Link to="/contact-us" className="pb-2 px-4 mb-2">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:hidden">
              <div className="flex items-center text-blue-950 font-semibold gap-3  ">
                <a href="tel:+8801620658621">
                  <FaPhoneAlt />
                </a>
                <a href="mailto:>comtechsbd@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <Link to="/contact-us" className={`flex justify-end hidden lg:block`}>
            <button className="btn btn-sm btn-outline">Contact Us</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
