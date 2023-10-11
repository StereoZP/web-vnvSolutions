import React from 'react';
import classes from './customButton.module.css';
import classNames from "classnames";
import {useSelector} from "react-redux";


const CustomButton = ({children,serviceName,...props}) => {
    const activeService = useSelector(state => state.service)
    const activeButton = classNames(classes.myBtn, props.className,
        {
            [classes.myBtnActive]: activeService === serviceName,
        })

    return (
        <button {...props} className={activeButton}>
            {children}
        </button>
    );
};

export default CustomButton;