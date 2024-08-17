import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import GalleryDetails from '../Pages/GalleryDetails/GalleryDetails';

import HomePage from '../Pages/Home/HomePage';
import Services from '../Pages/Services/Services';
import ContactUs from '../Pages/Contact/Contact';
import AboutUs from '../Pages/AboutUs/AboutUs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <HomePage />
            }
            ,
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            }

        ]
    }
    ,
    {
        path: '/gallery',
        element: <GalleryDetails />
    }
])

export default router;