import React, { useEffect, useRef } from 'react';
import classes from "./animatedBlock.module.css";

const AnimatedBlock = ({children}) => {
    const blockRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    blockRef.current.style.transform = 'translateY(0)';
                    blockRef.current.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

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
