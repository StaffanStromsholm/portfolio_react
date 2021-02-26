import React from 'react';
import areYouBoredImg from './assets/images/areYouBored.png';
import calculatorImg from './assets/images/Calculator.png';
import covidImg from './assets/images/Covid19-tracker.png';
import groupProject2 from './assets/images/Group-project-2.png';
import interactiveCv from './assets/images/Interactive-cv.png';
import myGarage from './assets/images/My-garage.png';
import speedGame from './assets/images/SpeedGame.png';
import todoApp from './assets/images/Todo-app.png';

function Work() {
    return (
        <section id="work">
            <div className="container">
                <h2>Work</h2>
                <div className="content-work">
                <div className="card-work"><img src={interactiveCv} alt="picture of hand holding lightbulb" />
                        <h3>Interactive CV, Flappy Bird style</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
                            molestias illum facilis qui beatae.</p>
                        <div className="read-more">
                            Read More
            </div>
                    </div>
                    <div className="card-work">
                        <img src={areYouBoredImg} alt="picture of are you bored application" />
                        <h3>Group Project 1</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
              molestias illum facilis qui beatae.</p>
                        <div className="read-more">Read More</div>
                    </div>
                    <div className="card-work"><img src={groupProject2} alt="picture of hand holding lightbulb" />
                        <h3>Group Project 2</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
                            molestias illum facilis qui beatae.</p>
                        <div className="read-more">
                            Read More
            </div>
                    </div>
                    <div className="card-work"><img src={calculatorImg} alt="picture of hand holding lightbulb" />
                        <h3>Typescript calculator</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
              molestias illum facilis qui beatae.</p>
                        <div className="read-more">Read More</div>
                    </div>
                    <div className="card-work"><img src={covidImg} alt="picture of hand holding lightbulb" />
                        <h3>Covid-19 Tracker</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
              molestias illum facilis qui beatae.</p>
                        <div className="read-more">
                            Read More
            </div>
                    </div>
                    <div className="card-work"><img src={myGarage} alt="picture of hand holding lightbulb" />
                        <h3>My Garage</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
                            molestias illum facilis qui beatae.</p>
                        <div className="read-more">
                            Read More
            </div>
                    </div>
                    <div className="card-work"><img src={speedGame} alt="picture of hand holding lightbulb" />
                        <h3>Speed Game</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
                            molestias illum facilis qui beatae.</p>
                        <div className="read-more">
                            Read More
            </div>
                    </div>
                    <div className="card-work"><img src={todoApp} alt="picture of hand holding lightbulb" />
                        <h3>Todo App</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, dicta ea temporibus deleniti nihil ab
                            molestias illum facilis qui beatae.</p>
                        <div className="read-more">
                            Read More
            </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Work;
