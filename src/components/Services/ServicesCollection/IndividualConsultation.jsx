import React from 'react';
import classes from "./servicesCollection.module.css";
import CustomButton from "../../UI/CustomButton/CustomButton";

export const IndividualConsultation = () => {
    return (
        <div className={classes.servicesScreen}>
            <div className={classes.servicesScreenContent}>
                <h1 className={classes.servicesScreenTitle}>An ideal start to promote your business on the Internet</h1>
                <p className={classes.servicesScreenText}>In addition to a ready-made foundation for your own site, you will receive recommendations that will help you quickly achieve success in promoting your business</p>
                <ul className={classes.servicesScreenTextList}>
                    <li>- Consultation lasts 1.5 hours in online format</li>
                    <li>- You can indicate additional questions about your business and, upon prior agreement, I will include them in our consultation</li>
                </ul>
                <div>
                    <CustomButton>More details</CustomButton>
                </div>
            </div>
            <div>
                <img alt="" src="https://makedon.com.ua/img/services_consultation-illustration.svg"/>
            </div>
        </div>
    );
};
