import React from 'react';
import {Field, Form, Formik} from "formik";
import classes from "./contactUs.module.css";
import CustomButton from "../UI/CustomButton/CustomButton";

const ContactUsForm = () => {
    return (
        <div>
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
                        <CustomButton type="submit">Submit</CustomButton>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactUsForm;