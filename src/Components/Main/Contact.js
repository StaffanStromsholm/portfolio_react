import React from 'react';
import profilePic from './assets/images/profilePic.jpg';

const Contact = () => {
    return (
        <section id="contact-me">
            <img id="profile-pic" src={profilePic}></img>
                <h2>Contact</h2>
                <p>Tel: +358451175987</p>
                <p>Email: staffan.stromsholm@gmail.com</p>
        </section>
    );
};

export default Contact;
