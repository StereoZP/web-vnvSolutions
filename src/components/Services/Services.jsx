import React from 'react';
import ServicesList from "./ServicesList/ServicesList";
import {
    LandingPage,
    MultiPageSite,
    InternetShop,
    SiteAudit,
    IndividualConsultation,
    OtherServices
} from "./index";

import {useSelector} from "react-redux";
import classes from "./services.module.css";
import {SERVICES} from "../../constant";


const Services = () => {

    const activeService = useSelector(state => state.service)

    const SERVICE_MAP = {
        [SERVICES.LANDING_PAGE]: <LandingPage/>,
        [SERVICES.MULTI_PAGE_SITE]: <MultiPageSite/>,
        [SERVICES.INTERNET_SHOP]: <InternetShop/>,
        [SERVICES.SITE_AUDIT]: <SiteAudit/>,
        [SERVICES.INDIVIDUAL_CONSULTATION]: <IndividualConsultation/>,
        [SERVICES.OTHER_SERVICES]: <OtherServices/>,
    }

    function getSelectedService(service) {
        return SERVICE_MAP[service] ?? <LandingPage/>;
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