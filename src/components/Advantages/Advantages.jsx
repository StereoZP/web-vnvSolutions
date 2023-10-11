import React from 'react';
import classes from './advantages.module.css';
import CustomButton from "../UI/CustomButton/CustomButton";
import AnimatedBlock from "../AnimatedBlock/AnimatedBlock";

const Advantages = () => {

    const advantages = [{
        id: `${Math.random()}${Date.now()}`,
        advantage: 'My sites are not just a pretty picture, but a full-fledged sales channel that constantly brings new customers.'
    },
        {
            id: `${Math.random()}${Date.now()}`,
            advantage: 'I don\'t use constructors (Redymag, Webflow, etc.), because I create only high-quality sites.'
        },
        {
            id: `${Math.random()}${Date.now()}`,
            advantage: 'Together with the site, you get a ready-made foundation for promotion on the Internet thanks to SEO and analytics.'
        },
        {
            id: `${Math.random()}${Date.now()}`,
            advantage: 'You order a complete product, because I take care of all stages of work - from the analysis of your business to the launch of a ready-made website.'
        },
        {
            id: `${Math.random()}${Date.now()}`,
            advantage: 'Cooperation with me is not only standard development, but also the discussion of dozens of new ideas for the development of your business.'
        },
        {
            id: `${Math.random()}${Date.now()}`,
            advantage: 'For me, there are no former clients, so once you order a site from me, you get my support forever.'
        },
    ];

    return (
        <div className={classes.container}>
            <h1>Why us!</h1>
            <div className={classes.advantagesWrap}>
                {advantages.map((advantage) => (
                    <AnimatedBlock key={advantage.id}>
                        <div className={classes.advantagesItem}>
                            <p className={classes.advantageText}>{advantage.advantage}</p>
                        </div>
                    </AnimatedBlock>
                ))}
            </div>
            <CustomButton>Order</CustomButton>
        </div>
    );
};

export default Advantages;