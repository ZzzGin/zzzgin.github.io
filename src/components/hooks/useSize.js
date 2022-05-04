import { useState, useEffect } from 'react'

function getWindowDimensions() {

    let width, height;
    if (typeof window === 'undefined') {
        width = 0;
        height = 0;
    } else {
        width = window.innerWidth;
        height = window.innerHeight;
    }
    return { width, height };
}

export const useSize = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        if (typeof window !== 'undefined') 
            window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return windowDimensions;
}
