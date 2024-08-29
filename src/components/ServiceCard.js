import React from "react";
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
      <FaFileCode className="w-12 md:w-16 h-12 md:h-16 text-blue-900 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Web & Mobile Application Development",
    desc: "Extensible web and mobile application development for specific business needs with powerful functionality to retain more clients or optimize internal processes.",
    icon: (
      <AiOutlineDesktop className="w-12 md:w-16 h-12 md:h-16 text-blue-900 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Business Intelligence & Data Mining",
    desc: "Result-driven business intelligence by implementing ETL powered with data quality management and rich visualization.",
    icon: (
      <BsBarChart className="w-12 md:w-16 h-12 md:h-16 text-blue-900 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Azure Application Development",
    desc: "Azure application development and migration Services that ensures clean cloud experience.",
    icon: (
      <MdOutlineDeveloperMode className="w-12 md:w-16 h-12 md:h-16 text-blue-900 relative left-[45%] top-4" />
    ),
  },
  {
    title: "System Analysis & UX/UI Design",
    desc: "User-centric design with distinctive brand identity and favorable impression driven by usability, scalability, and reliability.",
    icon: (
      <SiAltiumdesigner className="w-12 md:w-16 h-12 md:h-16 text-blue-900 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
  {
    title: "Software Testing & Quality Assurance",
    desc: "Testing and QA Services backed by a robust heritage of testing proficiency and recommended for extensive variety of testing services array and excellence of resources.",
    icon: (
      <SiMicrosoftsharepoint className="w-12 md:w-16 h-12 md:h-16 text-blue-900 relative left-[45%] lg:left-[44%] top-4" />
    ),
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 ">
      {serviceData.map((service, index) => (
        <div
          key={index}
          className="card max-w-xl border bg-white"
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <span>{service.icon}</span>
          <div className="card-body items-center text-center text-black">
            <h2 className="md:text-lg mb-2 md:mb-4 text-gray-600">
              {service.title}
            </h2>
            <p className="text-center font-light hidden md:block">
              {service.desc}
            </p>
            <p className="text-center font-light text-sm block md:hidden">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
