import React from "react";
import { Form } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import bannerImg from "../../Assets/photos/contact-img.jpg";
import ContactForm from "../../components/ContactForm";

const ContactUs = () => {
  return (
    <div id="contact">
      {/* <div className="hero py-8" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Contact With Us</h1>
                        <p className="mb-5 text-xl">A Jharna Trade International / <span className='text-orange-400'>contact</span></p>
                    </div>
                </div>
            </div> */}
      {/* contact information  */}
      <div id="contact" className="">
        <div className="mx-auto px-10 bg-base-100 my-10 max-w-6xl">
          <div
            className="text-center my-8 "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl font-bold mb-2">LET'S TALK</h1>
            <hr className="w-24 h-1 mx-auto text-xl bg-blue-700 rounded" />
            <p className="pt-2 max-w-4xl mx-auto text-gray-600 text-justify lg:text-center">
              Let's Get in Touch ! Have a Query ? Send Us a Message
            </p>
          </div>
          <ContactForm></ContactForm>
        </div>
      </div>

      {/* Google map location */}
      <div className="mx-auto w-full">
        <iframe
          className="mx-auto w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.909797720126!2d90.41131330915418!3d23.731152444398056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9962f3cdbef%3A0xe81c436da5772a41!2sA%20Jharna%20Trade%20International!5e0!3m2!1sen!2sbd!4v1690404494225!5m2!1sen!2sbd"
          height="350"
          alt="google map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
