import React from "react";
import userImg from "../Assets/photos/user-photo.jpg";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const clientReviews = [
  {
    name: "Fahad Bin Bashar",
    role: "Managing Director",
    review:
      "We aim to serve businesses with customer-centric, result-oriented, cost-effective, and innovative solutions that open up endless customer-engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.",
    rating: 5,
    image: userImg,
  },
  {
    name: "Md. Khorshed Alam",
    role: "Developer",
    review:
      "We strive to provide top-notch services that cater to the unique needs of each client. Our commitment to excellence ensures that our clients receive the best possible outcomes.",
    rating: 5,
    image: userImg,
  },
  {
    name: "Saifur Alamin",
    role: "React Developer",
    review:
      "Our team is dedicated to delivering high-quality work that exceeds client expectations. We take pride in our ability to adapt and innovate to meet the ever-changing needs of our clients.",
    rating: 5,
    image: userImg,
  },
  {
    name: "Md Borhan Uddin",
    role: "MERN Stack Developer",
    review:
      "We prioritize customer satisfaction by providing reliable, efficient, and effective solutions. Our goal is to build long-term relationships with our clients based on trust and mutual respect.",
    rating: 5,
    image: userImg,
  },
];

const ClientsReview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="">
        <div className="mx-auto px-10">
          <div className="text-center">
            {/* <h1 className='mx-auto text-4xl font-bold my-3'>Our Clients Simply Love Our Work</h1> */}
            <p className="text-gray-400">
              Our services are appreciated by our clients from all across the
              globe for high quality and impressive results.
            </p>
          </div>

          <div className="my-5">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              showDots={true}
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              className="pb-8"
            >
              {clientReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-base-100 p-5 border mx-2 md:h-full"
                >
                  <div className="md:flex my-5 text-justify">
                    <span>
                      <FaQuoteLeft className="text-xl mr-3" />
                    </span>
                    <p className="text-gray-400">{review.review}</p>
                  </div>
                  <div className="md:flex items-center justify-end gap-4">
                    {/* <img
                      src={review.image}
                      alt={review.name}
                      className="rounded-full w-16 h-16"
                    /> */}
                    <div>
                      <p className="text-lg font-bold">{review.name}</p>
                      <p className="text-gray-400">{review.role}</p>
                      <span className="my-2 flex gap-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsReview;
