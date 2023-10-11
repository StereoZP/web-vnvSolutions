import React from 'react';
import {useDispatch} from "react-redux";
import {changeService} from "../../../store/actionsCreator";
import cl from "./servicesList.module.css"
import CustomButton from "../../UI/CustomButton/CustomButton";
import {SERVICES} from "../../../constant";

const ServicesList = () => {
    const dispatch = useDispatch()

    const selectService = (service) =>{
        dispatch(changeService(service))
    }

    return (
        <div className={cl.navBar}>
            <CustomButton serviceName={SERVICES.LANDING_PAGE} onClick={()=>selectService(SERVICES.LANDING_PAGE)}>Landing page</CustomButton>
            <CustomButton serviceName={SERVICES.MULTI_PAGE_SITE} onClick={()=>selectService(SERVICES.MULTI_PAGE_SITE)}>Multi page site</CustomButton>
            <CustomButton serviceName={SERVICES.INTERNET_SHOP} onClick={()=>selectService(SERVICES.INTERNET_SHOP)}>Internet shop</CustomButton>
            <CustomButton serviceName={SERVICES.SITE_AUDIT} onClick={()=>selectService(SERVICES.SITE_AUDIT)}>Site audit</CustomButton>
            <CustomButton serviceName={SERVICES.INDIVIDUAL_CONSULTATION} onClick={()=>selectService(SERVICES.INDIVIDUAL_CONSULTATION)}>Individual consultation</CustomButton>
            <CustomButton serviceName={SERVICES.OTHER_SERVICES} onClick={()=>selectService(SERVICES.OTHER_SERVICES)}>Other services</CustomButton>
        </div>
    );
};

export default ServicesList;