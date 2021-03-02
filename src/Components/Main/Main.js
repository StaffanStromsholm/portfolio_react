import React from 'react';
import HeroBanner from '../Main/HeroBanner';
import Projects from '../Main/Projects';
import Experience from '../Main/Experience';
import Skills from '../Main/Skills';
import Contact from './/Contact';

function Main() {
    return (
        <div className="Main">
            <HeroBanner />
            <Projects />
            {/* <Experience/>  */}
            <Skills />   
            <Contact />    
            </div>);
};

export default Main;
