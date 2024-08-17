import React from 'react';

import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp, FaYoutube, FaPhoneAlt } from 'react-icons/fa';

import img from '../../../Assets/photos/logo.png'

const Footer = () => {
    return (
        <>
            <div className='bg-blue-950'>
                <footer className="mx-auto max-w-6xl px-8 lg:px-0 py-10 text-white lg:flex justify-between">

                    <div className='py-2'>
                        <div className='lg:flex items-center gap-2 mb-3'>
                            <img className=' rounded' src={img} alt="" />
                            {/* <h1 className='text-xl lg:text-3xl font-bold text-uppercase py-2'>Comtech Software Solution Ltd</h1> */}
                        </div>
                        <div className='flex items-center gap-2 my-1 '  >
                            <FaMapMarkerAlt className='' />
                            <p className='text-gray-400'>House: 1/3, Block: B, Lalmatia<br /> Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-2 my-1'  >
                            <FaEnvelope className='' />
                            <p className='text-gray-400'>comtechsbd@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2 my-1 '  >
                            <FaPhoneAlt className='' />
                            <p className='text-md text-gray-400'>+8801620658621</p>
                        </div>

                        <div className='lg:flex gap-5 mt-4 hidden'>
                            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <FaTwitter />
                            <FaWhatsapp />
                            <FaYoutube />
                        </div>
                    </div>

                    <div className='grid py-2 text-sm'>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover"><p>Software Development</p></a>
                        <a className="link link-hover"><p>Web Development</p></a>
                        <a className="link link-hover"><p>App Development</p></a>

                    </div>
                    <div className='grid py-2 text-sm'>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover"><p>About us</p></a>
                        <a className="link link-hover"><p>Contact</p></a>
                        <a className="link link-hover"><p>Messages</p></a>
                    </div>
                    <div className='grid py-2 text-sm'>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover"><p>Terms of use</p></a>
                        <a className="link link-hover"><p>Privacy policy</p></a>
                        <a className="link link-hover"><p>Cookie policy</p></a>
                    </div>

                    <div className='flex gap-5 mt-4 lg:hidden'>
                        <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <FaTwitter />
                        <FaWhatsapp />
                        <FaYoutube />
                    </div>
                </footer>
            </div>
            <footer className="footer footer-center p-4 bg-slate-800 text-slate-300">
                <div className='text-center mx-auto max-w-6xl'>
                    <p>  © All rights reserved - Comtech Software Solution Ltd - 2024</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;