import React from 'react';
import { FaGlobe, FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import FahadVaiImg from '../../Assets/photos/user-photo.jpg';
import KaImg from '../../Assets/photos/developerImg/khorshed-photo.jpg';
import AlImg from '../../Assets/photos/user-photo.jpg';
import BUImg from '../../Assets/photos/developerImg/borhan.jpg';
import MUImg from '../../Assets/photos/user-photo.jpg';

const teamMembers = [
    {
        name: "Fahad Bin Bashar",
        role: "Full Stack Developer",
        description: "Overseeing all technology operations and evaluating them according to the goals.",
        image: FahadVaiImg,
        socialLinks: {
            globe: "https://www.facebook.com/fahadbinbashar",
            github: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
    {
        name: "Md Mayin Uddin",
        role: "App Developer",
        description: "Overseeing all technology operations and evaluating them according to the goals.",
        image: MUImg,
        socialLinks: {
            globe: "#",
            github: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
    {
        name: "Md Borhan Uddin",
        role: "MERN Stack Developer",
        description: "Overseeing all technology operations and evaluating them according to the goals.",
        image: BUImg,
        socialLinks: {
            globe: "#",
            github: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
    {
        name: "Md Saifur Alamin",
        role: "React Developer",
        description: "Overseeing all technology operations and evaluating them according to the goals.",
        image: AlImg,
        socialLinks: {
            globe: "#",
            github: "#",
            linkedin: "#",
            facebook: "#"
        }
    },
    {
        name: "Md Khorshed Alam",
        role: "React Developer",
        description: "Overseeing all the React.js technology operations and evaluating them according to the goals.",
        image: KaImg,
        socialLinks: {
            globe: "https://khorshedalam-kbd.web.app/",
            github: "https://github.com/khorshed-alam-kbd/",
            linkedin: "https://www.linkedin.com/in/khorshedalam-kbd/",
            facebook: "https://www.facebook.com/engr.khorshedalam.bd"
        }
    },
];

const AboutUs = () => {
    return (
        <div id='about-us'>
            <div className='bg-base-200 py-10'>
                <div className='mx-auto max-w-7xl'>
                    <div className='text-center'>
                        <h1 className='mx-auto text-3xl font-bold my-3'>
                            Building A Better Working World is The Foundation of Our Company
                        </h1>
                        <p className='text-gray-400'>
                            We empower our people with the right mindsets and skills to navigate what’s next, become the transformative leaders the world needs, pursue careers as unique as they are, and build their own exceptional dark tech experiences. The ability to invite, leverage, and learn from different perspectives is key to delivering for our clients. We believe diversity and inclusiveness means growth.
                        </p>
                    </div>

                    <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:p-0'>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={member.image} className='w-full h-72' alt={member.name} /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-bold">{member.name}</h2>
                                    <p className='text-gray-400'>{member.role}</p>
                                    {/* <p className='text-justify'>{member.description}</p> */}
                                    <div className='flex justify-around mt-3 py-3 rounded bg-base-200'>
                                        {member.socialLinks.globe && <a href={member.socialLinks.globe} target="_blank" rel="noopener noreferrer"><FaGlobe /></a>}
                                        {member.socialLinks.github && <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                                        {member.socialLinks.linkedin && <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
                                        {member.socialLinks.facebook && <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
