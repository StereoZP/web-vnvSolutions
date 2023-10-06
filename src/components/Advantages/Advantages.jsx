import React from 'react';
import classes from './advantages.module.css';
import { TypeAnimation } from 'react-type-animation';


const Advantages = () => {

    const advantages = [
        "Перевага 1",
        "Перевага 2",
        "Перевага 3",
        "Перевага 4",
        "Перевага 5",
        "Перевага 6"
    ];

    return (
        <div>
            <h2>Чому ми!</h2>
            <div className={classes.advantages_wrapp}>
                {advantages.map((advantage, index) => (
                    <div key={index} className={classes.advantages_item}>
                        <div>
                            <p>{advantage}</p>
                            <TypeAnimation
                                sequence={[
                                    'VNV Solutions IT Agency',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={0}
                                cursor={false}
                            />
                        </div>

                    </div>
                ))}
                <button className={classes.animatedButton}>Замовити</button>
            </div>
        </div>
    );
};

export default Advantages;