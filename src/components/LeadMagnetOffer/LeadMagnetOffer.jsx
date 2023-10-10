import React from 'react';
import classes from "./leadMagnetOffer.module.css";
import MyButton from "../UI/button/MyButton";

const LeadMagnetOffer = () => {
    return (
        <div className={classes.leadMagnet}>
            <div className={classes.leadMagnetContent}>
                <h2>Get a free checklist</h2>
                <p>Subscribe to our newsletter and get a free checklist to help you succeed in your business.</p>
                <MyButton>Subscribe</MyButton>
            </div>
        </div>
    );
};

export default LeadMagnetOffer;