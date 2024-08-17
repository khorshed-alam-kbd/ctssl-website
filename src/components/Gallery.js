import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import GI1 from '../Assets/photos/gallery/Achievement3.jpg'
import GI3 from '../Assets/photos/gallery/Achievement2.jpg'
import GI4 from '../Assets/photos/gallery/all-passport.jpg'
import GI6 from '../Assets/photos/gallery/Office3.jpg'
import GI7 from '../Assets/photos/gallery/Travel1.jpg'
import GI8 from '../Assets/photos/gallery/Travel2.jpg'
import GI9 from '../Assets/photos/gallery/Travel3.jpg'
import GI10 from '../Assets/photos/gallery/Travel4.jpg'
import GI11 from '../Assets/photos/gallery/Travel5.jpg'
import GI12 from '../Assets/photos/gallery/Travel6.jpg'
import GI15 from '../Assets/photos/gallery/Office4.jpg'
import GI17 from '../Assets/photos/gallery/Recruitment1.jpg'


const Gallery = () => {

    const Images = [
        { Img: GI1 }, { Img: GI3 }, { Img: GI4 }, { Img: GI6 }, { Img: GI7 }, { Img: GI8 }, { Img: GI9 }, { Img: GI10 }, { Img: GI11 }, { Img: GI12 }, { Img: GI15 }, { Img: GI17 },
    ]
    return (
        <div className='mx-auto bg-base-100 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-2'>
            <PhotoProvider>
                {
                    Images.map((p, i) => (
                        <PhotoView src={p.Img}>
                            <img
                                src={p.Img}
                                alt=''
                                className="w-64 h-56"
                            />
                        </PhotoView>
                    ))
                }
            </PhotoProvider>
        </div>
    );
};

export default Gallery;