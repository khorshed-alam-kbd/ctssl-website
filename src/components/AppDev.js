import React from "react";

const services = [
  {
    title: "MOBILE APP DESIGN & DEVELOPMENT",
    description:
      "We specialize in designing and developing high-performance mobile applications for iOS and Android. From concept to deployment, our team ensures seamless UI/UX, robust functionality, and optimized performance to deliver a top-tier mobile experience.",
    image:
      "https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815613b10.jpg?compress=1&resize=400x300&vertical=top",
    bgColor: "bg-slate-200",
  },
  {
    title: "CROSS-PLATFORM APP DEVELOPMENT",
    description:
      "Maximize your reach with cross-platform app development. Using technologies like React Native and Flutter, we create apps that work flawlessly on multiple platforms while ensuring cost-effectiveness and high performance.",
    image:
      "https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?s=612x612&w=0&k=20&c=loFqul06ggwtkwqSmzZnYfA72Vk7nFQOvDSzAN6YbtQ=",
    bgColor: "bg-sky-100",
  },
  {
    title: "UI/UX DESIGN FOR MOBILE APPS",
    description:
      "A great app starts with an intuitive and engaging design. Our UI/UX design experts create visually appealing and user-friendly mobile app interfaces to enhance user engagement and experience.",
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
            <h1 className="text-blue-800 font-bold text-xl lg:text-2xl mb-4 text-center lg:text-left">
              {service.title}
            </h1>
            <p className="lg:text-xl text-justify">{service.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={service.image}
              alt={service.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppDev;
