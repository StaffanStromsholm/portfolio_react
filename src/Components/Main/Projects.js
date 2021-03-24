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
            
                <div className="project-img"><img src="https://lh3.googleusercontent.com/VcIz6r3Xz8i_x8PhcXf6eBCIWAlTLSEnTYR1zQRAPGMFOcpLZ8YL7GxfQOxCSGZJC-ytcuG3BfQ-20uouGWwdyq6McyCoyuKilh3qBatOlvcLb1gqous-NGauR7S_5xe_cTHIi958Q=w2400"></img></div>
               
            <h4 className="project-title">My Garage</h4>
            <p className="project-description">Here I practiced Node, Express and EJS. A simple CRUD application for storing data about cars.</p>
            <ul>
                <li className="project-link"><a href="https://github.com/StaffanStromsholm/car_project"><i class="fas fa-chevron-right"></i> GitHub</a></li>
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
