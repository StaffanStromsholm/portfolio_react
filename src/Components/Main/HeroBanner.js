import React, { useEffect } from 'react';
import resume from './assets/documents/resume.pdf';
import profilePic from './assets/images/profilePic.jpg';
import './arrow.css';

import './stars.css';


const HeroBanner = () => {
    let i = 0;
    const txt = '<WebDeveloper />';
    const speed = 70;

    const typeWriter = () => {
        if (i < txt.length) {
            document.getElementById("typing").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // TODO: make some stars bigger than others, and have some blue,
    // red or white
    const addStars = (starFieldWidth, starFieldHeight, noOfStars) => {
        const starField = document.querySelector('#hero-banner');
        const numberOfStars = noOfStars;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
            const leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
            star.style.top = topOffset + 'px';
            star.style.left = leftOffset + 'px';
            star.style.position = 'absolute';
            starField.appendChild(star);
        }
    }

    const animateStars = (starFieldWidth, speed) => {
        const starField = document.querySelector('#hero-banner');
        const stars = starField.childNodes;

        function getStarColor(index) {
            if (index % 8 === 0)
                return 'red';
            else if (index % 10 === 0)
                return 'yellow';
            else if (index % 17 === 0)
                return 'blue';
            else
                return 'white';
        }

        const getStarDistance = (index) => {
            if (index % 6 === 0)
                return '';
            else if (index % 9 === 0)
                return 'near';
            else if (index % 2 === 0)
                return 'far';
            else
                return 0;
        }

        const getStarRelativeSpeed = (index) => {
            if (index % 6 === 0)
                return 1;
            else if (index % 9 === 0)
                return 2;
            else if (index % 2 === 0)
                return -1;
            else
                return 0;
        }

        setInterval(() => {
            for (let i = 1; i < stars.length; i++) {
                stars[i].className = `star ${getStarColor(i)} ${getStarDistance(i)}`;

                const currentLeft = parseInt(stars[i].style.left, 10);
                const leftChangeAmount = speed + getStarRelativeSpeed(i);
                let leftDiff;
                if (currentLeft - leftChangeAmount < 0) {
                    leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
                }
                else {
                    leftDiff = currentLeft - leftChangeAmount;
                }
                stars[i].style.left = (leftDiff) + 'px';
            }

        }, 20);

    }
    

    useEffect(() => {
        document.getElementById("typing").innerHTML = '';
        typeWriter();

        // TODO: add json with entries for various speeds, e.g.:
        // slow, normal, fast, warp, and set numbers that correspond to them.
        // This should clean up the code a bit
        const starFieldWidth = 1200;
        const starFieldHeight = 800;

        addStars(starFieldWidth, starFieldHeight, 50);
        animateStars(starFieldWidth, 2);
    }, [])

    return (
        <section id="hero-banner">
            <div className="hero-content">

                <div className>
            <img alt="profile" id="profile-pic" src={profilePic}></img>

                    <h2 id="name">Staffan Strömsholm</h2>
                    <div class="profile-text">
                        <p>Welcome to my portfolio website! I have built applications using HTML, CSS, Javascript, React and Node. This website is built with React. If you want to see my projects, please scroll down. If you want to get straight to my resumé, you can download it <a id="resume" href={resume} download="Staffan-Strömsholm-resumé">here</a></p>
                    </div>
                    <div className="arrow bounce"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;
