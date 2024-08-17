import React from "react";

const ServiceCard = ({ title, img, desc, icon }) => {
    return (
        <div
            className="card max-w-xl border"
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        >
            <span className="">{icon}</span>
            <div className="card-body items-center text-center text-black">
                <h2 className="md:text-lg mb-2 md:mb-4 text-gray-600">{title}</h2>
                <p className="text-center font-light hidden md:block">{desc}</p>
                <p className="text-center font-light text-sm block md:hidden">{desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
