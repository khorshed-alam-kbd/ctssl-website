import React, { useState } from 'react';

import logo from '../../../Assets/photos/ajti-brand-logo.jpeg'
import bannerImg from '../../../Assets/photos/travel-plane-world.jpg'
import { FaEnvelope, FaFacebook, FaHome, FaList, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    const { pathname } = useLocation();

    return (
        <>
            <header className='py-3 bg-slate-800 text-white hidden lg:block' >
                <div className='mx-auto max-w-6xl px-8 lg:px-0  flex justify-between items-center'>
                    <div className='flex items-center gap-2 my-1'  >
                        <FaEnvelope />
                        <p>comtechsbd@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-3 my-1'>
                        <div className='flex items-center gap-2'  >
                            <FaPhoneAlt />
                            <p className='text-md'>+8801620658621</p>
                        </div>
                    </div>
                </div >
            </header >
            < nav className='bg-blue-950 ' >
                <div className="navbar  mx-auto  max-w-6xl  ">

                    <div className=" navbar-center hidden lg:flex mx-auto">
                        <ul className="flex items-center text-white font-semibold gap-3">
                            < li > <Link to='/' className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${pathname === '/' ? "border-b-2 border-orange-500" : ""}`}>HOME</Link></li>
                            < li > <Link to='/services' className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${pathname === '/services' ? "border-b-2 border-orange-500" : ""}`}>SERVICES</Link></li>
                            < li > <Link to='/about-us' className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${pathname === '/about-us' ? "border-b-2 border-orange-500" : ""}`}>ABOUT US</Link></li>
                            {/* < li > <Link to='/training' className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${pathname === '/training' ? "border-b-2 border-orange-500" : ""}`}>TRANING</Link></li> */}
                            < li > <Link to='/contact-us' className={`hover:border-b-2  hover:border-orange-500 pb-2 px-4 mx-2 ${pathname === '/contact-us' ? "border-b-2 border-orange-500" : ""}`}>CONTACT US</Link></li>
                        </ul>
                    </div>


                    <div className='px-3 w-full lg:w-0'>
                        <div className="lg:hidden text-white text-xl " onClick={handleButtonClick}>
                            {
                                isButtonClicked ? <FaTimes /> : <FaList />
                            }
                        </div>

                        <div className={isButtonClicked ? 'lg:hidden' : 'hidden'}>
                            <ul className="text-white font-semibold gap-3">
                                < li > <Link to='/' className='pb-2 px-4 mb-2'>HOME</Link></li>
                                < li > <Link to='/services' className='pb-2 px-4 mb-2'>SERVICES</Link></li>
                                < li > <Link to='/about-us' className='pb-2 px-4 mb-2'>ABOUT US</Link></li>
                                {/* < li > <Link to='/training' className='pb-2 px-4 mb-2'>TRANING</Link></li> */}
                                < li > <Link to='/contact-us' className='pb-2 px-4 mb-2'>CONTACT US</Link></li>

                            </ul>
                        </div>

                        <div className='navbar lg:hidden flex justify-end' >
                            <div className='flex items-center text-white font-semibold gap-3  '>
                                <a href="tel:+8801620658621"><FaPhoneAlt /></a>
                                <a href="mailto:>comtechsbd@gmail.com"><FaEnvelope /></a>

                            </div>
                        </div>

                    </div>

                </div>
            </nav >
        </>
    );
};

export default Header;