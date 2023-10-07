import React, { useEffect, useRef } from 'react';
import classes from "./animatedBlock.module.css";

const AnimatedBlock = ({children}) => {
    const blockRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Поріг вхідної видимості блоку
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Виїзд блоку знизу
                    blockRef.current.style.transform = 'translateY(0)';
                    blockRef.current.style.opacity = '1';

                    // При досягненні порогу видаляємо спостереження
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        // Зупинка спостереження при розмонтовці компонента
        return () => {
            if (blockRef.current) {
                observer.unobserve(blockRef.current);
            }
        };
    }, []);

    return (
        <div ref={blockRef} className={classes.block}>
            {children}
        </div>
    );
};

export default AnimatedBlock;
