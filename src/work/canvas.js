// Canvas.js
import React, { useEffect, useRef } from 'react';
import { startSimulation, stopSimulation } from './scripts/what_is_finngen';

const Canvas = () => {
    const containerRef = useRef(null);  // Reference for the canvas container
    const restartRef = useRef(null);     // Reference for the button container

    useEffect(() => {
        // Get the elements from createCanvas
        const { id, canvas, restart } = startSimulation();

        // Append the canvas to the container
        if (containerRef.current) {
            containerRef.current.appendChild(canvas);
        }

        // Append the button to the buttonRef container
        if (restartRef.current) {
            restartRef.current.appendChild(restart);
        }

        // Cleanup when the component unmounts
        return () => {
            if (containerRef.current) containerRef.current.innerHTML = '';  // Clear the canvas container
            if (restartRef.current) restartRef.current.innerHTML = '';  // Clear the button container
            stopSimulation();
        };
    }, []);  // Empty dependency array means this effect runs only once (on mount)

    return (
        <div style={{ position: "relative" }}>
            <div ref={containerRef}></div>   {/* Canvas will be appended here */}
            <div ref={restartRef}></div>      {/* Button will be appended here */}
        </div>
    );
};

export default Canvas;