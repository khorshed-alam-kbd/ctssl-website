import React from "react";
import {
  FaGlobe,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaBullseye,
  FaEye,
  FaLightbulb,
} from "react-icons/fa";
import TeamMember from "../../components/TeamMember";

const contentData = [
  {
    title: "Our Mission",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    desc: "Exceed client's expectations by going beyond software to provide best Web solutions that transform data into knowledge, enabling them to solve their problems.",
    icon: (
      <FaBullseye className="w-12 h-12 rounded-full p-2 text-white bg-blue-500 relative left-[44%] bottom-6" />
    ),
  },
  {
    title: "Our Vision",
    img: "https://www.saveetha.ac.in/images/sec/2020/content/vision01.jpg",
    desc: "A software product vision statement is the overall objective you are aiming for, your reasons for creating your software product. It provides a known direction.",
    icon: (
      <FaEye className="w-12 h-12 rounded-full p-2 text-white bg-blue-500 relative left-[44%] bottom-6" />
    ),
  },
  {
    title: "Our Objective",
    img: "https://img.freepik.com/premium-photo/developing-programmer-development-website-design-coding-technologies-working-software-company-office_18497-1234.jpg?w=2000",
    desc: "The primary objective of software engineering is to create dependable and effective software. The objective of software engineering is to produce high-quality software.",
    icon: (
      <FaLightbulb className="w-12 h-12 rounded-full p-2 text-white bg-blue-500 relative left-[44%] bottom-6" />
    ),
  },
];

const AboutUs = () => {
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
            <h1 className="text-2xl font-bold mb-2 uppercase">
              The Foundation of Our Company
            </h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-blue-700 rounded" />
            <p className="py-2 mx-auto max-w-5xl text-gray-600 text-justify lg:text-center">
              We empower our people with the right mindsets and skills to
              navigate what’s next, become the transformative leaders the world
              needs, pursue careers as unique as they are, and build their own
              exceptional comtech software solution ltd experiences.
            </p>
          </div>

          <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:p-0">
            {contentData.map((content, index) => (
              <div
                key={index}
                className="max-w-xl bg-base-100 shadow-xl rounded-xl"
              >
                <figure className="">
                  <img
                    src={content.img}
                    alt={content.title}
                    className="rounded-t-xl"
                  />
                  <span className="">{content.icon}</span>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title mt-[-30px]">{content.title}</h2>
                  <p className="text-justify my-2">{content.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-base-200 py-8">
        <div className="mx-auto px-10 max-w-7xl">
          <div
            className="mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-bold mb-2 uppercase">
              Our Team Members
            </h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-blue-700 rounded" />
            <p className="py-2 mx-auto max-w-5xl text-gray-600 text-justify lg:text-center">
              The ability to invite, leverage, and learn from different
              perspectives is key to delivering for our clients. We believe
              diversity and inclusiveness means growth.
            </p>
          </div>
          <TeamMember />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
