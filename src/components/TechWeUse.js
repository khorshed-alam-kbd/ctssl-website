import React, { useState } from "react";

import html from "../Assets/photos/FontEnd-Icon/html-tech-icon.svg";
import css from "../Assets/photos/FontEnd-Icon/css-tech-icon.svg";
import bootstrap from "../Assets/photos/FontEnd-Icon/bootstrap-tech-icon.webp";
import tailwind from "../Assets/photos/FontEnd-Icon/tailwind-css-tech-icon.webp";
import mui from "../Assets/photos/FontEnd-Icon/material-ui-tech-icon.webp";
import react from "../Assets/photos/FontEnd-Icon/react-js-tech-icon.svg";
import next from "../Assets/photos/FontEnd-Icon/next-js-tech-icon.webp";
import typescript from "../Assets/photos/FontEnd-Icon/typescript.svg";

import JavaScript from "../Assets/photos/BackEnd-Icon/java-script-tech-icon.webp";
import NodeJs from "../Assets/photos/BackEnd-Icon/nodejs-tech-icon.webp";
import MongoDB from "../Assets/photos/BackEnd-Icon/mongo-db-tech-icon.webp";
import PHP from "../Assets/photos/BackEnd-Icon/php-tech-icon.webp";
import Laravel from "../Assets/photos/BackEnd-Icon/larvel-tech-icon.webp";
import MySQL from "../Assets/photos/BackEnd-Icon/mysql-tech-icon.webp";

import ReactNative from "../Assets/photos/MobileApp-Icon/react_logo-tech-icon.webp";
import Flutter from "../Assets/photos/MobileApp-Icon/flutter-tech-icon.webp";

const TechWeUse = () => {
  const [activeTab, setActiveTab] = useState("FE");

  const handleTabClick = (type) => {
    setActiveTab(type);
  };

  const frontEndTechs = [
    { src: react, name: "React.js" },
    { src: next, name: "Next.js" },
    { src: JavaScript, name: "JavaScript" },
    { src: typescript, name: "TypeScript" },
    { src: html, name: "HTML 5" },
    { src: css, name: "CSS" },
    { src: bootstrap, name: "Bootstrap" },
    { src: tailwind, name: "Tailwind" },
    { src: mui, name: "Material UI" },
  ];

  const backEndTechs = [
    { src: JavaScript, name: "JavaScript" },
    { src: NodeJs, name: "Node.js" },
    { src: PHP, name: "PHP" },
    { src: Laravel, name: "Laravel" },
  ];

  const mobileAppTechs = [
    { src: ReactNative, name: "React Native" },
    { src: Flutter, name: "Flutter" },
  ];
  const databaseTechs = [
    { src: MySQL, name: "MySQL" },
    { src: MongoDB, name: "MongoDB" },
  ];

  const renderTechs = (techs) => {
    return techs.map((tech, index) => (
      <div
        key={index}
        className="p-3 grid justify-items-center bg-base-200 rounded-xl"
      >
        <img src={tech.src} className="my-2 h-10" alt={tech.name} />
        <h1 className="text-xl font-bold">{tech.name}</h1>
      </div>
    ));
  };

  return (
    <div className="mx-auto max-w-6xl px-10">
      <div className="bg-base-100 ">
        <div className="flex justify-center gap-5 mb-10">
          <div
            className={`cursor-pointer py-2 w-[150px] border rounded ${
              activeTab === "FE" ? "bg-base-100" : "bg-base-300 text-gray-400"
            }`}
            onClick={() => handleTabClick("FE")}
          >
            <h1 className="text-xl text-center font-bold">Front End</h1>
          </div>
          <div
            className={`cursor-pointer py-2 w-[150px] border rounded ${
              activeTab === "BE" ? "bg-base-100" : "bg-base-300 text-gray-400"
            }`}
            onClick={() => handleTabClick("BE")}
          >
            <h1 className="text-xl text-center font-bold">Back End</h1>
          </div>
          <div
            className={`cursor-pointer py-2 w-[150px] border rounded ${
              activeTab === "MA" ? "bg-base-100" : "bg-base-300 text-gray-400"
            }`}
            onClick={() => handleTabClick("MA")}
          >
            <h1 className="text-xl text-center font-bold">App</h1>
          </div>
          <div
            className={`cursor-pointer py-2 w-[150px] border rounded ${
              activeTab === "DB" ? "bg-base-100" : "bg-base-300 text-gray-400"
            }`}
            onClick={() => handleTabClick("DB")}
          >
            <h1 className="text-xl text-center font-bold">Database</h1>
          </div>
        </div>

        <div className="mx-auto">
          {activeTab === "FE" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {renderTechs(frontEndTechs)}
            </div>
          )}

          {activeTab === "BE" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {renderTechs(backEndTechs)}
            </div>
          )}

          {activeTab === "MA" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {renderTechs(mobileAppTechs)}
            </div>
          )}
          {activeTab === "DB" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {renderTechs(databaseTechs)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechWeUse;
