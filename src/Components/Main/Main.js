import React from 'react';
import HeroBanner from '../Main/HeroBanner';
import Work from '../Main/Work';
import Experience from '../Main/Experience';
import Skills from '../Main/Skills';
import Contact from './/Contact';

function Main() {
    return (
        <div className="Main">
            <HeroBanner />
            <Work />
            {/* <Experience/>  */}
            <Skills />   
            <Contact />    
            </div>);
};

export default Main;
