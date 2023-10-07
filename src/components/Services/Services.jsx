import React from 'react';
import ServicesList from "./ServicesList/ServicesList";
import LandingPage from "./ServicesCollection/LandingPage";
import MultiPageSite from "./ServicesCollection/MultiPageSite";
import InternetShop from "./ServicesCollection/InternetShop";
import SiteAudit from "./ServicesCollection/SiteAudit";
import IndividualConsultation from "./ServicesCollection/IndividualConsultation";
import OtherServices from "./ServicesCollection/OtherServices";
import {useSelector} from "react-redux";
import classes from "./services.module.css";


const Services = () => {

    const activeService = useSelector(state => state.service)
    function getSelectedService(mode) {
        const modes = {
            'LANDING_PAGE': <LandingPage/>,
            'MULTI_PAGE_SITE': <MultiPageSite/>,
            'INTERNET_SHOP': <InternetShop/>,
            'SITE_AUDIT': <SiteAudit/>,
            'INDIVIDUAL_CONSULTATION': <IndividualConsultation/>,
            'OTHER_SERVICES': <OtherServices/>,
        };
        return modes[mode] ?? <LandingPage/>;
    }

    return (
        <div className={classes.container}>
            <div className={classes.parent}>
                <ServicesList/>
                    {getSelectedService(activeService)}
            </div>
        </div>
    );
};

export default Services;