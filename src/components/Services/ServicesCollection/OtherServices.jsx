import React from 'react';
import classes from "./servicesCollection.module.css";
import MyButton from "../../UI/button/MyButton";

const OtherServices = () => {
    return (
        <div className={classes.servicesScreen}>
            <div className={classes.servicesScreenContent}>
                <h1 className={classes.servicesScreenTitle}>Ideal for businesses that need a short but meaningful presentation</h1>
                <p className={classes.servicesScreenText}>Thanks to the convenience of this format, you can easily provide the user with all the important information and quickly lead them to the purchase</p>
                <p className={classes.servicesScreenPreTitle}>Choose this type of site if:</p>
                <ul className={classes.servicesScreenTextList}>
                    <li>You want to present your own information product, service, book, etc.</li>
                    <li>You have a small number of products (up to 8)</li>
                    <li>You need a short portfolio of a specialist or a business card site</li>
                </ul>
                <div>
                    <MyButton>More details</MyButton>
                </div>
            </div>
            <div>
                <img alt="" src="https://makedon.com.ua/img/services_consultation-illustration.svg"/>
            </div>
        </div>
    );
};

export default OtherServices;