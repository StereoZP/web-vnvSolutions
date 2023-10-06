import React from 'react';
import ServicesList from "./ServicesList";
import LandingPage from "./ServicesCollection/LandingPage";
import MultiPageSite from "./ServicesCollection/MultiPageSite";
import InternetShop from "./ServicesCollection/InternetShop";
import SiteAudit from "./ServicesCollection/SiteAudit";
import IndividualConsultation from "./ServicesCollection/IndividualConsultation";
import OtherServices from "./ServicesCollection/OtherServices";
import {useSelector} from "react-redux";

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
        <div>
            <ServicesList/>
            {getSelectedService(activeService)}
        </div>
    );
};

export default Services;