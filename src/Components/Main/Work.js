import React, { useEffect, useState } from 'react';
import areYouBoredImg from './assets/images/areYouBored.png';
import calculatorImg from './assets/images/Calculator.png';
import covidImg from './assets/images/Covid19-tracker.png';
import groupProject2 from './assets/images/Group-project-2.png';
import interactiveCv from './assets/images/Interactive-cv.png';
import myGarage from './assets/images/My-garage.png';
import speedGame from './assets/images/SpeedGame.png';
import todoApp from './assets/images/Todo-app.png';
import blog from './assets/images/blog.png';
import axios from 'axios';

function Work() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/StaffanStromsholm/portfolio_db/posts')
            .then(result => setPosts(result.data));
    }, []);

    return (
        <section id="work">
            <div className="container">
                <h2>Work</h2>
                <div className="content-work">
                    {posts.map(post => {
                        console.log(post)
                    })}
                    {posts.map(post => (
                        <div className="card-work"><img src={post.imgURL} alt={post.title} />
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <ul className="project-links">
                                <li>
                                    <a href={post.liveURL} className="read-more">

                                        <i class="icons fas fa-laptop"></i> Link to live version
                        </a>
                                </li>
                                <li>
                                <a href={post.githubURL} className="read-more"><i class="icons fa fa-github-square"></i></a>
                                </li>
                            </ul>

                            
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Work;
