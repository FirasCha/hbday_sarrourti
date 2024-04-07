import React, { useState, useEffect } from 'react';
import videoImageTry from '../video/HappyBirthday.mp4'
import './styleVideo.css';

const HappyBirthdaySlides = () => {
    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowMessage(true);
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
    return (
        <div className="image-grid">
            <video width="100%" height="100%" controls>
                <source src={videoImageTry} type="video/mp4"/>
            </video>
            {/* <div className="container">
                {showMessage && <p>Today, the universe celebrates the most precious gift it has ever bestowed upon us - <strong>your existence</strong>.</p>}
            </div> */}
        </div>
      )
};

export default HappyBirthdaySlides;
