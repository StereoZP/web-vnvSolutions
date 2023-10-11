import React from 'react';
import Header from "../Header/Header";
import Advantages from "../Advantages/Advantages";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import ContactUs from "../ContactUs/ContactUs";
import Brief from "../Brief/Brief";
import FAQ from "../FAQ/FAQ";
import LeadMagnetOffer from "../LeadMagnetOffer/LeadMagnetOffer";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import classes from "./pajes.module.css";

const Pages = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <Advantages/>
            <Services/>
            <Projects/>
            <ContactUs/>
            <Brief/>
            <FAQ/>
            <LeadMagnetOffer/>
            <SocialNetworks/>
        </div>
    );
};

export default Pages;