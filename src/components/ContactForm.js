import React, { useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Form } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const email = e.target.user_email.value

        emailjs.sendForm('service_veapuj9', 'template_huipktm', form.current, 'AcDeeF86HMb6W21iU')
            .then((result) => {
                console.log(result.text);
                swal({
                    title: "Message Successfully Send",
                    icon: "success",
                })
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

        // Email.send({
        //     Host: "smtp.elasticemail.com",
        //     Username: "ks.detective.bd@gmail.com",
        //     Password: "25B89F7E1793ACAF12B6CAA201BCEE46E5CA",
        //     To: 'engr.khorshedalam.bd@gmail.com',
        //     From: email,
        //     Subject: "This is the subject",
        //     Body: "And this is the body"
        // }).then(
        //     message => alert(message)
        // );
        // if (window.Email) {
        //     window.Email.send({
        //         Host: "smtp.elasticemail.com",
        //         Username: "ks.detective.bd@gmail.com",
        //         Password: "25B89F7E1793ACAF12B6CAA201BCEE46E5CA",
        //         To: 'ks.detective.bd@gmail.com',
        //         From: email,
        //         Subject: "This is the subject",
        //         Body: "And this is the body"
        //     }).then(
        //         message => alert(message)
        //     );


        // }
        console.log(email)
    };
    return (
        <div className='lg:flex lg:gap-10 lg:justify-between ' >
            <div className='mx-5 lg:mx-0 lg:w-2/3' data-aos="fade-right" data-aos-duration="1000">
                <Form className='border rounded p-5 lg:p-10 bg-base-200 ' ref={form} onSubmit={sendEmail}>
                    <div>
                        <div className='lg:flex gap-2 w-full lg:justify-between' >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" name="user_first_name" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" name="user_last_name" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" placeholder="Email Address" name="user_email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" name="user_subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name="message" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Send Message</button>
                        </div>
                    </div>
                </Form>

            </div>
            <div className='m-5 mt-5 lg:m-0 lg:w-1/3'>
                <div className='border p-5 mb-5 rounded bg-base-200' data-aos="fade-left" data-aos-duration="1000">
                    <h1 className='font-bold'>Address</h1>
                    <div className='flex items-center gap-2 my-1'  >
                        <FaMapMarkerAlt />
                        <p>House: 1/3, Block: B, Lalmatia, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='border p-5 mb-5 rounded bg-base-200' data-aos="fade-left" data-aos-duration="1500">
                    <h1 className='font-bold'>Phone Number</h1>
                    <div className='flex items-center gap-2 my-1'  >
                        <FaPhoneAlt />
                        <p className='text-md'>+88 01620-658621</p>
                    </div>

                </div>
                <div className='border p-5 mb-5 rounded bg-base-200' data-aos="fade-left" data-aos-duration="2000">
                    <h1 className='font-bold'>Email</h1>
                    <div className='flex items-center gap-2 my-1'  >
                        <FaEnvelope />
                        <p>comtechsbd@gmail.com</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContactForm;