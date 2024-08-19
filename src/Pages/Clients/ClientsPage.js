import React from "react";
import Clients from "../../components/Clients";

const ClientsPage = () => {
  return (
    <div id="about-us">
      <div className="bg-base-100 py-8">
        <div className="mx-auto max-w-7xl px-10">
          <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-bold mb-2 uppercase">Our Clients</h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
            {/* <p className="py-2 mx-auto max-w-5xl text-gray-600 text-justify lg:text-center">
              We empower our people with the right mindsets and skills to
              navigate what’s next, become the transformative leaders the world
              needs, pursue careers as unique as they are, and build their own
              exceptional comtech software solution ltd experiences.
            </p> */}
          </div>

          <Clients />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
