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
        <Carousel className="projects">
             <div className="arrow-right">My projects <i class="bounce-right fas fa-chevron-right"></i></div>
            {posts.map(post =>
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
           
                    
        
                );
};

export default Projects;
