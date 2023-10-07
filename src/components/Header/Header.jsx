import React from 'react';
import classes from "./header.module.css"
import MyButton from "../UI/button/MyButton";

const Header = () => {
    return (
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <div className={classes.container}>
                <div>
                    <h1 className={classes.text}>Easy, quality, IT -<br/>
                        <b>w</b>inning <b>solutions</b><br/>
                        for your business</h1>
                </div>
                <div>
                    <img alt="" width="400px" src="https://vnv.solutions/img/vnv%20logo-05.png"/>
                </div>
            </div>
            <div className={classes.order}>
                <p style={{fontStyle:"italic",paddingBottom:"10px", color:"white"}}>Tell me about your business and I'll take care of the rest...</p>
                <MyButton>Order</MyButton>
            </div>
        </div>
    );
};

export default Header;