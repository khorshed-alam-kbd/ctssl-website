import React from "react";

const services = [
  {
    title: "WEB APP DESIGN",
    description:
      "We help design the latest portal technology for your business. We also use the right portal services to effectively steer your brand in the right direction that will help you actualize your business goals. From initial planning to the implementation of products, Comtech Software Solution offers one-stop solution for all your portal needs. We have an enviable reputation of delivering professional portal projects to organizations of different sizes.",
    image:
      "https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000",
    bgColor: "bg-sky-100",
  },
  {
    title: "E-COMMERCE FRONT DESIGN & DEVELOPMENT",
    description:
      "Comtech Software Solution creates ecommerce designs that boost growth, propel sales and drives profitable ROI. Our team of innovative and creative programmers and designers will help you launch a storefront that is easily maintained, flexible, scalable, and responsive.",
    image:
      "https://cdn.dribbble.com/users/1254731/screenshots/16899784/media/9d83b579cc6279663ac0324bfc15d94f.jpg?compress=1&resize=400x300",
    bgColor: "bg-slate-200",
  },
  {
    title: "SCHOOL MANAGEMENT DESIGN & DEVELOPMENT",
    description:
      "we specialize in delivering advanced school management solutions that empower educational institutions to operate more efficiently. Our platform offers a comprehensive suite of tools, including attendance tracking, report card generation, online fee payments, and communication portals, all designed to simplify school administration. With our user-friendly and secure software, schools can focus on what matters most—educating students. Partner with us to transform your school management with cutting-edge technology.",
    image:
      "https://media.licdn.com/dms/image/D4D12AQGMSihfr5huBA/article-cover_image-shrink_600_2000/0/1701765450293?e=2147483647&v=beta&t=qdl-19jQLxdP0crlAibXI675XTAck_uhvswf9fO5cAg",
    bgColor: "bg-sky-100",
  },
];

const WebDev = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-bold px-12 pb-4 text-center">
        Web Design & Development Services
      </h1>

      {services.map((service, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 p-12 justify-center items-center gap-10 ${service.bgColor}`}
        >
          <div className={`${index % 2 !== 0 ? "lg:order-last" : ""}`}>
            <h1 className="text-orange-500 font-bold text-xl lg:text-2xl mb-4 text-center lg:text-left">
              {service.title}
            </h1>
            <p className="lg:text-xl text-justify">{service.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebDev;
