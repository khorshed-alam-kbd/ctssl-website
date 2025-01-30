import React from "react";

import soft1 from "../Assets/photos/services/soft1.jpg";
import soft2 from "../Assets/photos/services/soft2.jpg";
import soft3 from "../Assets/photos/services/soft3.jpg";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We build tailored software solutions designed to meet your unique business needs. Unlike off-the-shelf software, our custom applications streamline operations, improve efficiency, and provide a competitive edge. From planning and design to development, deployment, and maintenance, we ensure a scalable and future-ready solution that aligns perfectly with your goals.",
    image: soft1,
    bgColor: "bg-sky-100",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Our enterprise software solutions empower large organizations with powerful, integrated systems that enhance productivity and decision-making. Whether it's CRM, ERP, or SCM software, we develop scalable, secure, and high-performance applications that seamlessly integrate with existing workflows, ensuring efficiency and compliance with industry standards.",
    image: soft2,
    bgColor: "bg-slate-200",
  },
  {
    title: "SaaS Product Development",
    description:
      "We specialize in developing cloud-based SaaS solutions that offer seamless access, scalability, and cost-efficiency. Designed for multi-tenant architecture, our SaaS platforms support subscription-based billing, robust security, and continuous feature enhancements, enabling businesses to grow without infrastructure concerns while delivering exceptional user experiences.",
    image: soft3,
    bgColor: "bg-sky-100",
  },
];

const SoftDev = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-bold px-12 pb-4 text-center">
        Software Design & Development Services
      </h1>

      {services.map((service, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center gap-10 ${service.bgColor}`}
        >
          <div className={`${index % 2 !== 0 ? "lg:order-last" : ""}`}>
            <h1 className="text-blue-800 font-bold text-xl lg:text-2xl mb-4 text-center lg:text-left uppercase">
              {service.title}
            </h1>
            <p className="lg:text-xl text-justify">{service.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={service.image}
              alt="service"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftDev;
