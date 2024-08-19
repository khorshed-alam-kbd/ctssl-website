import React from "react";

const services = [
  {
    description:
      "We help design the latest portal technology for your business. We also use the right portal services to effectively steer your brand in the right direction that will help you actualize your business goals. From initial planning to the implementation of products, Comtech Software Solution offers one-stop solution for all your portal needs. We have an enviable reputation of delivering professional portal projects to organizations of different sizes.",
    image:
      "https://cdn.prod.website-files.com/643067b6b03b847eb9c418d0/64ef6b50ea7876649a7db2e2_648ca4297e54e6dcfd8ce92b_iStock-1311598658.jpeg",
    bgColor: "bg-sky-100",
  },
  {
    description:
      "Comtech Software Solution creates ecommerce designs that boost growth, propel sales and drives profitable ROI. Our team of innovative and creative programmers and designers will help you launch a storefront that is easily maintained, flexible, scalable, and responsive.",
    image:
      "https://www.ge.com/research/sites/default/files/styles/hero_banner/public/images/capabilities/2018-11/industry-3087393__480.jpg?itok=PThSdE_F",
    bgColor: "bg-slate-200",
  },
  {
    description:
      "We help design the latest portal technology for your business. We also use the right portal services to effectively steer your brand in the right direction that will help you actualize your business goals. From initial planning to the implementation of products, Comtech Software Solution offers one-stop solution for all your portal needs. We have an enviable reputation of delivering professional portal projects to organizations of different sizes.",
    image:
      "https://www.isquarebs.com/blog/wp-content/uploads/2022/12/Custom-software-development.jpg",
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
            <p className="lg:text-xl text-justify">{service.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={service.image} alt="service" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoftDev;
