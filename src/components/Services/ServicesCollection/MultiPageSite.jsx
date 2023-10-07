import React from 'react';
import classes from "./servicesCollection.module.css";
import MyButton from "../../UI/button/MyButton";

const MultiPageSite = () => {
    return (
        <div className={classes.servicesScreen}>
            <div className={classes.servicesScreenContent}>
                <h1 className={classes.servicesScreenTitle}>A huge field for creativity</h1>
                <p className={classes.servicesScreenText}>You can use any number of pages to talk about your business, show your product, present your company or simply share useful information</p>
                <p className={classes.servicesScreenPreTitle}>Choose this type of site if:</p>
                <ul className={classes.servicesScreenTextList}>
                    <li>- You need more than one page on the site</li>
                    <li>- You plan to make a blog and/or a personal account</li>
                    <li>- Any other additional functionality is provided on the site</li>
                </ul>
                <div>
                    <MyButton>More details</MyButton>
                </div>
            </div>
            <div>
                <img alt="" src="https://makedon.com.ua/img/services_corporat-illustration.svg"/>
            </div>
        </div>
    );
};

export default MultiPageSite;