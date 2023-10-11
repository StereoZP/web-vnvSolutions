import React from 'react';
import classes from "./servicesCollection.module.css";
import CustomButton from "../../UI/CustomButton/CustomButton";

export const SiteAudit = () => {
    return (
        <div className={classes.servicesScreen}>
            <div className={classes.servicesScreenContent}>
                <h1 className={classes.servicesScreenTitle}>A detailed audit of your site on all possible parameters</h1>
                <p className={classes.servicesScreenText}>The audit considers: design, text, conversion, technical data, indexing by search engines and many other characteristics</p>
                <p className={classes.servicesScreenPreTitle}>The audit will help you:</p>
                <ul className={classes.servicesScreenTextList}>
                    <li>- See mistakes made</li>
                    <li>- Find the right approach to your customers</li>
                    <li>- Multiply the conversion rate</li>
                    <li>- Get dozens of new ideas for the site and much more.</li>
                </ul>
                <div>
                    <CustomButton>More details</CustomButton>
                </div>
            </div>
            <div>
                <img alt="" src="https://makedon.com.ua/img/services_audit-illustration.svg"/>
            </div>
        </div>
    );
};
