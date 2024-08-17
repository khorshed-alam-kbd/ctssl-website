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

    return (
        <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
                {ClientsLogo.map((client, index) => (
                    <div key={index} className="text-center">
                        <img className="w-20 h-20 mx-auto" src={client.link} alt={client.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurClients;
