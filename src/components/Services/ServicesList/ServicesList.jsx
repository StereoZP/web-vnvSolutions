import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeService} from "../../../store/actionsCreator";
import classes from "../../UI/button/MyButton.module.css";
import cl from "./servicesList.module.css"
import MyButton from "../../UI/button/MyButton";
import classNames from "classnames";

const ServicesList = () => {
    const dispatch = useDispatch()
    const activeService = useSelector(state => state.service)

    const activeButton = classNames(
        {
            [classes.myBtnActive]: activeService==="LANDING_PAGE"
        })

    return (
        <div className={cl.navBar}>
            <MyButton className={activeButton} onClick={()=>{dispatch(changeService('LANDING_PAGE'))}}>Landing page</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('MULTI_PAGE_SITE'))}}>Multi page site</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('INTERNET_SHOP'))}}>Internet shop</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('SITE_AUDIT'))}}>Site audit</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('INDIVIDUAL_CONSULTATION'))}}>Individual consultation</MyButton>
            <MyButton onClick={()=>{dispatch(changeService('OTHER_SERVICES'))}}>Other services</MyButton>
        </div>
    );
};

export default ServicesList;