import React from 'react';

const GoogleMapLocation = () => {
    return (
        <div className='mx-auto w-full'>
            <iframe className='mx-auto w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d542.8296068631258!2d90.36987821271931!3d23.757798424317286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1723874411618!5m2!1sen!2sbd" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    );
};

export default GoogleMapLocation;