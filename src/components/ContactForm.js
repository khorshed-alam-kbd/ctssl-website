import React, { useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const email = e.target.user_email.value;

    emailjs
      .sendForm(
        "service_xoadffi",
        "template_n3w8b8q",
        form.current,
        "VGdKs6ghRqj4neesS"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: "Message Send Successfully",
            icon: "success",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    // console.log(email);
  };
  return (
    <div className="lg:flex lg:gap-10 lg:justify-between ">
      <div
        className="mx-5 lg:mx-0 lg:w-2/3"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Form
          className="border rounded p-5 lg:p-10 bg-base-200 "
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <div className="lg:flex gap-2 w-full lg:justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="user_first_name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="user_last_name"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                name="user_email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Send Message</button>
            </div>
          </div>
        </Form>
      </div>
      <div className="m-5 mt-5 lg:m-0 lg:w-1/3">
        <div
          className="border p-5 mb-5 rounded bg-base-200"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="font-bold">Address</h1>
          <div className="flex items-center gap-2 my-1">
            <FaMapMarkerAlt />
            <p>House: 1/3, Block: B, Lalmatia, Dhaka, Bangladesh</p>
          </div>
        </div>
        <div
          className="border p-5 mb-5 rounded bg-base-200"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h1 className="font-bold">Phone Number</h1>
          <div className="flex items-center gap-2 my-1">
            <FaPhoneAlt />
            <div>
              <p>+8801987851923</p>
              <p>+8801620658621</p>
            </div>
          </div>
        </div>
        <div
          className="border p-5 mb-5 rounded bg-base-200"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="font-bold">Email</h1>
          <div className="flex items-center gap-2 my-1">
            <FaEnvelope />
            <p>comtechsbd@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
