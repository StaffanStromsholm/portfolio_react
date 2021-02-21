import React from 'react'

const Gallery = () => {
    return (
        <section id="gallery">
            <h2>Gallery</h2>
            <p>Images from <a href="https://unsplash.com/">unsplash.com</a></p>
            <div className="grid-content">
                <div className="grid-item-1 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/1132634/1600x900"
                        alt="random pic from unsplash" />
                </div>
                <div className="grid-item-2 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/306252/1600x900"
                        alt="random pic from unsplash" />
                </div>
                <div className="grid-item-3 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/1240111/1600x900"
                        alt="random pic from unsplash" />
                </div>
                <div className="grid-item-4 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/136493/1600x900"
                        alt="random pic from unsplash" />
                </div>
                <div className="grid-item-5 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/261936/1600x900"
                        alt="random pic from unsplash" />
                </div>
                <div className="grid-item-6 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/1394721/1600x900"
                        alt="random pic from unsplash" />
                </div>
                <div className="grid-item-7 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/46/1600x900"
                        alt="grid-item random pic from unsplash" />
                </div>
                <div className="grid-item-8 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/54/1600x900"
                        alt="random pic from unsplash" />
                </div>
                <div className="grid-item-9 grid-div">
                    <img className="grid-item" src="https://source.unsplash.com/collection/827807/1600x900"
                        alt="random pic from unsplash" />
                </div>

            </div>
        </section>
    );
};

export default Gallery
