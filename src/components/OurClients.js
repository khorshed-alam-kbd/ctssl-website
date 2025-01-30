import React from "react";

// Importing client images
import bata from "../Assets/photos/clientimg/bata.png";
import daraz from "../Assets/photos/clientimg/daraz.jpg";
import akij from "../Assets/photos/clientimg/akiz.jpg";
import abul from "../Assets/photos/clientimg/abulkhayer.jpg";
import beximco from "../Assets/photos/clientimg/beximco.png";
import monarch from "../Assets/photos/clientimg/monarch.png";
import monarchmart from "../Assets/photos/clientimg/monarchmart.png";
import rfl from "../Assets/photos/clientimg/rfl.png";
import apex from "../Assets/photos/clientimg/apex.jpg";
import rupchanda from "../Assets/photos/clientimg/rupchada.png";
import minister from "../Assets/photos/clientimg/minister.jpg";
import walton from "../Assets/photos/clientimg/walton.jpg";

import Provati from "../Assets/photos/insurance/Provati.png";
import amana from "../Assets/photos/client-img/amana-logo.png";
import alfamed from "../Assets/photos/client-img/alfamed.png";
import salman from "../Assets/photos/client-img/salman.png";
import software from "../Assets/photos/client-img/software.png";
import johura from "../Assets/photos/client-img/johura-bd.png";
import pixel from "../Assets/photos/client-img/pixel.png";

const OurClients = () => {
  // ClientsLogo array with correct names and image links
  const ClientsLogo = [
    { name: "Bata", link: bata },
    { name: "Daraz", link: daraz },
    { name: "Akij", link: akij },
    { name: "Abul Khayer", link: abul },
    { name: "Beximco", link: beximco },
    { name: "Monarch", link: monarch },
    { name: "Monarch Mart", link: monarchmart },
    { name: "RFL", link: rfl },
    { name: "Apex", link: apex },
    { name: "Rupchanda", link: rupchanda },
    { name: "Minister", link: minister },
    { name: "Walton", link: walton },
  ];

  const allClients = [
    {
      img: salman,
      title: "Salman Hajj Group",
    },
    {
      img: amana,
      title: "Amana Group",
    },
    {
      img: pixel,
      title: "Pixel GraphicsBD",
    },
    {
      img: johura,
      title: "Johura Endomed Solution",
    },
    {
      img: alfamed,
      title: "Alfamed Solution",
    },

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
    {
      img: "https://gomatihospital.com/wp-content/uploads/2022/08/LogoTransparent.png",
      title: "Gomti Hospital (Pvt.) Ltd.",
    },
    {
      img: "https://seeklogo.com/images/B/bangladesh-medical-college-hospital-zone-logo-E75429DD14-seeklogo.com.png",
      title: "Bangladesh Medical College & Hospital",
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
        {allClients.map((client, index) => (
          <div
            key={index}
            className="text-center"
          >
            <img
              className="w-20 h-20 mx-auto"
              src={client.img}
              alt={client.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
