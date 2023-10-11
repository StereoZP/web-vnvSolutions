import React from 'react';
import classes from "./header.module.css"
import CustomButton from "../UI/CustomButton/CustomButton";

const Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <h1>Easy, quality, IT -<br/>
                        <b>w</b>inning <b>solutions</b><br/>
                        for your business</h1>
                </div>
                <div>
                    <img alt="" width="400px" src="https://vnv.solutions/img/vnv%20logo-05.png"/>
                </div>
            </div>
            <div className={classes.order}>
                <p className={classes.headerPreTitle}>Tell me about your business and I'll take care of the rest...</p>
                <CustomButton>Order</CustomButton>
            </div>
        </div>
    );
};

export default Header;