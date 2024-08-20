import React from "react";
import Clients from "../../components/Clients";

const ClientsPage = () => {
  return (
    <div id="about-us">
      <div className="bg-base-100 py-8">
        <div className="mx-auto max-w-7xl">
          {/* <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-bold mb-2 uppercase">Our Clients</h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
          </div> */}

          <Clients />
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
