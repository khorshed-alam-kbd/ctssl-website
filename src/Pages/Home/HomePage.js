import React from 'react';

import { FaAngleDoubleUp, FaRandom, FaStar } from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll'
import { useInView } from 'react-intersection-observer';
import HomeBanner from '../../components/HomeBanner';
import Services from '../Services/Services';
import OurClients from '../../components/OurClients';
import ClientsReview from '../../components/ClientsReview';



const Home = () => {
    const { ref, inView } = useInView();
    return (
        <div className='overflow-x-hidden' id='hero' >
            {/* hero banner  */}
            {/* <div ref={ref} className="hero min-h-full " style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content my-5">
                    <div className="mx-auto max-w-6xl px-8 lg:px-0">
                        <img src={logo} alt='' className='w-24 rounded mx-auto mb-3'></img>
                        <h1 className="mb-8 text-3xl lg:text-5xl font-bold uppercase text-white">A Jharna Trade International  </h1>
                        <p className="mb-5 text-xl mx-auto mx-w-4xl hidden lg:flex italic">A Jharna Trade International is a Human Resource Management Solution Organization that provides manpower across the world as requirements. It is a Bangladesh Govt. Approved Recruiting Agency which Recruiting License no is: RL1726.</p>
                    </div>
                </div>
            </div > */}

            <HomeBanner />

            {/* SERVICES */}

            <div id='services'>
                <div className=" bg-base-200 py-8 ">
                    <div className="mx-auto px-10 max-w-7xl ">
                        <div className=" text-center" data-aos="fade-up" data-aos-duration="1000">
                            <h1 className="text-4xl font-bold mb-2">OUR SERVICES</h1>
                            <hr className='w-24 h-1 mx-auto text-xl bg-orange-400 rounded' />
                            {/* <p className="py-2 mx-auto max-w-4xl text-gray-600 text-justify lg:text-center">A Jharna Trade International is the best place solutions to recruiters & candidates.
                            </p> */}
                        </div>
                        <Services />
                    </div>
                </div>
            </div>

            {/* Our Clients  */}
            <div id='our-clients'>
                <div className=" bg-base-100 py-8">
                    <div className="mx-auto px-10 max-w-7xl">
                        <div className="mb-5 text-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                            <h1 className="text-4xl font-bold mb-2 uppercase">Our Clients</h1>
                            <hr className='w-24 h-1 mx-auto text-xl bg-orange-400 rounded' />
                            {/* <p className="py-2 mx-auto max-w-4xl text-gray-600 text-justify lg:text-center">Skilled manpower is always in high demand in every company. The need of skilled workers has been becoming higher day by day around the world </p> */}
                        </div>
                        <OurClients />
                    </div>
                </div>
            </div>
            {/* Our Clients Review  */}
            <div id='our-client reviwe'>
                <div className=" bg-base-200 py-8">
                    <div className="mx-auto px-10 max-w-7xl">
                        <div className="mb-5 text-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                            <h1 className="text-4xl font-bold mb-2 uppercase">Our Client Reviews</h1>
                            <hr className='w-24 h-1 mx-auto text-xl bg-orange-400 rounded' />
                            {/* <p className="py-2 mx-auto max-w-4xl text-gray-600 text-justify lg:text-center">Skilled manpower is always in high demand in every company. The need of skilled workers has been becoming higher day by day around the world </p> */}
                        </div>
                        <ClientsReview />
                    </div>
                </div>
            </div>


            {/* Scroll to top  */}
            <div className={`fixed bottom-8 lg:bottom-6 right-4 lg:right-6 rounded-full border-2 border-white' ${inView ? 'hidden' : ''}`}>
                <FaAngleDoubleUp className=' text-2xl lg:text-3xl text-orange-400 m-2 z-1' onClick={() => scroll.scrollToTop()} />
            </div>
        </div >
    );
};

export default Home;