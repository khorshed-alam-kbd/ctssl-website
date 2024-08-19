import React, { useEffect, useState } from "react";

import bannerImg from "../../Assets/photos/services-banner.jpg";
import ServiceCard from "../../components/ServiceCard";
import { FaFileCode } from "react-icons/fa";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiAltiumdesigner, SiMicrosoftsharepoint } from "react-icons/si";

import AppDev from "../../components/AppDev";
import WebDev from "../../components/WebDev";
import SoftDev from "../../components/SoftDev";
import TechWeUse from "../../components/TechWeUse";

const serviceData = [
  {
    title: "Enterprise Application Development",
    desc: "Premier and customized business applications and e-commerce solutions development services that safeguard organizational value, performance, and profitability.",
    icon: (
      <FaFileCode className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Web & Mobile Application Development",
    desc: "Extensible web and mobile application development for specific business needs with powerful functionality to retain more clients or optimize internal processes.",
    icon: (
      <AiOutlineDesktop className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Business Intelligence & Data Mining",
    desc: "Result-driven business intelligence by implementing ETL powered with data quality management and rich visualization.",
    icon: (
      <BsBarChart className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Azure Application Development",
    desc: "Azure application development and migration Services that ensures clean cloud experience.",
    icon: (
      <MdOutlineDeveloperMode className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] top-4" />
    ),
  },
  {
    title: "System Analysis & UX/UI Design",
    desc: "User-centric design with distinctive brand identity and favorable impression driven by usability, scalability, and reliability.",
    icon: (
      <SiAltiumdesigner className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Software Testing & Quality Assurance",
    desc: "Testing and QA Services backed by a robust heritage of testing proficiency and recommended for extensive variety of testing services array and excellence of resources.",
    icon: (
      <SiMicrosoftsharepoint className="w-12 md:w-16 h-12 md:h-16 text-red-500 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const [isClickedSoft, setIsClickedSoft] = useState(true);
  const [isClickedWEB, setIsClickedWEB] = useState(false);
  const [isClickedAPP, setIsClickedAPP] = useState(false);

  const handleClick = (type) => {
    if (type === "SWD") {
      setIsClickedWEB(false);
      setIsClickedAPP(false);
      setIsClickedSoft(true);
    } else if (type === "WEB") {
      setIsClickedWEB(true);
      setIsClickedAPP(false);
      setIsClickedSoft(false);
    } else if (type === "APP") {
      setIsClickedWEB(false);
      setIsClickedAPP(true);
      setIsClickedSoft(false);
    }
  };
  return (
    <div id="services">
      <div className="">
        <div className="mx-auto max-w-6xl ">
          <div className="">
            <div className=" gap-5">
              <div className="flex justify-around mb-5">
                <div
                  className={
                    isClickedSoft
                      ? "p-3 border-b-2 border-orange-500"
                      : "text-gray-400 p-3"
                  }
                  onClick={() => handleClick("SWD")}
                >
                  <h1 className="text-xl font-bold">Software Development</h1>
                </div>
                <div
                  className={
                    isClickedWEB
                      ? "p-3 border-b-2 border-orange-500"
                      : "text-gray-400 p-3"
                  }
                  onClick={() => handleClick("WEB")}
                >
                  <h1 className="text-xl font-bold">WEB Development</h1>
                </div>
                <div
                  className={
                    isClickedAPP
                      ? "p-3 border-b-2 border-orange-500"
                      : "text-gray-400 p-3"
                  }
                  onClick={() => handleClick("APP")}
                >
                  <h1 className="text-xl font-bold">APP Development</h1>
                </div>
              </div>

              <div className=" ">
                <div className={isClickedSoft ? "block" : "hidden"}>
                  <SoftDev />
                </div>
                <div className={isClickedWEB ? "block" : "hidden"}>
                  <WebDev />
                </div>

                <div className={isClickedAPP ? "block" : "hidden"}>
                  <AppDev />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-client-review">
        <div className=" bg-base-100 py-8">
          <div className="mx-auto px-10 max-w-7xl">
            <div
              className="mb-5 text-center"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
            >
              <h1 className="text-2xl font-bold mb-2 uppercase">
                Tech Stack We Used
              </h1>
              <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
            </div>
            <TechWeUse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
