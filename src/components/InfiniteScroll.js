import React, { useEffect, useRef } from 'react';

const InfiniteScroll = ({ children, handleApplyFilters }) => {
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                handleApplyFilters()
            }
        }, options);

        observer.current.observe(document.getElementById('infinite-scroll'));

        return () => observer.current.disconnect();
    }, []);

    return (
        <div id="infinite-scroll">
            {children}
        </div>
    );
};

export default InfiniteScroll;
