import React from 'react';
import classes from "./projects.module.css";

const Projects = () => {
    return (
        <div>
            <h1 className={classes.aboutHeader}>Our projects</h1>
            <div className={classes.container}>
                <div className={classes.aboutPicture}>
                    <img alt=""
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/250px-Boris_Johnson_official_portrait_%28cropped%29.jpg"/>
                </div>
                <div className={classes.about}>
                    <p className={classes.aboutPreTitle}>CEO</p>
                    <h2 className={classes.aboutTitle}>Alexander Boris de Pfeffel Johnson</h2>
                    <div className={classes.aboutProjectContainer}>
                        <div>
                            <p className={classes.aboutProject}>Successfully completed</p>
                            <p className={classes.aboutStatistic}>50<span
                                className={classes.aboutColor}>+</span> Projects</p>
                        </div>
                        <div>
                            <p className={classes.aboutProject}>Development experience</p>
                            <p className={classes.aboutStatistic}>10<span className={classes.aboutColor}>+</span> Years
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className={classes.aboutProject}>Experience of cooperation with business in</p>
                        <p className={classes.aboutProject}>USA, Estonia, Latvia, England, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;