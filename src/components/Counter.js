import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
    const [visitorCount, setVisitorCount] = useState(0); // Initial visitor count
    const [templeCount, setTempleCount] = useState(0); // Initial temple count


    useEffect(() => {
        let currentVisitorCount = 0;
        let currentTempleCount = 0;

        const interval = setInterval(() => {
            currentVisitorCount += 1;
            currentTempleCount += 1;

            // Update visitor count
            if (currentVisitorCount <= 80) {
                setVisitorCount(currentVisitorCount);
            }

            // Update temple count
            if (currentTempleCount <= 10) {
                setTempleCount(currentTempleCount);
            }

            // Clear interval after reaching 200
            if (currentVisitorCount > 200 && currentTempleCount > 200) {
                clearInterval(interval);
            }
        }, 20); // Update every 10 milliseconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter-wrapper">
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{visitorCount}</span>+</h3>
                <p className="counter-name">Visitors</p>
            </div>
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{templeCount}</span>+</h3>
                <p className="counter-name">Card Issued</p>
            </div>
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{visitorCount}</span>+</h3>
                <p className="counter-name">Medicines</p>
            </div>
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{templeCount}</span>+</h3>
                <p className="counter-name">Certificates</p>
            </div>
        </div>
    );
}

export default Counter;