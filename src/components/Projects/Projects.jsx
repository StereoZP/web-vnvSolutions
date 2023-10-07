import React from 'react';
import classes from "./projects.module.css";

const Projects = () => {
    return (
        <div className={classes.container}>
            <div>
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/250px-Boris_Johnson_official_portrait_%28cropped%29.jpg"/>
            </div>
            <div className={classes.about}>
                <p>CEO</p>
                <h2>Alexander Boris de Pfeffel Johnson</h2>
                <div>
                    <div>
                        <p>Successfully completed</p>
                        <p>50+ Projects</p>
                    </div>
                    <div>
                        <p>Development experience</p>
                        <p>10+ Years</p>
                    </div>
                </div>
                <div>
                    <p>Experience of cooperation with business in</p>
                    <p>USA, Estonia, Latvia, England, etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;