import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/StaffanStromsholm/portfolio_db/posts')
            .then(result => setPosts(result.data));
    }, []);

    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="content-projects">
                    {posts.map(post => {
                        console.log(post)
                    })}
                    {posts.map(post => (
                        <div className="card-projects"><img src={post.imgURL} alt={post.title} />
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <ul className="project-links">
                                {post.liveURL &&
                                <li>
                                    <a href={post.liveURL} className="read-more">
                                        <i class="icons fas fa-laptop"></i> Link to live version
                                    </a>
                                </li>}

                                {post.githubURL && 
                                <li>
                                    <a href={post.githubURL} className="read-more"><i class="icons fa fa-github-square"></i>Link to GitHub</a>
                                </li>}

                            </ul>


                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;
