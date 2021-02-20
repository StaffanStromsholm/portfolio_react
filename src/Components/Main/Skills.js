import React from 'react';
import TSLogo from './Typescript_logo_2020.svg';
import mongoLogo from './mongodb (1).svg'
import SQLLogo from './sql-svgrepo-com.svg';

const Skills = () => {
    return (
        <section id="skills">
            <div class="container">
                <h2>Skills</h2>
                <div class="skills-content">
                    <div class="progress-group">
                        <label for="file"><i class="fab fa-html5"></i></label>
                        <p>HTML</p>
                        <progress id="file" value="50" max="100"> 50% </progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fab fa-css3-alt"></i></label>
                        <p>CSS</p>
                        <progress id="file" value="50" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fab fa-js-square"></i></label>
                        <p>Javascript</p>
                        <progress id="file" value="50" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fab fa-node"></i></label>
                        <p>NodeJS</p>
                        <progress id="file" value="40" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fab fa-spin fa-react"></i></label>
                        <p>React</p>
                        <progress id="file" value="50" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fas fa-mug-hot"></i></label>
                        <p>Redux</p>
                        <progress id="file" value="30" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i><img src={TSLogo} class="typescript-logo"></img></i></label>
                        <p>Typescript</p>
                        <progress id="file" value="20" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i><img src={mongoLogo} class="mongodb-logo"></img></i></label>
                        <p>MongoDB</p>
                        <progress id="file" value="30" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i><img src={SQLLogo} class="mongodb-logo"></img></i></label>
                        <p>SQL</p>
                        <progress id="file" value="30" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fab fa-git-square"></i></label>
                        <p>Git</p>
                        <progress id="file" value="50" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fas fa-medal"></i></label>
                        <p>Dad Jokes</p>
                        <progress id="file" value="80" max="100"></progress>
                    </div>
                    <div class="progress-group">
                        <label for="file"><i class="fas fa-utensils"></i></label>
                        <p>Cooking</p>
                        <progress id="file" value="0" max="100"></progress>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;