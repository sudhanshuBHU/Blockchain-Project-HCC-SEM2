import React, { useState, useEffect } from 'react';
import './Counter.css';
import { useSelector } from 'react-redux';


const Counter = () => {
    const [visitorCount, setVisitorCount] = useState(0); // Initial visitor count
    const [cardIssued, setcardIssued] = useState(0); // Initial temple count
    const [medicines, setMedicines] = useState(0);
    const [certificates, setcertificates] = useState(0);
    let maxVisitor = useSelector(state => state.counter.visitors);
    let maxCardIssued = useSelector(state => state.counter.cardsIssued);
    let maxMedicines = useSelector(state => state.counter.meds);
    let maxCertificates = useSelector(state => state.counter.certificates);

    useEffect(() => {
        let currentVisitorCount = 0;
        let currentcardIssued = 0;
        let currentMed = 0;
        let currentCerti = 0;

        const interval = setInterval(() => {
            currentVisitorCount += 1;
            currentcardIssued += 1;
            currentCerti += 1;
            currentMed += 1;

            // Update visitor count
            if (currentVisitorCount <= maxVisitor) {
                setVisitorCount(currentVisitorCount);
            }

            // Update temple count
            if (currentcardIssued <= maxCardIssued) {
                setcardIssued(currentcardIssued);
            }
            if (currentMed <= maxMedicines) {
                setMedicines(currentMed);
            }
            if (currentCerti <= maxCertificates) {
                setcertificates(currentCerti);
            }

            // Clear interval after reaching 200
            if (currentVisitorCount > 200 && currentcardIssued > 200) {
                clearInterval(interval);
            }
        }, 30); // Update every 20 milliseconds

        // Clean up interval on component unmount
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="counter-wrapper">
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{visitorCount}</span>+</h3>
                <p className="counter-name">Visitors</p>
            </div>
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{cardIssued}</span>+</h3>
                <p className="counter-name">Card Issued</p>
            </div>
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{medicines}</span>+</h3>
                <p className="counter-name">Medicines</p>
            </div>
            <div className="counter1">
                <h3 className="counter-count"><span id="visitors">{certificates}</span>+</h3>
                <p className="counter-name">Certificates</p>
            </div>
        </div>
    );
}

export default Counter;