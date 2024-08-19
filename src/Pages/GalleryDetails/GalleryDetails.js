import React, { useEffect } from "react";

import GBI from "../../Assets/photos/gallery/Office3.jpg";
import {
  FaAngleDoubleUp,
  FaEnvelope,
  FaHome,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import GIA1 from "../../Assets/photos/gallery/Achievement3.jpg";
import GIA2 from "../../Assets/photos/gallery/Achievement1.jpg";
import GIA3 from "../../Assets/photos/gallery/Achievement2.jpg";
import GIA4 from "../../Assets/photos/gallery/all-passport.jpg";

import GIO0 from "../../Assets/photos/gallery/Office.jpg";
import GIO1 from "../../Assets/photos/gallery/Office1.jpg";
import GIO2 from "../../Assets/photos/gallery/Office2.jpg";
import GIO3 from "../../Assets/photos/gallery/Office3.jpg";
import GIO4 from "../../Assets/photos/gallery/Office4.jpg";
import GIO5 from "../../Assets/photos/gallery/Office5.jpg";
import GIO6 from "../../Assets/photos/gallery/Office6.jpg";
import GIO7 from "../../Assets/photos/gallery/Office7.jpg";

import GIT1 from "../../Assets/photos/gallery/Travel1.jpg";
import GIT2 from "../../Assets/photos/gallery/Travel2.jpg";
import GIT3 from "../../Assets/photos/gallery/Travel3.jpg";
import GIT4 from "../../Assets/photos/gallery/Travel4.jpg";
import GIT5 from "../../Assets/photos/gallery/Travel5.jpg";
import GIT6 from "../../Assets/photos/gallery/Travel6.jpg";
import GIT7 from "../../Assets/photos/gallery/Travel7.jpg";
import GIT8 from "../../Assets/photos/gallery/Travel8.jpg";
import GIT9 from "../../Assets/photos/gallery/Travel9.jpg";
import GIT10 from "../../Assets/photos/gallery/Travel10.jpg";
import GIT11 from "../../Assets/photos/gallery/Travel11.jpg";
import GIT12 from "../../Assets/photos/gallery/Travel12.jpg";

import GIR1 from "../../Assets/photos/gallery/Recruitment1.jpg";
import GIR2 from "../../Assets/photos/gallery/Recruitment2.jpg";
import GIR3 from "../../Assets/photos/gallery/Recruitment3.jpg";
import GIR4 from "../../Assets/photos/gallery/Recruitment4.jpg";

import { useInView } from "react-intersection-observer";

const GalleryDetails = () => {
  const { ref, inView } = useInView();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const Office = [
    { Img: GIO0 },
    { Img: GIO1 },
    { Img: GIO2 },
    { Img: GIO3 },
    { Img: GIO4 },
    { Img: GIO5 },
    { Img: GIO6 },
    { Img: GIO7 },
  ];
  const Archviement = [
    { Img: GIA1 },
    { Img: GIA2 },
    { Img: GIA3 },
    { Img: GIA4 },
  ];
  const Travailing = [
    { Img: GIT1 },
    { Img: GIT2 },
    { Img: GIT3 },
    { Img: GIT4 },
    { Img: GIT5 },
    { Img: GIT6 },
    { Img: GIT7 },
    { Img: GIT8 },
    { Img: GIT9 },
    { Img: GIT10 },
    { Img: GIT11 },
    { Img: GIT12 },
  ];
  const Recruitment = [
    { Img: GIR1 },
    { Img: GIR2 },
    { Img: GIR3 },
    { Img: GIR4 },
  ];
  return (
    <div>
      <header className="py-3 bg-slate-800 text-white hidden lg:block">
        <div className="mx-auto max-w-6xl px-8 lg:px-0  flex justify-between items-center">
          <div className="flex items-center gap-2 my-1">
            <FaEnvelope />
            <p>tradeajharna@gmail.com</p>
          </div>

          <div className="flex items-center gap-3 my-1">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p className="text-md">+8801716936559</p>
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-blue-950 ">
        <div className="navbar mx-auto max-w-6xl  ">
          <div className=" navbar-center mx-auto">
            <ul className="flex items-center text-white font-semibold gap-3">
              <li>
                {" "}
                <Link
                  to="/"
                  className="hover:border-b-2  hover:border-orange-500 p-2 mx-2 flex text-2xl "
                >
                  <FaHome />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        ref={ref}
        className="hero py-8"
        style={{ backgroundImage: `url(${GBI})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">Gallery</h1>
            <p className="mb-5 text-xl">
              A Jharna Trade International /{" "}
              <span className="text-orange-400">Gallery</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-base-200 py-8">
        <div className="mx-auto max-w-5xl px-8 lg:px-0 ">
          <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-bold mb-2 uppercase">Office</h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
          </div>
          <div className="mx-auto bg-base-100 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-2">
            <PhotoProvider>
              {Office.map((p, i) => (
                <PhotoView src={p.Img}>
                  <img src={p.Img} alt="" className="w-64 h-56" />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
      </div>
      <div className="bg-base-100 py-8">
        <div className="mx-auto max-w-5xl px-8 lg:px-0 ">
          <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-bold mb-2 uppercase">Archviement </h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
          </div>
          <div className="mx-auto bg-base-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-2">
            <PhotoProvider>
              {Archviement.map((p, i) => (
                <PhotoView src={p.Img}>
                  <img src={p.Img} alt="" className="w-64 h-56" />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
      </div>
      <div className="bg-base-200 py-8">
        <div className="mx-auto max-w-5xl px-8 lg:px-0 ">
          <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-bold mb-2 uppercase">Travailing</h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
          </div>
          <div className="mx-auto bg-base-100 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-2">
            <PhotoProvider>
              {Travailing.map((p, i) => (
                <PhotoView src={p.Img}>
                  <img src={p.Img} alt="" className="w-64 h-56" />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
      </div>
      <div className="bg-base-100 py-8">
        <div className="mx-auto max-w-5xl px-8 lg:px-0 ">
          <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-bold mb-2 uppercase">Recruitment</h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
          </div>
          <div className="mx-auto bg-base-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-2">
            <PhotoProvider>
              {Recruitment.map((p, i) => (
                <PhotoView src={p.Img}>
                  <img src={p.Img} alt="" className="w-64 h-56" />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
      </div>

      {/* Scroll to top  */}
      <div
        className={`fixed bottom-8 lg:bottom-6 right-4 lg:right-6 rounded-full border-2 border-white' ${
          inView ? "hidden" : ""
        }`}
      >
        <FaAngleDoubleUp
          className=" text-2xl lg:text-3xl text-orange-400 m-2 z-1"
          onClick={() => scroll.scrollToTop()}
        />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default GalleryDetails;
