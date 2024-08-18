import React from "react";

import bannerImg from "../../Assets/photos/services-banner.jpg";
import ServiceCard from "../../components/ServiceCard";
import { FaFileCode } from "react-icons/fa";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiAltiumdesigner, SiMicrosoftsharepoint } from "react-icons/si";

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
  return (
    <div id="services">
      {/* <div className="hero py-8 mb-10" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">SERVICES</h1>
                    </div>
                </div>
            </div > */}
      <div className="">
        <div className="py-8 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-10">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                desc={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
