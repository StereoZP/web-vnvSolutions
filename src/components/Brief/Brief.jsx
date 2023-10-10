import React from 'react';
import MyButton from "../UI/button/MyButton";
import classes from "./brief.module.css";

const Brief = () => {
    return (
        <div className={classes.container}>
            <div className={classes.brief}>
                <h1>Filling out the brief</h1>
                <p className={classes.briefPreTitle}>A brief is a document in which the customer together with the executor prescribes the tasks,
                    specifies the upcoming stages of the work and explains possible technical nuances in order to
                    quickly create a common context that is understandable to all parties, to be on the same page in the
                    project.</p>
                <MyButton>Fill now</MyButton>
            </div>
        </div>
    );
};

export default Brief;