import React from 'react';
import classes from "./contactUs.module.css";
import MyButton from "../UI/button/MyButton";
import {Field, Form, Formik} from "formik";

const ContactUs = () => {
    return (
        <div className={classes.container}>
            <div className={classes.contactContainer}>
                <div className={classes.contact}>
                    <h2 className={classes.contactTitle}>Contact us</h2>
                    <p className={classes.contactPreTitle}>One message can be the beginning of a new phase for your
                        business</p>
                </div>
                <div className={classes.buttonContainer}>
                    <div>
                        <MyButton className={classes.button}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.75 21.5V10.5V7.5H6.75H24.75H27.75V10.5V21.5C27.75 23.1569 26.4069 24.5 24.75 24.5H6.75C5.09315 24.5 3.75 23.1569 3.75 21.5Z"
                                    stroke="#242424" strokeWidth="1"></path>
                                <path
                                    d="M3.75 7.5L13.531 14.0208C14.8746 14.9165 16.625 14.9165 17.9686 14.0208L27.75 7.5"
                                    stroke="#242424" strokeWidth="1"></path>
                            </svg>
                            Email</MyButton>
                        <MyButton className={classes.button}>
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28.584 6.5L4.58398 16.0278L10.4535 19.0741L22.9101 11.8148L13.6492 20.2407V27.5L16.8449 23.5463L24.2144 27.5L28.584 6.5Z"
                                    stroke="#242424" strokeWidth="1" strokeLinecap="round"></path>
                            </svg>
                            Telegram</MyButton>
                    </div>
                    <div>
                        <MyButton className={classes.button}>
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.1012 28.0229L9.101 28.0227C8.93002 27.9166 8.73908 27.8465 8.53997 27.817C8.34087 27.7875 8.13784 27.7992 7.9434 27.8512L7.94324 27.8512L3.78371 28.9658L4.8983 24.8063L4.89833 24.8062C4.9504 24.6117 4.96203 24.4087 4.9325 24.2095C4.90296 24.0104 4.8329 23.8194 4.72663 23.6484L4.7266 23.6484C1.38599 18.2749 2.18154 11.3951 6.66315 6.91343C11.9489 1.62781 20.5503 1.62782 25.836 6.91343C31.1216 12.199 31.1216 20.8006 25.836 26.0862C21.3542 30.5679 14.4745 31.3633 9.1012 28.0229Z"
                                    stroke="#242424"></path>
                                <path
                                    d="M14.7014 12.669L11.7426 9.26172C10.2184 9.78591 7.78856 11.5944 10.2632 14.6347C13.3565 18.4351 14.3612 19.8672 19.9465 22.8908C21.157 23.546 22.9053 23.1529 24.2503 20.4009L20.7535 18.173C20.3948 17.9546 19.4893 17.9371 18.7361 19.0904C15.2932 18.1468 13.8945 15.6394 13.6255 14.5037C14.4862 13.9795 15.1049 13.1932 14.7014 12.669Z"
                                    stroke="#242424" strokeLinecap="round"></path>
                            </svg>
                            WhatsUp</MyButton>
                        <MyButton className={classes.button}>
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.1566 6.89961C19.2172 7.43542 23.201 9.27728 24.4099 14.0996M17.2115 9.3331C18.2647 9.4224 20.7008 10.4583 22.0196 13.8875M17.2115 11.4764C17.761 11.521 19.0249 12.039 19.6842 13.7536M9.79334 30.8996V27.4168C7.41219 26.9703 2.6499 23.8269 2.6499 14.8252C2.6499 3.5731 6.90849 2.09961 15.2883 2.09961C23.6681 2.09961 29.8499 2.09961 29.8499 12.414C29.8499 22.7284 28.3388 27.4168 19.8216 27.4168C13.0079 27.4168 13.2277 27.5996 13.2277 27.5996L9.79334 30.8996ZM10.8923 8.26147L13.9145 11.7443C14.3267 12.2801 13.6948 13.0838 12.8156 13.6196C13.0903 14.7805 14.519 17.3435 18.0358 18.308C18.8051 17.1292 19.73 17.1471 20.0964 17.3703L23.6681 19.6475C22.2943 22.4605 20.5085 22.8624 19.2721 22.1926C13.5671 19.1021 12.5408 17.6382 9.38122 13.7536C6.85354 10.6458 9.33542 8.79728 10.8923 8.26147Z"
                                    stroke="#242424" strokeLinecap="round"></path>
                            </svg>
                            Viber</MyButton>
                    </div>
                </div>
            </div>
            <div className={classes.inputContainer}>
                <h2 style={{color:"black"}}>Feedback:</h2>
                <Formik
                    initialValues={{
                        name:'Name',
                        number:'+38068899898',
                        email:'email@gmail.com',
                        telegram:'telegram',
                    }}
                    onSubmit={()=>{console.log("submit")}}>
                    {({handleChange})=>(
                        <Form className={classes.inputContainer}>
                            <Field
                                className={classes.field}
                                id="name"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}/>
                            <Field
                                className={classes.field}
                                id="number"
                                name="number"
                                placeholder="Number"
                                onChange={handleChange}/>
                            <Field
                                className={classes.field}
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}/>
                            <Field
                                className={classes.field}
                                id="telegram"
                                name="telegram"
                                placeholder="Telegram"
                                onChange={handleChange}/>
                            <MyButton type="submit">Submit</MyButton>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactUs;