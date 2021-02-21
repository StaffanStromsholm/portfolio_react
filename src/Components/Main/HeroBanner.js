import React from 'react';
import profilePic from './profilePic.JPG';

const HeroBanner = () => {
    return (
        <section id="hero-banner">
            <div className="hero-content">
                <h1>Welcome to my <span id="h1-dif-color">portfolio</span>
                </h1>
                <img class="profile-pic" src={profilePic}/>
            </div>
        </section>
    )
}

export default HeroBanner;
