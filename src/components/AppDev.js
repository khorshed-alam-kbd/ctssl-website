import React from "react";

const services = [
  {
    title: "Mobile App Design",
    description:
      "Right from the idea development stage to the final product, we focus on creating user-focused mobile apps that will meet the needs of your customers. Our mobile app design approach is aimed at addressing the specific needs of your users. The apps that we design are a blend of function and aesthetic so that your customers can keep coming back for more.",
    image:
      "https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815613b10.jpg?compress=1&resize=400x300&vertical=top",
    bgColor: "bg-slate-200",
  },
  {
    title: "Portal Design",
    description:
      "We help design the latest portal technology for your business. We also use the right portal services to effectively steer your brand in the right direction that will help you actualize your business goals. From initial planning to the implementation of products, Comtech Software Solution offers one-stop solution for all your portal needs. We have an enviable reputation of delivering professional portal projects to organizations of different sizes.",
    image:
      "https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?s=612x612&w=0&k=20&c=loFqul06ggwtkwqSmzZnYfA72Vk7nFQOvDSzAN6YbtQ=",
    bgColor: "bg-sky-100",
  },
  {
    title: "E-commerce Design",
    description:
      "Comtech Software Solution creates ecommerce designs that boost growth, propel sales and drives profitable ROI. Our team of innovative and creative programmers and designers will help you launch a storefront that is easily maintained, flexible, scalable, and responsive.",
    image:
      "https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg",
    bgColor: "bg-slate-200",
  },
];

const AppDev = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-bold px-12 pb-4 text-center">
        Apps Design & Development Services
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
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppDev;
