import React from 'react';
import HeroBanner from '../Main/HeroBanner';
import Projects from '../Main/Projects';
import Skills from '../Main/Skills';
import Contact from './/Contact';

function Main() {
    return (
        <div className="Main">
            <HeroBanner />
            <Projects />
            <Skills />   
            <Contact />    
            </div>);
};

export default Main;
