import React from 'react';
import {useDispatch} from "react-redux";
import {changeService} from "../../../store/actionsCreator";
import classes from "./servicesList.module.css";
import MyButton from "../../UI/button/MyButton";

const ServicesList = () => {
    const dispatch = useDispatch()
    return (
        <div className={classes.navBar}>
            <MyButton onClick={()=>{dispatch(changeService('LANDING_PAGE'))}}>Landing page</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('MULTI_PAGE_SITE'))}}>Multi page site</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('INTERNET_SHOP'))}}>Internet shop</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('SITE_AUDIT'))}}>Site audit</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('INDIVIDUAL_CONSULTATION'))}}>Individual consultation</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('OTHER_SERVICES'))}}>Other services</MyButton>
        </div>
    );
};

export default ServicesList;