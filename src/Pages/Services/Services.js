import React, { useEffect, useState } from "react";

import AppDev from "../../components/AppDev";
import WebDev from "../../components/WebDev";
import SoftDev from "../../components/SoftDev";
import TechWeUse from "../../components/TechWeUse";

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const [isClickedSoft, setIsClickedSoft] = useState(true);
  const [isClickedWEB, setIsClickedWEB] = useState(false);
  const [isClickedAPP, setIsClickedAPP] = useState(false);

  const handleClick = (type) => {
    if (type === "SWD") {
      setIsClickedWEB(false);
      setIsClickedAPP(false);
      setIsClickedSoft(true);
    } else if (type === "WEB") {
      setIsClickedWEB(true);
      setIsClickedAPP(false);
      setIsClickedSoft(false);
    } else if (type === "APP") {
      setIsClickedWEB(false);
      setIsClickedAPP(true);
      setIsClickedSoft(false);
    }
  };
  return (
    <div id="services">
      <div className="py-8">
        <div className="mx-auto max-w-6xl ">
          <div className="">
            <div className="">
              <div className="flex flex-col md:flex-row items-center justify-around lg:gap-5 mb-5 ">
                <div
                  className={
                    isClickedSoft
                      ? "p-3 border-b-2 border-orange-500"
                      : "text-gray-400 p-3"
                  }
                  onClick={() => handleClick("SWD")}
                >
                  <h1 className="text-xl font-bold">Software Development</h1>
                </div>
                <div
                  className={
                    isClickedWEB
                      ? "p-3 border-b-2 border-orange-500"
                      : "text-gray-400 p-3"
                  }
                  onClick={() => handleClick("WEB")}
                >
                  <h1 className="text-xl font-bold">WEB Development</h1>
                </div>
                <div
                  className={
                    isClickedAPP
                      ? "p-3 border-b-2 border-orange-500"
                      : "text-gray-400 p-3"
                  }
                  onClick={() => handleClick("APP")}
                >
                  <h1 className="text-xl font-bold">APP Development</h1>
                </div>
              </div>

              <div className=" ">
                <div className={isClickedSoft ? "block" : "hidden"}>
                  <SoftDev />
                </div>
                <div className={isClickedWEB ? "block" : "hidden"}>
                  <WebDev />
                </div>

                <div className={isClickedAPP ? "block" : "hidden"}>
                  <AppDev />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-client-review">
        <div className=" bg-base-100 py-8">
          <div className="mx-auto px-10 max-w-7xl">
            <div
              className="mb-5 text-center"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
            >
              <h1 className="text-2xl font-bold mb-2 uppercase">
                Tech Stack We Used
              </h1>
              <hr className="w-24 h-1 mx-auto text-xl bg-orange-400 rounded" />
            </div>
            <TechWeUse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
