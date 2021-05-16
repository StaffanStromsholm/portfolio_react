import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import './arrow.css';

function Projects() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/StaffanStromsholm/portfolio_db/posts')
            .then(result => setPosts(result.data));
    }, []);

    return (
        <div id="projects">
            <div className="projects-title">My projects </div>
            <Carousel className="projects">
                <div className="project-info">

                    <div className="project-img"><img src="https://lh3.googleusercontent.com/C42_0chM8PKfSSfXPnFqEOuy1jgDBEwVIwWjI8wkF_hapbNTOqY6BV1pDzXVrdEjQ0YVMIKZTebmnwb4hLyddJhKtSWxSojbNzpCH9CvYyXH9v6aaCJ8iLUSJIukkIBkd_TGcD7KEw=w2400"></img></div>
                    <h4 className="project-title">Bandmate Finder</h4>
                    <p className="project-description">A social media app created for musicians. Users can create profiles, and connect with other users by commenting on their profiles. The users address is geocoded on the backend when signing up based on city and postal code, and the coordinates are stored to MongoDB along with the other information. You can filter users on the map so only users playing a certain instrument are shown. Technologies: React, Node, Express, mongoDB, Here Maps, Bcrypt for salting and hashing passwords, Node geocoder.</p>
                    <ul>
                        <li className="project-link"><a href="https://bandmatefinderclient.herokuapp.com/BandmateFinder-client"><i class=" fas fa-chevron-right"></i> Live</a></li>
                        <li className="project-link"><a href="https://github.com/StaffanStromsholm/BandmateFinder-client"><i class="fas fa-chevron-right"></i> GitHub</a></li>
                    </ul>
                </div>

                {posts.slice(1).map(post =>
                    <div className="project-info">
                        <div className="project-img"><img src={post.imgURL}></img></div>

                        <h4 className="project-title">{post.title}</h4>
                        <p className="project-description">{post.description}</p>
                        <ul>
                            {post.liveURL && <li className="project-link"><a href={post.liveURL}><i class=" fas fa-chevron-right"></i> Live</a></li>}
                            {post.githubURL && <li className="project-link"><a href={post.githubURL}><i class="fas fa-chevron-right"></i> GitHub</a></li>}
                        </ul>
                    </div>
                )}

            </Carousel>
        </div>



    );
};

export default Projects;
