import React from 'react';
import classes from "./leadMagnetOffer.module.css";
import CustomButton from "../UI/CustomButton/CustomButton";

const LeadMagnetOffer = () => {
    return (
        <div className={classes.leadMagnet}>
            <div className={classes.leadMagnetContent}>
                <h2>Get a free checklist!</h2>
                <p className={classes.leadMagnetPreTitle}>Subscribe to our newsletter and get a free checklist to help you succeed in your business.</p>
                <CustomButton>Subscribe</CustomButton>
            </div>
        </div>
    );
};

export default LeadMagnetOffer;