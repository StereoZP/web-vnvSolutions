import React from 'react';
import classes from "./servicesCollection.module.css";
import CustomButton from "../../UI/CustomButton/CustomButton";

export const InternetShop = () => {
    return (
        <div className={classes.servicesScreen}>
            <div className={classes.servicesScreenContent}>
                <h1 className={classes.servicesScreenTitle}>A convenient site for business that will allow users to:</h1>
                <ul className={classes.servicesScreenTextList}>
                    <li>- Quickly find the desired product</li>
                    <li>- Make an order at any time</li>
                </ul>
                <p className={classes.servicesScreenText}>The catalog, convenient filtering, a personal account and a well-thought-out interface will definitely increase the number of your customers thanks to comfortable use and easy purchase processing</p>
                <p className={classes.servicesScreenPreTitle}>Choose this type of site if:</p>
                <ul className={classes.servicesScreenTextList}>
                    <li>- You have more than 8 products</li>
                    <li>- You plan to make a blog and/or a personal account</li>
                    <li>- You need a catalog, shopping cart, personal account or other pages of this type</li>
                </ul>
                <div>
                    <CustomButton>More details</CustomButton>
                </div>
            </div>
            <div>
                <img alt="" src="https://makedon.com.ua/img/services_corporat-illustration.svg"/>
            </div>
        </div>
    );
};
