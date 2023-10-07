import React from 'react';
import classes from './advantages.module.css';
import MyButton from "../UI/button/MyButton";
import AnimatedBlock from "../AnimatedBlock/AnimatedBlock";


const Advantages = () => {

    const advantages = [{
        id: new Date(),
        advantage: 'My sites are not just a pretty picture, but a full-fledged sales channel that constantly brings new customers.'
    },
        {
            id: new Date(),
            advantage: 'I don\'t use constructors (Redymag, Webflow, etc.), because I create only high-quality sites.'
        },
        {
            id: new Date(),
            advantage: 'Together with the site, you get a ready-made foundation for promotion on the Internet thanks to SEO and analytics.'
        },
        {
            id: new Date(),
            advantage: 'You order a complete product, because I take care of all stages of work - from the analysis of your business to the launch of a ready-made website.'
        },
        {
            id: new Date(),
            advantage: 'Cooperation with me is not only standard development, but also the discussion of dozens of new ideas for the development of your business.'
        },
        {
            id: new Date(),
            advantage: 'For me, there are no former clients, so once you order a site from me, you get my support forever.'
        },
    ];

    return (
        <div className={classes.container}>
            <h1>Why us!</h1>
            <div className={classes.advantagesWrap}>
                {advantages.map((advantage, index) => (
                    <AnimatedBlock key={index}>
                        <div className={classes.advantagesItem}>
                            <p className={classes.advantageText}>{advantage.advantage}</p>
                        </div>
                    </AnimatedBlock>
                ))}
            </div>
            <MyButton>Замовити</MyButton>
        </div>
    );
};

export default Advantages;