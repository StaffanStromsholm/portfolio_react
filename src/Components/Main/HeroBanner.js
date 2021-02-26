import React, { useEffect } from 'react';
import profilePic from './assets/images/profilePic.JPG';
import resume from './assets/documents/resume.pdf';


const HeroBanner = () => {
    let i = 0;
    const txt = 'Web developer';
    const speed = 70;

    const typeWriter = () => {
        if (i < txt.length) {
            document.getElementById("typing").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    useEffect(() => {
        document.getElementById("typing").innerHTML = '';
        typeWriter();
    })

    return (
        <section id="hero-banner">
            <div className="hero-content">
                <div className>
                    <h2 id="name">Staffan Strömsholm</h2>
                    <h1 id="typing"></h1>
                    {/* <img class="profile-pic" src={profilePic}/> */}
                    <div class="profile-text">
                        <p>Welcome to my portfolio website! I have built applications using HTML, CSS, Javascript, React and Node. This website is built with React. If you want to see my projects, please scroll down. If you want to get straight to my resumé, you can download it <a id="resume" href={resume} download="Staffan-Strömsholm-resumé">here</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;
