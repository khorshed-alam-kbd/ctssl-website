import React, { useState } from "react";
import Provati from "../Assets/photos/insurance/Provati.png";

const Clients = () => {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/b7/Dhaka_Dental_College_logo.png",
      title: "Dhaka Dental College",
    },
    {
      img: "https://seeklogo.com/images/B/bangladesh-medical-college-hospital-zone-logo-E75429DD14-seeklogo.com.png",
      title: "Bangladesh Medical College & Hospital",
    },
    {
      img: "https://play-lh.googleusercontent.com/uDTnyyJ8KeilvsHLVHOzLgOI0dM0fTzRTb_-7OyTV07leyK_L3aOuGp5-pHsZd96Lypu",
      title: "Comilla Residential College",
    },
    {
      img: "https://cdn.dribbble.com/users/393931/screenshots/6436241/softwhere-dribbble_4x.png?compress=1&resize=400x300&vertical=top",
      title: "Development Project Lalmatia",
    },
  ];

  const insuranceData = [
    {
      img: "https://static1.eyellowpages.ph/uploads/yp_business/photo/179950/normal_1539843750-pioneer.png",
      title: "Pioneer Insurance Company Limited",
    },
    {
      img: Provati,
      title: "Provati Insurance Company Limited",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEfEiDzj4MYOOZ1wxx6W7n5iAhdKsSAgjMQ&s",
      title: "Prime Insurance Company Limited",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODmvRS-wdC_dhpwt6XRA91Gnboj4HXUb7Eg&s",
      title: "City Insurance Company Limited",
    },
    {
      img: "https://hotjobs.bdjobs.com/jobs/ricl/ruplai-header.jpg",
      title: "Rupali Insurance Company Limited",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwecYcwIIngiqYOcWu4414YwwNvqbawahQdw&s",
      title: "Asia Insurance Company Limited",
    },
  ];

  const hospitalData = [
    {
      img: "https://gomatihospital.com/wp-content/uploads/2022/08/LogoTransparent.png",
      title: "Gomti Hospital (Pvt.) Ltd.",
    },
    {
      img: "https://seeklogo.com/images/B/bangladesh-medical-college-hospital-zone-logo-E75429DD14-seeklogo.com.png",
      title: "Bangladesh Medical College & Hospital",
    },
    {
      img: "https://cdn.dribbble.com/users/393931/screenshots/6436241/softwhere-dribbble_4x.png?compress=1&resize=400x300&vertical=top",
      title: "Development Project Dhanmondi",
    },
    {
      img: "https://cdn.dribbble.com/users/393931/screenshots/6436241/softwhere-dribbble_4x.png?compress=1&resize=400x300&vertical=top",
      title: "Development Project Lalmatia",
    },
  ];

  const TabContent = ({ data }) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="lg:flex items-center justify-start rounded gap-10 bg-white border p-5"
          >
            <img className="h-20" src={item.img} alt={item.title} />
            <p className="font-bold">{item.title}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (activeTab === "education") {
      return <TabContent data={educationData} />;
    } else if (activeTab === "insurance") {
      return <TabContent data={insuranceData} />;
    } else if (activeTab === "hospital") {
      return <TabContent data={hospitalData} />;
    }
  };

  return (
    <div className="max-w-7xl px-5">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
        <div
          className={`cursor-pointer py-2 w-[200px] border rounded ${
            activeTab === "education"
              ? "bg-base-100 border border-orange-400"
              : "bg-base-300 text-gray-400"
          }`}
          onClick={() => setActiveTab("education")}
        >
          <h1 className="text-xl text-center font-bold uppercase">education</h1>
        </div>
        <div
          className={`cursor-pointer py-2 w-[200px] border rounded ${
            activeTab === "insurance"
              ? "bg-base-100 border border-orange-400"
              : "bg-base-300 text-gray-400"
          }`}
          onClick={() => setActiveTab("insurance")}
        >
          <h1 className="text-xl text-center font-bold uppercase">insurance</h1>
        </div>
        <div
          className={`cursor-pointer py-2 w-[200px] border rounded ${
            activeTab === "hospital"
              ? "bg-base-100 border border-orange-400"
              : "bg-base-300 text-gray-400"
          }`}
          onClick={() => setActiveTab("hospital")}
        >
          <h1 className="text-xl text-center font-bold uppercase">hospital</h1>
        </div>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Clients;
