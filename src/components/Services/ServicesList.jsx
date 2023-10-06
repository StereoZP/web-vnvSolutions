import React from 'react';
import {useDispatch} from "react-redux";
import {changeService} from "../../store/actionsCreator";

const ServicesList = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>{dispatch(changeService('LANDING_PAGE'))}}>Landing page</button>
            <button onClick={()=>{dispatch(changeService('MULTI_PAGE_SITE'))}}>Multi page site</button>
            <button onClick={()=>{dispatch(changeService('INTERNET_SHOP'))}}>Internet shop</button>
            <button onClick={()=>{dispatch(changeService('SITE_AUDIT'))}}>Site audit</button>
            <button onClick={()=>{dispatch(changeService('INDIVIDUAL_CONSULTATION'))}}>Individual consultation</button>
            <button onClick={()=>{dispatch(changeService('OTHER_SERVICES'))}}>Other services</button>
        </div>
    );
};

export default ServicesList;