import React from 'react';

import bannerImg from '../../Assets/photos/director-message.jpg'
import userPhoto from '../../Assets/photos/user-photo.jpg'


const Message = () => {
    return (
        <div>
            <div className="hero py-8" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">MESSAGES</h1>
                        <p className="mb-5 text-xl">A Jharna Trade International / <span className='text-orange-400'>messages</span></p>
                    </div>
                </div>
            </div >

            <div className="hero">
                <div className="hero-content bg-blue-950 flex-col lg:flex-row my-10 p-5 gap-5">
                    <img src={userPhoto} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-white p-5'>
                        <h1 className="text-2xl font-bold">MESSAGE FROM CHAIRMAN & MANAGING DIRECTORS</h1>

                        <p className="py-3">A Jharna Trade International is a Human Resource Management Solution Organization that provides manpower across the world as requirements. It is a Bangladesh Govt. Approved Recruiting Agency which Recruiting License no is: RL1726. More over 13 years real life work experience in this sector make us perfect to understand clientis needs. Reduce the time for sourcing perfect candidates for recruiting is very important. We are proud for our staffs/team that does hard worked to finish the project as client's demand.
                        </p>

                        <p className="py-3">

                            Our core values are-
                            1.	Quality Service & Professionalism
                            2.	Team work
                            3.	Recruitment schedule maintain and cost deduction
                            4.	Career Based training
                            5.	Honesty and Transparency & Credibility and flexibility.</p>

                        <p className="py-3">Density populations of Bangladesh are 1106/Per SO KM. Now Bangladesh is going to an era Of young generation. so, all over the world are looking workers from Bangladesh for their company development. We have many skills, semi-skills and unskilled workers in the sector of Shipyard, Oil & Gas Field, Construction, factory, Service & farming who wants to participate in world economy. We have been sending workers to Singapore, Malaysia, Vietnam, Cambodia, Saudi Arabia, UAE, Oman, Qatar, Libya, Brunei, Kuwait, Azerbaijan, Mozambique, Maldives, Iraq, China, Romania and Poland</p>

                        <div className='flex justify-between mt-5'>

                            <div>
                                <h1 className='font-bold uppercase'>Md. Eusuf</h1>
                                <p>Chairman</p>
                            </div>
                            <div>
                                <h1 className='font-bold uppercase'>Shanta Deb Saha</h1>
                                <p>Managing Director</p>
                            </div>
                            <div>
                                <h1 className='font-bold uppercase'>Uzzal Kumar Saha</h1>
                                <p>Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content bg-blue-950 flex-col lg:flex-row-reverse my-10 p-5 gap-5">
                    <img alt='' src={userPhoto} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-white p-5'>
                        <h1 className="text-2xl font-bold">MESSAGE FROM OVERSEAS DIRECTOR</h1>

                        <p className="py-3">In Bangladesh, 2.2 million working people enter the job market every year. Within them only 7 lac people get jobs in Bangla- desh. The contemporary labor market of Bangladesh is characterized by an increasing rate of labor force participation and increase in unemployed. Due to this, creation of employment for the new entrants into the labor force has become one of the principle development chal- lenges for Bangladesh. </p>
                        <p className="py-3">Bangladeshi workers are in high demand all over the world for their skills, hardwork- ing, Productivity, energetic and honesty. So, there are many job opportunities for Bangladeshi workers abroad.</p>
                        <p className="py-3">If additional workers from Bangladesh can be given job opportunities in various foreign companies, then both the foreign company and Bangladesh will benefit. After all the companies will get its work- flow and the unemployment problem of Bangladesh will be eliminated. </p>
                        <p className="py-3">Basically we are working on it, so that we can send workers aboard easily, in a short time with low cost and in the interest of the Employer and Employee</p>

                        <div className='mt-5'>
                            <h1 className='font-bold uppercase'>Saurabh Mohanta (Sanet)</h1>
                            <p>Overseas Director</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content bg-blue-950 flex-col lg:flex-row my-10 p-5 gap-5">
                    <img src={userPhoto} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-white p-5'>
                        <h1 className="text-2xl font-bold">MESSAGE FROM TRAINING DIRECTOR</h1>
                        <p className="py-3">Skilled manpower is always in high demand in every company. The need of skilled workers has been becoming higher day by day around the world. Bangladesh has many unemployed population who don't have proper education or technical knowledge. We have been working to turn our people to currency through proper training. We are dedicated to providing quality training that meets our employee's and employer's needs, enabling them to grow both personal and professionally. </p>
                        <p className="py-3">One Central International Training Centre Ltd is a well organized training and testing institute to fill up the gap of demanding skilled manpower. This training centre was set up with a mission of turning unskilled hands into skilled hands and more pro- ductive work force thus benefit the Em- ployees, Employers and countries con- cerned. All of our training programmers are individually designed to meet present job requirements both in home and abroad. We never compromise about our quality. Our expert trainers give their full effort to make our workers perfect for job market</p>

                        <div className='mt-5'>
                            <h1 className='font-bold uppercase'>Alamin Robin</h1>
                            <p>Training Director</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Message;